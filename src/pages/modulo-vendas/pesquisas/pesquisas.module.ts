import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisasPage } from './pesquisas';

@NgModule({
  declarations: [
    PesquisasPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisasPage),
  ],
})
export class PesquisasPageModule {}
