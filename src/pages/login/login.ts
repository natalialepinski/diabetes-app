import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController,	Loading } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login-provider';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	loading: Loading;
	registerCredentials = { email: '', password: '' };

	constructor( 
		private nav: NavController, 
		private auth: LoginProvider, 
		private alertCtrl: AlertController, 
		private loadingCtrl: LoadingController
	) {}

	public login() {
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
		);
	}

	showLoading() {
		this.loading = this.loadingCtrl.create({
			content: 'Aguarde...',
			dismissOnPageChange: true
		});
		this.loading.present();
	}

	showError(text) {
		this.loading.dismiss();

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
