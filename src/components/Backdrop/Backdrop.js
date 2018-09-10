import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Backdrop.scss';

const backdrop = props => <Link to="/"><div className={classes.Backdrop}>{props.children}</div></Link>

export default backdrop;