import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OutboxPageRoutingModule } from './outbox-routing.module';
import { OutboxPage } from './outbox.page';

// 17.1) Importa dependências
import { MsgMenuComponent } from '../../components/msg-menu/msg-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutboxPageRoutingModule
  ],
  declarations: [
    OutboxPage,

    // 17.2) Declara dependências
    MsgMenuComponent,
  ]
})
export class OutboxPageModule { }
