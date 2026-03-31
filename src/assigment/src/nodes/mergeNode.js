// mergeNode.js
import { useState } from 'react';
import { BaseNode, NodeField, NodeInput } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  const [separator, setSeparator] = useState(data?.separator || ' ');

  return (
    <BaseNode
      id={id}
      title="Merge"
      icon="🔀"
      color="#14b8a6"
      inputs={[
        { id: 'input1', label: 'input 1', style: { top: '35%' } },
        { id: 'input2', label: 'input 2', style: { top: '65%' } },
      ]}
      outputs={[{ id: 'merged', label: 'merged' }]}
    >
      <NodeField label="Separator">
        <NodeInput
          type="text"
          value={separator}
          onChange={e => setSeparator(e.target.value)}
          placeholder="e.g. space, comma, newline"
        />
      </NodeField>
      <p style={{ margin: 0, fontSize: '10px', color: '#8892a4' }}>
        Combines two inputs into one string.
      </p>
    </BaseNode>
  );
};
