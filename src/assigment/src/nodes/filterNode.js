// filterNode.js
import { useState } from 'react';
import { BaseNode, NodeField, NodeInput, NodeSelect } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');
  const [operator, setOperator] = useState(data?.operator || 'contains');

  return (
    <BaseNode
      id={id}
      title="Filter"
      icon="🔍"
      color="#ec4899"
      inputs={[{ id: 'input', label: 'input' }]}
      outputs={[
        { id: 'match', label: 'match', style: { top: '35%' } },
        { id: 'no-match', label: 'no match', style: { top: '65%' } },
      ]}
    >
      <NodeField label="Operator">
        <NodeSelect value={operator} onChange={e => setOperator(e.target.value)}>
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
        </NodeSelect>
      </NodeField>
      <NodeField label="Value">
        <NodeInput type="text" value={condition} onChange={e => setCondition(e.target.value)} placeholder="filter value..." />
      </NodeField>
    </BaseNode>
  );
};
