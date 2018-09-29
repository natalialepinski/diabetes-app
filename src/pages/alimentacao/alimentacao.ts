import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
/**
 * Generated class for the AlimentacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-alimentacao',
  templateUrl: 'alimentacao.html',
})
export class AlimentacaoPage {

<<<<<<< HEAD

=======
>>>>>>> 8445a66
  //criando objeto de alimentos//

  public items : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
      //this.initializeItems();
      this.carregaAlimentos();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentacaoPage');

  }




 // subustituir pelo json ////

//codigo para consumir json//


carregaAlimentos(){
  let data:Observable<any>;
  //data =  this.http.get('https://my-json-server.typicode.com/Rodrigopaz97/Feeds/alimentos');
  data =  this.http.get('https://serverbete.herokuapp.com/rest/alimento');
  data.subscribe(result => {
    this.items = result;
  })
}
abrirTela(){

}


  getItems(ev) {
    // Reset items back to all of the items
    this.carregaAlimentos();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
