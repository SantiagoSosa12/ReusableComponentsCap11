import './App.css';
import { Checklist } from './checkList';

function App() {
  return (
    <div className="p-10">
      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        // style is not defined as a prop in CheckList, but we are using props spreadin to add it.
        style={{
          width: '',
          maxHeight: '300px',
          overflowY: 'auto',
          backgroundColor: '#FFF176',
        }}
        renderItem={(item) => (
          <li key={item.id} className="bg-white p-4 border-b-2">
            <div className="text-xl text-slate-800 pb-1">{item.name}</div>
            <div className="text-slate-500">{item.role}</div>
          </li>
        )}
      />
    </div>
  );
}

export default App;
