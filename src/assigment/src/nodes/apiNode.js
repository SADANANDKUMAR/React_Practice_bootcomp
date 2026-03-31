// apiNode.js
import { useState } from 'react';
import { BaseNode, NodeField, NodeInput, NodeSelect } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      title="API Call"
      icon="🌐"
      color="#06b6d4"
      inputs={[
        { id: 'body', label: 'body', style: { top: '40%' } },
        { id: 'headers', label: 'headers', style: { top: '70%' } },
      ]}
      outputs={[
        { id: 'response', label: 'response', style: { top: '40%' } },
        { id: 'error', label: 'error', style: { top: '70%' } },
      ]}
    >
      <NodeField label="Method">
        <NodeSelect value={method} onChange={e => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </NodeSelect>
      </NodeField>
      <NodeField label="URL">
        <NodeInput type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://api.example.com/..." />
      </NodeField>
    </BaseNode>
  );
};
