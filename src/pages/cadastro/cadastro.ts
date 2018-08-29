import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login-provider';
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  createSuccess = false;
  registerCredentials = { name:'', sobrenome: '', email: '', password: '' };
  
  constructor(
    public nav: NavController, 
    public navParams: NavParams,
		private auth: LoginProvider,
		private alertCtrl: AlertController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  
	public register() {
		this.auth.register(this.registerCredentials).subscribe(
			success => {
				if (success) {
					this.createSuccess = true;
					this.showPopup('Sucesso', 'Cadastro realizado');
				} else {
					this.showPopup('Erro', 'Ocorreu um erro, por favor, tente novamente');
				}
			},
			error => {
				this.showPopup('Erro', error);
			}
		);
	}
	showPopup(title, text) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: text,
			buttons: [
				{
					text: 'OK',
					handler: data => {
						if (this.createSuccess) {
							this.nav.setRoot(HomePage);
						}
					}
				}
			]
		});
		alert.present();
	}

	backLoginPage(){
		this.nav.push(LoginPage);
	}
}
