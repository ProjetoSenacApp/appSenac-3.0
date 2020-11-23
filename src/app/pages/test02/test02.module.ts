import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test02PageRoutingModule } from './test02-routing.module';

import { Test02Page } from './test02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test02PageRoutingModule
  ],
  declarations: [Test02Page]
})
export class Test02PageModule {}
