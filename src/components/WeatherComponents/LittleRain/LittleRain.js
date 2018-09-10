import React from 'react';
import Classes from './LittleRain.scss';

const LittleRain = props => {
    return (
            <div className={Classes.box}>
                <div className={Classes.wrapper}>
                    <div className={Classes.cloud}>
                        <div className={Classes.cloud_left}></div>
                        <div className={Classes.cloud_right}></div>
                    </div>
                    <div className={Classes.rain}>
                        <div className={Classes.drop}></div>
                        <div className={Classes.drop}></div>
                        <div className={Classes.drop}></div>
                        <div className={Classes.drop}></div>
                    </div>
                    <div className={Classes.surface}>
                        <div className={Classes.hit}></div>
                        <div className={Classes.hit}></div>
                        <div className={Classes.hit}></div>
                        <div className={Classes.hit}></div>
                    </div>
                </div>
            </div>
    )
}

export default LittleRain;