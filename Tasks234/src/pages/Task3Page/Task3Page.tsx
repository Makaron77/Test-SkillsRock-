import React, { useEffect, useState } from 'react';
import styles from './Task3Page.module.scss';
import ImageSlider from './components/imageSlider/imageSlider';
import { IApiResponse } from './components/styleUsers';
import { Skeleton } from 'antd';
export default function Task3Page() {
	const [users, setUsers] = useState<IApiResponse | null>(null);

	useEffect(() => {
		async function fetchRandomUsers(): Promise<void> {
			try {
				//! API из задания работает лично у меня только через VPN, так что для получения данных возможно потребуется включить впн в расширениях браузера!
				const response = await fetch('https://randomuser.me/api/?results=10');

				const data: IApiResponse = await response.json();
				setUsers(data);
			} catch (error) {
				console.error(
					'ОШИБКА! данные пользователей не получены(запустите VPN т.к. API не работает у некоторых без VPN',
					error,
				);
			}
		}
		fetchRandomUsers();
	}, []);

	return (
		<div className={styles.container}>
			{users ? (
				<ImageSlider data={users.results} />
			) : (
				<p>
					<Skeleton.Image style={{ width: 400, height: 400 }} active />
				</p>
			)}
		</div>
	);
}
