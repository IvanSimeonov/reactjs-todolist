import React from 'react';

const OutputArea = (props) => {

    return (
        <li onClick={() => props.onChecked(props.id)}>
            {props.text}
        </li>
    )
}

export default OutputArea;