import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

/**
 * Generated class for the ReceitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html',
})
export class ReceitasPage {

  //criando objeto de receitas//
  public receitas : any; 

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.carregaReceitas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitasPage');
  }

  carregaReceitas(){
    let data:Observable<any>;
    data =  this.http.get('https://my-json-server.typicode.com/Rodrigopaz97/Feeds/receitas');
    data.subscribe(result => {
      this.receitas = result;
    })
  }

}
