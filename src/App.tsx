import React from 'react'
import './App.scss'
import Basket from './components/Basket'
import Catalog from './components/Catalog'

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Catalog />
				<Basket />
			</div>
		</div>
	)
}

export default App
