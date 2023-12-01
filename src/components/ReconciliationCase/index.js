import { useState } from 'react';
import uuid from 'uuid';

function List() {
    const [values, setValues] = useState([]);

    const addRow = () => {
        const id = uuid();
        setValues((prev) => [
            ...prev,
            {
                id: id,
            },
        ]);
    };

    const removeRow = (index) => {
        setValues((prev) => {
            const valuesExcludeRemoved = prev.filter(
                (_v, idx) => idx !== index
            );
            return valuesExcludeRemoved;
        });
    };

    return (
        <div className="App">
            <button onClick={addRow}>click here to add row</button>
            <div
                className="container"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {values.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <input type="text" value={item.name} />
                            <button
                                onClick={() => {
                                    removeRow(index);
                                }}
                            >
                                remove
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default List;
