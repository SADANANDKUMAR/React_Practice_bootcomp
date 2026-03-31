// transformNode.js
import { useState } from 'react';
import { BaseNode, NodeField, NodeInput, NodeSelect } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'uppercase');
  const [customExpr, setCustomExpr] = useState(data?.customExpr || '');

  return (
    <BaseNode
      id={id}
      title="Transform"
      icon="⚡"
      color="#a855f7"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[{ id: 'output', label: 'output' }]}
    >
      <NodeField label="Operation">
        <NodeSelect value={operation} onChange={e => setOperation(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
          <option value="custom">Custom</option>
        </NodeSelect>
      </NodeField>
      {operation === 'custom' && (
        <NodeField label="Expression">
          <NodeInput type="text" value={customExpr} onChange={e => setCustomExpr(e.target.value)} placeholder="e.g. x.split(',')[0]" />
        </NodeField>
      )}
    </BaseNode>
  );
};
