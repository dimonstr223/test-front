import axios from 'axios'

const instance = axios.create({
	// baseURL: 'https://nutty-beanie-fawn.cyclic.app',
	baseURL: process.env.REACT_APP_API,
})

export default instance
