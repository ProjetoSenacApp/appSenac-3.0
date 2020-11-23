import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewPageRoutingModule } from './view-routing.module';
import { ViewPage } from './view.page';

// 17)
import { MsgMenuComponent } from 'src/app/components/msg-menu/msg-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule
  ],
  declarations: [
    ViewPage,

    // 17)
    MsgMenuComponent,
  ]
})
export class ViewPageModule { }
