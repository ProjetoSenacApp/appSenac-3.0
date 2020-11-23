import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxPageRoutingModule } from './inbox-routing.module';

import { InboxPage } from './inbox.page';

// 17.1) Importa dependências
import { MsgMenuComponent } from '../../components/msg-menu/msg-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxPageRoutingModule
  ],
  declarations: [
    InboxPage,

    // 17.2) Declara dependências
    MsgMenuComponent,
  ]
})
export class InboxPageModule {}
