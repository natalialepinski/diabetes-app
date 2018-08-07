import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlimentacaoPage } from './alimentacao';

@NgModule({
  declarations: [
    AlimentacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AlimentacaoPage),
  ],
})
export class AlimentacaoPageModule {}
