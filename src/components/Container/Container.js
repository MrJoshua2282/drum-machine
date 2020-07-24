import React from 'react';

import './Container.css';
import Btns from '../Btns/Btns';


export default function Container(props) {
    return (
        <React.Fragment>
            <div id='drum-machine'>
                {props.errorMess && <div className='error'>{props.errorMess}</div>}
                {!props.errorMess && <div id='display'>{props.keyPress || ''}</div>}
                <Btns setKeyPressHandler={props.setKeyPressHandler} />
            </div>

        </React.Fragment>
    )
}
