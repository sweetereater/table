import React from 'react';

const TableHead = ({ columns, handleClick }) => {
    return (
        <thead>
            <tr>
                {columns.map((item, i) => {
                    return <th
                        key={i}
                        onClick={() => {
                            handleClick(item);
                        }}
                    >
                        {item}
                    </th>
                })}
            </tr>
        </thead>
    )
}

export default TableHead