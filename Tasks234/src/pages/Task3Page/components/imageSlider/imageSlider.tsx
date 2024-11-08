import React, { useEffect, useRef } from 'react';
import styles from './imageSlider.module.scss';
import { ImageSliderProps } from '../styleUsers';

export default function ImageSlider({ data }: ImageSliderProps) {
	const imageContainerRef = useRef<HTMLDivElement>(null);

	const prev = () => {
		if (imageContainerRef.current) {
			imageContainerRef.current.scrollLeft -= 250;
		}
	};

	const next = () => {
		if (imageContainerRef.current) {
			imageContainerRef.current.scrollLeft += 250;
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (imageContainerRef.current) {

				imageContainerRef.current.scrollLeft += 250;

				if (
					imageContainerRef.current.scrollLeft +
						imageContainerRef.current.clientWidth >=
					imageContainerRef.current.scrollWidth
				) {
					imageContainerRef.current.scrollLeft = 0;
				}
			}
		}, 3000); 
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.prev} onClick={prev}></div>
				<div className={styles.slidePanel} ref={imageContainerRef}>
					{data.map(item => (
						<div key={item.login.uuid} className={styles.profile}>
							<img src={item.picture.large} alt={item.name.first} />
							<div className={styles.data}>
								<h3>{`ФИО: ${item.name.title} ${item.name.first} ${item.name.last}`}</h3>
								<p>Email: {item.email}</p>
							</div>
						</div>
					))}
				</div>
				<div className={styles.next} onClick={next}></div>
			</div>
		</div>
	);
}
