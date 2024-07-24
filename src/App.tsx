import './App.css';
import { useState } from 'react';
import { Checklist, IdValue } from './checkList';

function App() {
  const [checkedId, setCheckedId] = useState<IdValue | null>(null);

  const handleCheckedIdsChange = (newCheckedIds: IdValue[]) => {
    const newCheckdIdArr = newCheckedIds.filter((id) => id !== checkedId);
    if (newCheckdIdArr.length === 1) {
      setCheckedId(newCheckdIdArr[0]);
    } else {
      setCheckedId(null);
    }
  };

  return (
    <div className="p-10">
      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 3, name: 'Lucy', role: 'Manager' },
          { id: 4, name: 'Bob', role: 'Developer' },
          { id: 5, name: 'Lucy', role: 'Manager' },
          { id: 6, name: 'Bob', role: 'Developer' },
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
        checkedIds={checkedId === null ? [] : [checkedId]}
        onCheckedIdsChange={handleCheckedIdsChange}
      />
    </div>
  );
}

export default App;
