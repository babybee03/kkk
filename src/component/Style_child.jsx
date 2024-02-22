import React from 'react';

function Style_child({children}) {
    const style_01 = {
        border: '1px solid #333',
        fontSize: '20pt',
        backgroundColor: '#f1f1f1'
    }
    return (
        <div style={style_01}>
            {children}
        </div>
    )
}

export default Style_child;