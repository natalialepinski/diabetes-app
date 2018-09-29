import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroDependentePage } from '../../pages/cadastro-dependente/cadastro-dependente';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  userName: string;
  userEmail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.nativeStorage.getItem('usrLogado')
    .then(data => {
      console.log(data);
       this.userName = data.usrNome;
       this.userEmail = data.usrEmail;
    },
    error => console.error(error)
  );
  }

  abrirTela(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a cadastroContaPage
    this.navCtrl.push(CadastroDependentePage);
  }

}
