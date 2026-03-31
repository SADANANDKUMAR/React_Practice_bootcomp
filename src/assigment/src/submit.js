// submit.js - Part 4: Backend Integration

import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const { num_nodes, num_edges, is_dag } = data;

      alert(
        `✅ Pipeline Analysis\n\n` +
        `📦 Nodes: ${num_nodes}\n` +
        `🔗 Edges: ${num_edges}\n` +
        `🔄 Is DAG: ${is_dag ? 'Yes ✓' : 'No ✗ (contains a cycle)'}`
      );
    } catch (err) {
      alert(`❌ Error: ${err.message}\n\nMake sure the backend is running on http://localhost:8000`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px',
      background: 'linear-gradient(180deg, #0f1520 0%, #0a0f1a 100%)',
      borderTop: '1px solid #1e2d40',
    }}>
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          background: loading
            ? '#374151'
            : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 32px',
          fontSize: '13px',
          fontWeight: '700',
          fontFamily: "'DM Sans', sans-serif",
          cursor: loading ? 'not-allowed' : 'pointer',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          transition: 'opacity 0.2s, transform 0.1s',
          boxShadow: loading ? 'none' : '0 4px 15px rgba(99,102,241,0.4)',
        }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        {loading ? '⏳ Analyzing...' : '🚀 Submit Pipeline'}
      </button>
    </div>
  );
};
