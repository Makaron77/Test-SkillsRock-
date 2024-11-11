//! 1. Функция debounce

function debounce(func, delay) {
	let timer;
	return function () {
		clearTimeout(timer); // Сбросит таймер с каждым вызовом
		timer = setTimeout(func, delay); // новый таймер
	};
}

const debouncedFunction = debounce(() => {
	console.log('Вызвана функция с задержкой');
}, 2000);

debouncedFunction();
debouncedFunction(); // Этот вызов сбросит таймер, и функция выполнится только после полной задержки
//* Пример использования:
//  Функция debounce заставляет поиск выполняться только после того, как пользователь перестанет печатать (например, через 500 мс).
// const search = debounce(query => {
// 	fetchData(query); // Выполняет запрос на сервер
// }, 500);

// Использование в обработчике события ввода
// searchInput.addEventListener('input', e => {
// 	search(e.target.value);
// });

//! 2. Глубокое клонирование объекта
//* Может пригодиться для создания копий, чтобы не затрагивать оригинальный объект
function deepClone(obj) {
	return structuredClone(obj);
}

// Пример:
const original = {
	name: 'John',
	address: {
		city: 'New York',
		country: 'USA',
	},
};
const copy = deepClone(original);
copy.address.city = 'Los Angeles';
console.log(original.address.city); // New York (оригинальный объект
// не должен измениться)
console.log(copy.address.city); // Los Angeles
