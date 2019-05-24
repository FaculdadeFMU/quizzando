import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPerguntasPage } from './user-perguntas';

@NgModule({
  declarations: [
    UserPerguntasPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPerguntasPage),
  ],
})
export class UserPerguntasPageModule {}
