import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login-provider';
import { HelperProvider } from '../../providers/helper/helper';
import { HomePage } from '../../pages/home/home';
@Component({
	selector: 'register-cp',
	templateUrl: 'register.html',
	providers: [HelperProvider]
})
export class RegisterComponent {
	createSuccess = false;
	registerCredentials = { name:'', email: '', password: '' };

	constructor(
		private nav: NavController,
		private auth: LoginProvider,
		private alertCtrl: AlertController,
		private helper: HelperProvider
	) {}

	public register() {
		this.auth.register(this.registerCredentials).subscribe(
			success => {
				if (success) {
					this.createSuccess = true;
					this.showPopup('Success', 'Account created.');
				} else {
					this.showPopup('Error', 'Problem creating account.');
				}
			},
			error => {
				this.showPopup('Error', error);
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
}
