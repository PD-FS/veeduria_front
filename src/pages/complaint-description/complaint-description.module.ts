import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintDescriptionPage } from './complaint-description';

@NgModule({
  declarations: [
    ComplaintDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintDescriptionPage),
  ],
})
export class ComplaintDescriptionPageModule {}
