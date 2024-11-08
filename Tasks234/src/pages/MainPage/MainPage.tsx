import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainPage.module.scss'
export default function MainPage() {
	return (
		<div className={styles.container}>
			<h1>Выбери задание 😊</h1>
			<div className={styles.buttons}>
				<Link to={'task2(DOM)'}>Задание 2</Link>
				<Link to={'task3(FetchAPI)'}>Задание 3</Link>
			</div>
		</div>
	);
}
