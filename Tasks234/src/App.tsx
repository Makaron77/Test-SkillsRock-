
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Task2Page from './pages/Task2Page/Task2Page'
import Task3Page from './pages/Task3Page/Task3Page';

function App() {

  return (
		<Routes>
			<Route path='/' element={<MainPage />}></Route>
			<Route path='task2(DOM)' element={<Task2Page />}></Route>
			<Route path='task3(FetchAPI)' element={<Task3Page />}></Route>
		</Routes>
	);
}

export default App
