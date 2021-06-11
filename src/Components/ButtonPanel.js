import React from 'react';

const ButtonPanel = ({ pages, handleClick }) => {
    return (
        <div className="paginationPanel">
            {
                pages.map(item => {
                    return <button
                        className="paginationButton"
                        onClick={() => handleClick(item)}
                        key={item}>
                        {item}
                    </button>
                })
            }
        </div>
    )
}

export default ButtonPanel;