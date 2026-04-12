import React from 'react';

export default function StudentTable() {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <table className="data-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Courses enrolled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: 500 }}>Rahul</td>
            <td>Mathematics, Physics</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 500 }}>Priya</td>
            <td>Mathematics, Data Structures</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 500 }}>Aman</td>
            <td>Physics, Data Structures, English</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
