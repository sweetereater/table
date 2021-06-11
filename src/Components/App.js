import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import InputFilter from './InputFilter';
import Table from './Table';

const App = ({ dataArr }) => {

    const [sortBy, setSortBy] = useState("id");
    const [order, setOrder] = useState(false);

    const handleSort = (item) => {

        setSortBy(prevItem => {

            if (prevItem === item) {
                setOrder(prevOrder => !prevOrder);
            } else {
                setOrder(false)
            }
            return item;
        });
    }

    const [filter, setFilter] = useState("");
    const handleFilter = event => {
        setFilter(event.target.value);
    }

    const [page, setPage] = useState(1);
    const handlePagination = page => {
        setPage(prevPage => {
            return page;
        })
    }



    const [data, setData] = useState(dataArr);
    const filteredData = data.filter(item => {
        return Object.values(item)
            .join()
            .toLowerCase()
            .includes(filter.toLowerCase())
    })

    const visibleData = filteredData.slice((page - 1) * 50, page * 50);

    const sortedData = [...visibleData].sort((item1, item2) => {
        switch (item1[sortBy] > item2[sortBy]) {
            case true:
                return order ? -1 : 1
            case false:
                return order ? 1 : -1
        }
    })

    const totalPages = Math.ceil(filteredData.length / 50);

    const pages = [...new Array(totalPages)].map((_, i) => i + 1);

    return (
        <div className="container">

            <InputFilter value={filter} handleChange={handleFilter} />
            <Table
                head={Object.keys(data[0])}
                handleClick={handleSort}
                data={sortedData}
            />
            <ButtonPanel pages={pages} handleClick={handlePagination} />

        </div>
    )
}

export default App;