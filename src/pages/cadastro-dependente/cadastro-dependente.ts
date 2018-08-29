import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroDependentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-dependente',
  templateUrl: 'cadastro-dependente.html',
})
export class CadastroDependentePage {

  registerCredentials = { name:'', dtnasc: '', telefone: '', tipoDiabete: '',peso:'',altura:'',sexo:'',equipamento:'',modelo:'',medicamento:'' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroDependentePage');
  }

}
