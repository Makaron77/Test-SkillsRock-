
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Task2Page from './pages/Task2Page/Task2Page'

function App() {

  return (
		<Routes>
			<Route path='/' element={<MainPage />}></Route>
			<Route path='task2(DOM)' element={<Task2Page />}></Route>
		</Routes>
	);
}

export default App
