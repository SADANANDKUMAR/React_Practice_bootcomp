// draggableNode.js

export const DraggableNode = ({ type, label, emoji = '⚙️', color = '#6366f1' }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
      style={{
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '8px',
        background: `${color}18`,
        border: `1px solid ${color}44`,
        transition: 'background 0.15s, border-color 0.15s, transform 0.1s',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}30`;
        e.currentTarget.style.borderColor = `${color}88`;
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = `${color}18`;
        e.currentTarget.style.borderColor = `${color}44`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <span style={{ fontSize: '14px' }}>{emoji}</span>
      <span style={{ color: '#cbd5e1', fontSize: '12px', fontWeight: '600', fontFamily: "'DM Sans', sans-serif" }}>
        {label}
      </span>
    </div>
  );
};
