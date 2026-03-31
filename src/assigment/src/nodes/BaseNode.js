// BaseNode.js - Reusable node abstraction for all node types

import { Handle, Position } from 'reactflow';

/**
 * BaseNode - A reusable abstraction for all pipeline nodes.
 *
 * Props:
 *  - id: string — node id
 *  - title: string — node header label
 *  - color: string — accent color for the header
 *  - icon: string — emoji or icon character shown in header
 *  - inputs: Array<{ id: string, label: string, style?: object }> — left handles
 *  - outputs: Array<{ id: string, label: string, style?: object }> — right handles
 *  - children: ReactNode — custom content inside the node body
 *  - minWidth: number — minimum width (default 220)
 *  - minHeight: number — minimum height (default 100)
 *  - width: number — dynamic width override
 *  - height: number — dynamic height override
 */
export const BaseNode = ({
  id,
  title,
  color = '#6366f1',
  icon = '⚙️',
  inputs = [],
  outputs = [],
  children,
  minWidth = 220,
  minHeight = 100,
  width,
  height,
}) => {
  const nodeWidth = width || minWidth;
  const nodeHeight = height || minHeight;

  return (
    <div
      style={{
        width: nodeWidth,
        minHeight: nodeHeight,
        background: 'linear-gradient(145deg, #1e2433, #252d3d)',
        border: `1.5px solid ${color}55`,
        borderRadius: '12px',
        boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px ${color}22`,
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        overflow: 'visible',
        position: 'relative',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(90deg, ${color}cc, ${color}88)`,
          borderRadius: '10px 10px 0 0',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '16px' }}>{icon}</span>
        <span
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: '13px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '10px 14px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>

      {/* Input Handles (Left) */}
      {inputs.map((handle, i) => (
        <div key={handle.id}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${handle.id}`}
            style={{
              background: color,
              border: '2px solid #1e2433',
              width: '10px',
              height: '10px',
              top: handle.style?.top || `${((i + 1) / (inputs.length + 1)) * 100}%`,
              ...handle.style,
            }}
          />
          {handle.label && (
            <span
              style={{
                position: 'absolute',
                left: '14px',
                top: handle.style?.top || `${((i + 1) / (inputs.length + 1)) * 100}%`,
                transform: 'translateY(-50%)',
                fontSize: '10px',
                color: '#8892a4',
                pointerEvents: 'none',
              }}
            >
              {handle.label}
            </span>
          )}
        </div>
      ))}

      {/* Output Handles (Right) */}
      {outputs.map((handle, i) => (
        <div key={handle.id}>
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${handle.id}`}
            style={{
              background: color,
              border: '2px solid #1e2433',
              width: '10px',
              height: '10px',
              top: handle.style?.top || `${((i + 1) / (outputs.length + 1)) * 100}%`,
              ...handle.style,
            }}
          />
          {handle.label && (
            <span
              style={{
                position: 'absolute',
                right: '14px',
                top: handle.style?.top || `${((i + 1) / (outputs.length + 1)) * 100}%`,
                transform: 'translateY(-50%)',
                fontSize: '10px',
                color: '#8892a4',
                pointerEvents: 'none',
                textAlign: 'right',
              }}
            >
              {handle.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

// Reusable styled field components for node bodies
export const NodeField = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
    {label && (
      <label style={{ fontSize: '10px', color: '#8892a4', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
        {label}
      </label>
    )}
    {children}
  </div>
);

export const NodeInput = (props) => (
  <input
    {...props}
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
      transition: 'border-color 0.15s',
      ...props.style,
    }}
    onFocus={e => e.target.style.borderColor = '#6366f1'}
    onBlur={e => e.target.style.borderColor = '#2d3748'}
  />
);

export const NodeSelect = ({ children, ...props }) => (
  <select
    {...props}
    style={{
      background: '#0f1520',
      border: '1px solid #2d3748',
      borderRadius: '6px',
      color: '#e2e8f0',
      fontSize: '12px',
      padding: '5px 8px',
      outline: 'none',
      width: '100%',
      cursor: 'pointer',
      ...props.style,
    }}
  >
    {children}
  </select>
);

export const NodeTextarea = (props) => (
  <textarea
    {...props}
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
      ...props.style,
    }}
    onFocus={e => e.target.style.borderColor = '#6366f1'}
    onBlur={e => e.target.style.borderColor = '#2d3748'}
  />
);
