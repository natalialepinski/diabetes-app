import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  //criando objeto de noticias//
  public noticias : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
     this.carregarNoticias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  carregarNoticias(){
    let data:Observable<any>;
    data =  this.http.get('https://my-json-server.typicode.com/Rodrigopaz97/Feeds/noticias');
    data.subscribe(result => {
      this.noticias = result;
    })



  }

}
