// App.js

import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#0a0f1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
