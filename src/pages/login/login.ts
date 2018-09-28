import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController,	Loading, MenuController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login-provider';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {

	public usuarios : any;
	loading: Loading;
	registerCredentials = { email: '', password: '' };

	constructor(
		public http: HttpClient,
		private nav: NavController,
		private auth: LoginProvider,
		private alertCtrl: AlertController,
		private loadingCtrl: LoadingController,
		private menu: MenuController,
	) {
		this.menu = menu;
		this.menu.enable(false, 'menuLateral')
		this.buscaUsuarios();
	}

	public buscaUsuarios(){
		let data:Observable<any>;
	  //data =  this.http.get('https://my-json-server.typicode.com/Rodrigopaz97/Feeds/alimentos');
	  data =  this.http.get("https://serverbete.herokuapp.com/rest/responsavel")
	  data.subscribe(result => {
	    this.usuarios = result;
	  })
	}

	public login() {

		var login = false;

		for(let usr of this.usuarios) {

			if(usr.email == this.registerCredentials.email && usr.senha == this.registerCredentials.password) {
				login = true;
				
			}
		}
		if(login){
				this.nav.setRoot(HomePage);
			}else{
				this.showError('E-mail ou senha inválida.');
			}

		}


		/*
		let data : Observable<any>;
	  data =  this.http.get('https://serverbete.herokuapp.com/rest/responsavel');
	  data.subscribe(result => {
	    this.items = result;
	  })



		for(let item of this.items) {
		  if(item.email == this.registerCredentials.email && item.senha == this.registerCredentials.senha){
				this.nav.setRoot(HomePage);
			}else{
				this.showError('E-mail ou senha inválida.');
			}
		}
		this.showLoading();
		this.auth.login(this.registerCredentials).subscribe(
			allowed => {
				if (allowed) {
					this.nav.setRoot(HomePage);
				} else {
					this.showError('E-mail ou senha inválida.');
				}
			},
			error => {
				this.showError(error);
			}
		);*/


	showLoading() {
		this.loading = this.loadingCtrl.create({
			content: 'Aguarde...',
			dismissOnPageChange: true
		});
		this.loading.present();
	}

	showError(text) {

		let alert = this.alertCtrl.create({
			title: 'Erro',
			subTitle: text,
			buttons: ['OK']
		});
		alert.present();
		console.log(alert);
	}

	openCadastroPage(){
		this.nav.push(CadastroPage);
	}
}
