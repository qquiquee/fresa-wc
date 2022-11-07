
export const fresa_lib = () => {
	customElements.define('fresa-login', class extends HTMLElement {
		constructor() {
			super();
			const root = this.attachShadow({mode: 'open'});
			const div = document.createElement('div');
			div.innerHTML = `
			<div id="fresa-login" class="web-component">
		<style>
	/* Pantalla completa */
			#fresa-login {
				font: 1.2em Comic Sans MS, sans-serif, Arial;
				margin: 0px;
				padding: 0px;
				color: #333333;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}
	
			.container {
				max-width: 300px;
				padding: 30px;
				border-radius: 10px;
				border: 1px solid grey;
				background-color: rgba(100, 148, 237, 0.3);
			}
			
			.titulo {
				display: block;
				text-align: center;
				font-size: 1.5em;
				font-weight: bold;
				color: #010048;
				margin-bottom: 5px;
				padding-bottom: 10px;
			}
	
			.lbl {
				display: block;
				margin-bottom: 5px;
				width: 40vh;
			}
	
			#username, #password {
				background-color: #1f68e525;
				border: 1px solid grey;
				border-radius: 4px;
				box-sizing: border-box;
				padding: 10px 10px;
				width: 100%;
				margin-bottom: 10px;
			}
	
			#btnLogin {
				color: #010048;
				text-align: center;
				background: cornflowerblue;
				border: 1px solid #1f66e5;
				border-radius: 4px;
				padding: 10px 10px;
				margin-top: 50px;
				box-sizing: border-box;
				width: 100%;
				cursor: pointer;
				font-weight: bold;
			}
			#btnLogin:hover {
				background: #1f68e592;
				color: white;
				box-shadow: 5px 5px 10px;
			}
	
		</style>
	
		<div class="container">
			<div class="titulo">🔒 Acceso 🔓</div>
					<div class="lbl">Usuario</div>
					<div id="username" contenteditable="true"></div>
					<div class="lbl">Contraseña</div>
					<div id="password" contenteditable="true"></div>
					<div id ="btnLogin">Login</div>
		</div>
	</div>
			`
			// función para realizar el login
			 async function login(user, pass) {
				console.log('login')
				// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpdiI6Ijk4NTIyOTYzNjNkY2Q5YzJiOTkxNGRhOGFmZDcxYTU1IiwiY29udGVudCI6IjE2ZjdkZDdlMmY0ZDQ1OTFlYiJ9LCJpYXQiOjE2Njc0MDcxNjgsImV4cCI6MTY2NzQ5MzU2OH0.WkzgRUImW1xGgmh1vFWJz1K6EgjncoiLWte7K790gKU'
				const api = 'https://factu.neuralchess.es/'
				const controller = new AbortController();
				setTimeout(() => controller.abort(), 6000);
				const signal = controller.signal;
				let options = {
					method: 'POST',
					signal: signal,
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(
						{
							"user_name": user,
							"password": pass
						}
					)
				}
				const peticion = new Request(`${api}login`, options)
				fetch(peticion)
					.then(response => { return response.json(); })
					.then(data => {
						if (data.error) { alert('Las credenciales no son correctas: ', data.error) }
						else { localStorage.setItem('tokenM', data.tokenM); }
					})
					.catch(error => { errorFetch(error) });
			}
			root.appendChild(div);
			const comprobar = root.getElementById('btnLogin');
			const usuario = root.getElementById('username');
			const password = root.getElementById('password');
	
			comprobar.addEventListener('click', function(e){
			login(usuario.textContent, password.textContent);
		});
		}
	});
	}