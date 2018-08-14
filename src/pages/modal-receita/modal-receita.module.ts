import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalReceitaPage } from './modal-receita';

@NgModule({
  declarations: [
    ModalReceitaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalReceitaPage),
  ],
})
export class ModalReceitaPageModule {}
