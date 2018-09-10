import React from 'react';
import classes from './Loading.scss';
import Backdrop from '../Backdrop/Backdrop';
import loading from '../../assets/beer.png';

const Loading = props => (
    <Backdrop>
        <div className={classes.imgContainer}>
            <img className={classes.loading} src={loading} alt="loading gear" />
        </div>
    </Backdrop>
)
export default Loading;