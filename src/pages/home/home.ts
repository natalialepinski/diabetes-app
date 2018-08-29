import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) {
    this.menu = menu;
    this.menu.enable(true, 'menuLateral')
  }

}
