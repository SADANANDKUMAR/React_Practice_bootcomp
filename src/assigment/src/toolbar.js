// toolbar.js

import { DraggableNode } from './draggableNode';

const nodeList = [
  { type: 'customInput', label: 'Input',     emoji: '📥', color: '#10b981' },
  { type: 'llm',         label: 'LLM',       emoji: '🤖', color: '#8b5cf6' },
  { type: 'customOutput',label: 'Output',    emoji: '📤', color: '#f59e0b' },
  { type: 'text',        label: 'Text',      emoji: '📝', color: '#3b82f6' },
  { type: 'filter',      label: 'Filter',    emoji: '🔍', color: '#ec4899' },
  { type: 'api',         label: 'API Call',  emoji: '🌐', color: '#06b6d4' },
  { type: 'note',        label: 'Note',      emoji: '📌', color: '#f97316' },
  { type: 'transform',   label: 'Transform', emoji: '⚡', color: '#a855f7' },
  { type: 'merge',       label: 'Merge',     emoji: '🔀', color: '#14b8a6' },
];

export const PipelineToolbar = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #0f1520 0%, #131b2a 100%)',
      borderBottom: '1px solid #1e2d40',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginRight: '12px',
        paddingRight: '16px',
        borderRight: '1px solid #1e2d40',
      }}>
        <span style={{ fontSize: '20px' }}>🔗</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: '800',
          fontSize: '15px',
          color: '#e2e8f0',
          letterSpacing: '0.5px',
        }}>
          VectorShift
        </span>
      </div>

      <span style={{ fontSize: '11px', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
        Nodes
      </span>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {nodeList.map(node => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
            emoji={node.emoji}
            color={node.color}
          />
        ))}
      </div>
    </div>
  );
};
