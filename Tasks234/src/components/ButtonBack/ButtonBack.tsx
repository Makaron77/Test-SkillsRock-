import React from 'react';
import { Link } from 'react-router-dom';
import styles from './buttonBack.module.scss';

export default function ButtonBack() {
	return <Link to={'/'} className={styles.button}>На главную</Link>;
}
