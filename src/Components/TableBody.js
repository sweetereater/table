import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ content }) => {

    return (
        <tbody>
            {
                content.map(item => <TableRow key={item.id} data={item} />)
            }
        </tbody>
    )
}

export default TableBody