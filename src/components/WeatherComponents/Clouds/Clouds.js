import React from 'react';
import Classes from './Clouds.scss';

const Clouds = props => {
    return (
            <div className={Classes.box}>
                <div className={Classes.wrapper}>
                    <div className={Classes.cloud}>
                        <div className={Classes.cloud_left}></div>
                        <div className={Classes.cloud_right}></div>
                    </div>
                </div>
            </div>
    )
}

export default Clouds;