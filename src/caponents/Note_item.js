// Note_item.jsx
import React from 'react';

export default function Note_item({ data, title }) {
  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <ul className="list-group list-group-flush">
            {Object.keys(data).map((key) => (
              <li key={key} className="list-group-item">
                {key}: {data[key]}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          Card footer
        </div>
      </div>
    </div>
  );
}


