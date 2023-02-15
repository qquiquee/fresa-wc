// import { fresaLogin, fresaModal, fresaProgress } from './index.js';

// fresaLogin()
// fresaModal()
// fresaProgress()

const pru = document.querySelector('#qqq')



pru.addEventListener('click', () => {
	console.log('hola')
	pru.percent= pru.percent + 10
	
	pru.colorfuera = '#444444'
	console.log('colorfuera : ',pru.colorfuera) 
	
})	