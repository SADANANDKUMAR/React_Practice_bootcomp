// noteNode.js
import { useState } from 'react';
import { BaseNode, NodeField } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  return (
    <BaseNode
      id={id}
      title="Note"
      icon="📌"
      color="#f97316"
      inputs={[]}
      outputs={[]}
    >
      <NodeField label="Note">
        <textarea
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="Add a comment or annotation..."
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
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.borderColor = '#f97316'}
          onBlur={e => e.target.style.borderColor = '#2d3748'}
        />
      </NodeField>
    </BaseNode>
  );
};
