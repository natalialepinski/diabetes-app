import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login-provider';
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  createSuccess = false;
  registerCredentials = { nome:'', email: '', senha: '' };

  constructor(
    public http: HttpClient,

    public nav: NavController,
    public navParams: NavParams,
		private auth: LoginProvider,
		private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');

  }

	public register() {

      this.http.post("https://serverbete.herokuapp.com/rest/responsavel", this.registerCredentials)
      .subscribe(data => {
        console.log('foi');
        this.createSuccess = true;
        this.showPopup('Sucesso', 'Cadastro realizado');
       }, error => {
        console.log(error);
        this.showPopup('Erro', error);
      });
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
