import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ head, handleClick, data }) => {

    return (
        <table>
            <TableHead columns={head} handleClick={handleClick} />
            <TableBody content={data} />
        </table>
    )
}

export default Table;