import React from 'react'
import Table from '../Table/Table';
export default function Body({headings, employees, handleSort}) {
    return (
        <div>
            <table>
                <tbody>
                    <th>
                        <tr>
                        {headings.map(({ name, width }) => {
              return (
                <th
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
                        </tr>
                    </th>
                </tbody>
                <Table
                employees={employees} />
            </table>
        </div>
    )
}