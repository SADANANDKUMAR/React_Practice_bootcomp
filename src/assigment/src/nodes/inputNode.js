// inputNode.js

import { useState } from 'react';
import { BaseNode, NodeField, NodeInput, NodeSelect } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      icon="📥"
      color="#10b981"
      outputs={[{ id: 'value', label: 'value' }]}
    >
      <NodeField label="Name">
        <NodeInput type="text" value={currName} onChange={e => setCurrName(e.target.value)} />
      </NodeField>
      <NodeField label="Type">
        <NodeSelect value={inputType} onChange={e => setInputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </NodeSelect>
      </NodeField>
    </BaseNode>
  );
};
