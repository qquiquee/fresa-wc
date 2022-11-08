
export const fresa_lib = () => {
	customElements.define('fresa-modal', class extends HTMLElement {
		constructor() {
			super();
			const root = this.attachShadow({mode: 'open'});
			const div = document.createElement('div');
			div.innerHTML = `
			<style>

			* {
			  padding: 0;
			  margin: 0;
			}
			
			a {
			  color: inherit;
			  text-decoration: none;
			}
			
			button {
			  cursor: pointer;
			  background: transparent;
			  border: none;
			  outline: none;
			  font-size: inherit;
			}
			
			body {
			  display: flex;
			  align-items: center;
			  justify-content: center;
			  height: 100vh;
			  font: 16px/1.5 sans-serif;
			}
			
			.open-modal {
			  font-weight: bold;
			  background: steelblue;
			  color: #fff;
			  padding: 0.75rem 1.75rem;
			  margin-bottom: 1rem;
			  border-radius: 5px;
			}
			
			.modal {
			  position: fixed;
			  top: 0;
			  left: 0;
			  right: 0;
			  bottom: 0;
			  display: flex;
			  align-items: center;
			  justify-content: center;
			  padding: 1rem;
			  background: rgba(0, 0, 0, 0.8);
			  cursor: pointer;
			  visibility: hidden;
			  opacity: 0;
			  transition: all 0.35s ease-in;
			}
			
			.modal.is-visible {
			  visibility: visible;
			  opacity: 1;
			}
			
			.modal-dialog {
			  position: relative;
			  max-width: 800px;
			  max-height: 80vh;
			  border-radius: 5px;
			  background: #fff;
			  overflow: auto;
			  cursor: default;
			}
			
			.modal-dialog>* {
			  padding: 1rem;
			}
			
			.modal-header,
			.modal-footer {
			  background: #efefef;
			}
			
			.modal-header {
			  display: flex;
			  align-items: center;
			  justify-content: space-between;
			}
			
			.modal-header .close-modal {
			  font-size: 1.5rem;
			}
			
			.modal p+p {
			  margin-top: 1rem;
			}
			
			[data-animation] .modal-dialog {
			  opacity: 0;
			  transition: all 0.5s cubic-bezier(0.51, 0.92, 0.24, 1.15);
			}
			
			[data-animation].is-visible .modal-dialog {
			  opacity: 1;
			  transition-delay: 0.2s;
			}
			
			[data-animation="slideInOutLeft"] .modal-dialog {
			  transform: translateX(-100%);
			}
			
			[data-animation="slideInOutLeft"].is-visible .modal-dialog {
			  transform: none;
			}
			</style>

			<button type="button" class="open-modal" data-open="modal1">
			Lanza el modal con la animacion slide
			</button>
			
			
			<div class="modal" id="modal1" data-animation="slideInOutLeft">
			<div class="modal-dialog">
			  <header class="modal-header">
				Problema con la autenticación
				<button class="close-modal" aria-label="close modal" data-close>
				  ✕
				</button>
			  </header>
			  <section class="modal-content">
				<p><strong>Press ✕, ESC o clickea fuera del modal para cerrarlo</strong></p>
				<p>1.- Tanto el campo usuario como el campo contraseña deben estar rellenos</p>
				<p>2.- Deben ser correctos los datos de usuario y contraseña</p>
				<p>3.- Debes tener conexión estable a internet para usar la aplicación</p>
				<p>Si no se cumplen todas estas condiciones no vas a poder registarte para trabajar con la aplicación</p>
			  </section>
			  <footer class="modal-footer">
				Si el problema persiste, por favor contacta con soporte
			  </footer>
			</div>
			</div>
			`

			root.appendChild(div);

			const openEls = root.querySelectorAll("[data-open]");
			const closeEls = root.querySelectorAll("[data-close]");
			const isVisible = "is-visible";
			
			for (const el of openEls) {
			  el.addEventListener("click", function () {
				const modalId = this.dataset.open;
				root.getElementById(modalId).classList.add(isVisible);
			  });
			}
			
			for (const el of closeEls) {
			  el.addEventListener("click", function () {
				this.parentElement.parentElement.parentElement.classList.remove(isVisible);
			  });
			}
			
			root.addEventListener("click", e => {
			  if (e.target == root.querySelector(".modal.is-visible")) {
				root.querySelector(".modal.is-visible").classList.remove(isVisible);
			  }
			});
			
			root.addEventListener("keyup", e => {
			  // if we press the ESC
			  if (e.key == "Escape" && root.querySelector(".modal.is-visible")) {
				root.querySelector(".modal.is-visible").classList.remove(isVisible);
			  }
			});
		}
	});
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

	fresa_lib();