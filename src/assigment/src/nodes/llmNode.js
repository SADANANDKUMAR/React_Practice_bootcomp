// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon="🤖"
      color="#8b5cf6"
      inputs={[
        { id: 'system', label: 'system', style: { top: '33%' } },
        { id: 'prompt', label: 'prompt', style: { top: '66%' } },
      ]}
      outputs={[{ id: 'response', label: 'response' }]}
    >
      <p style={{ margin: 0, fontSize: '12px', color: '#8892a4', fontStyle: 'italic' }}>
        Connect a system prompt and user prompt to generate a response.
      </p>
    </BaseNode>
  );
};
