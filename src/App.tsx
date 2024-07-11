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
      />
    </div>
  );
}

export default App;
