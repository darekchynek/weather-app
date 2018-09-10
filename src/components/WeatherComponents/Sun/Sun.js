import React from 'react';
import Classes from './Sun.scss';

const Sun = props => {
    return (
        <div className={Classes.box}>
            <div className={Classes.wrapper}>
                <div className={Classes.sunBox}>
                    <div className={Classes.sun}></div>
                </div>
            </div>
        </div>
    )
}

export default Sun;