// textNode.js - Part 3: auto-resize + dynamic variable handles

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode, NodeField } from './BaseNode';

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

function extractVariables(text) {
  const vars = [];
  const seen = new Set();
  let match;
  const regex = new RegExp(VAR_REGEX.source, 'g');
  while ((match = regex.exec(text)) !== null) {
    const name = match[1];
    if (!seen.has(name)) {
      seen.add(name);
      vars.push(name);
    }
  }
  return vars;
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 220, height: 120 });
  const textareaRef = useRef(null);
  const mirrorRef = useRef(null);

  useEffect(() => {
    const vars = extractVariables(currText);
    setVariables(vars);

    // Auto-resize: measure text dimensions
    if (mirrorRef.current) {
      mirrorRef.current.style.width = '180px';
      mirrorRef.current.value = currText || ' ';
      const scrollH = mirrorRef.current.scrollHeight;
      const newHeight = Math.max(120, scrollH + 80);
      const newWidth = Math.max(220, Math.min(420, currText.length * 7.5 + 60));
      setNodeSize({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  const handleCount = variables.length;

  return (
    <div
      style={{
        width: nodeSize.width,
        minHeight: nodeSize.height,
        background: 'linear-gradient(145deg, #1e2433, #252d3d)',
        border: '1.5px solid #3b82f655',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px #3b82f622',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        position: 'relative',
        transition: 'width 0.15s ease, min-height 0.15s ease',
        overflow: 'visible',
      }}
    >
      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg, #3b82f6cc, #3b82f688)',
        borderRadius: '10px 10px 0 0',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ fontSize: '16px' }}>📝</span>
        <span style={{ color: '#fff', fontWeight: '700', fontSize: '13px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Text
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '10px 14px 12px' }}>
        <NodeField label="Content">
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={e => setCurrText(e.target.value)}
            rows={3}
            style={{
              background: '#0f1520',
              border: '1px solid #2d3748',
              borderRadius: '6px',
              color: '#e2e8f0',
              fontSize: '12px',
              padding: '5px 8px',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box',
              resize: 'none',
              fontFamily: 'inherit',
              transition: 'border-color 0.15s',
              minHeight: '60px',
            }}
            onFocus={e => e.target.style.borderColor = '#3b82f6'}
            onBlur={e => e.target.style.borderColor = '#2d3748'}
          />
        </NodeField>
        {variables.length > 0 && (
          <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {variables.map(v => (
              <span key={v} style={{
                background: '#3b82f622',
                border: '1px solid #3b82f655',
                borderRadius: '4px',
                padding: '2px 6px',
                fontSize: '10px',
                color: '#93c5fd',
              }}>
                {`{{${v}}}`}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Mirror textarea for height measurement (hidden) */}
      <textarea
        ref={mirrorRef}
        readOnly
        aria-hidden
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          fontSize: '12px',
          padding: '5px 8px',
          fontFamily: 'inherit',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          overflow: 'hidden',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      {/* Dynamic Variable Handles (Left) */}
      {variables.map((varName, i) => (
        <div key={varName}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${varName}`}
            style={{
              background: '#3b82f6',
              border: '2px solid #1e2433',
              width: '10px',
              height: '10px',
              top: `${((i + 1) / (handleCount + 1)) * 100}%`,
            }}
          />
          <span style={{
            position: 'absolute',
            left: '14px',
            top: `${((i + 1) / (handleCount + 1)) * 100}%`,
            transform: 'translateY(-50%)',
            fontSize: '10px',
            color: '#93c5fd',
            pointerEvents: 'none',
          }}>
            {varName}
          </span>
        </div>
      ))}

      {/* Output Handle (Right) */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: '#3b82f6',
          border: '2px solid #1e2433',
          width: '10px',
          height: '10px',
        }}
      />
    </div>
  );
};
