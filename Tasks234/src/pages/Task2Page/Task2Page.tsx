import React, { useState } from 'react';
import styles from './Task2Page.module.scss';
import { ITodo } from '../../types/types';
import { message } from 'antd';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
export default function Task2Page() {
	const [newTodo, setNewTodo] = useState<string>('');
	const [todos, setTodos] = useState<ITodo[]>([]);
	const [alignment, setAlingment] = useState<string>('all');
	function handleAddTodo(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!newTodo.trim()) {
			message.error('Заполните поле');
			return;
		}
		try {
			setTodos(prevTodos => [{ text: newTodo, check: false }, ...prevTodos]);
			setNewTodo('');
		} catch (err) {
			console.error('Ошибка при добавлении задачи:', err);
		}
	}

	function toggleCheck(index: number) {
		setTodos(prevTodos =>
			prevTodos.map((todo, i) =>
				i === index ? { ...todo, check: !todo.check } : todo,
			),
		);
	}

	function handleDeleteItem(index: number) {
		setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
	}
	const filteredTodos = todos.filter((todo: ITodo) => {
		if (alignment === 'all') return true;
		if (alignment === 'active') return !todo.check;
		if (alignment === 'completed') return todo.check;
		return true;
	});

	return (
		<div className={styles.container}>
			<ButtonBack />
			<h1>Задание 2</h1>
			<div className={styles.blockTodo}>
				<div className={styles.todoListAndInput}>
					<form onSubmit={handleAddTodo} className={styles.form}>
						<input
							value={newTodo}
							onChange={e => setNewTodo(e.target.value)}
							className={styles.input}
						/>
						<button type='submit' className={styles.button}>
							Добавить
						</button>
					</form>
					<div className={styles.todoList}>
						{filteredTodos.map((todo: ITodo, index: number) => (
							<div
								className={`${styles.item} ${todo.check ? styles.active : ''}`}
								key={index}
							>
								<p onClick={() => toggleCheck(index)}>{todo.text}</p>
								<div className={styles.svgContainer}>
									<svg
										transform='translate(0, 2)'
										xmlns='http://www.w3.org/2000/svg'
										width='25'
										height='25'
										fill='none'
										viewBox='0 0 25 25'
										className={styles.svg}
										onClick={() => handleDeleteItem(index)}
									>
										<path
											fill='black'
											fillRule='evenodd'
											d='M9.846 12.499.553 3.205A1.878 1.878 0 0 1 3.208.55L12.5 9.843l9.291-9.29a1.878 1.878 0 0 1 2.655 2.655l-9.29 9.29 9.293 9.294a1.878 1.878 0 0 1-2.655 2.655L12.5 15.154 3.205 24.45A1.878 1.878 0 0 1 .55 21.795z'
											clipRule='evenodd'
										></path>
									</svg>
								</div>
							</div>
						))}
					</div>
				</div>
				<form
					className={styles.filterButtons}
					onClick={(event: React.MouseEvent<HTMLFormElement>) => {
						event.preventDefault();
						const value = (event.target as HTMLButtonElement).value;
						if (value) setAlingment(value);
					}}
				>
					<button value={'all'}>Все</button>
					<button value={'active'}>Активные</button>
					<button value={'completed'}>Завершённые</button>
				</form>
			</div>
		</div>
	);
}
