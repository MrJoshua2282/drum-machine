import React from 'react';

import './Btns.css';
import { allSounds } from '../../utilities/allSounds';

export default function Btns(props) {

    const btnList = allSounds.map((el, i) => {
        return (
            <span key={i} id={el.name} className='drum-pad' onClick={() => {
                document.querySelector(`#${el.key}`).play();
                props.setKeyPressHandler(el.key);
            }}>{el.key}
                <audio src={el.name} className='clip' id={el.key} />
            </span>
        );
    });

    return (
        <div>
            {btnList}
        </div>
    )
}
