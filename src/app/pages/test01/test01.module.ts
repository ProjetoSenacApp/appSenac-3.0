import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test01PageRoutingModule } from './test01-routing.module';

import { Test01Page } from './test01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test01PageRoutingModule
  ],
  declarations: [Test01Page]
})
export class Test01PageModule {}
