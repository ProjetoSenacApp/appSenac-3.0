import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReplyPageRoutingModule } from './reply-routing.module';
import { ReplyPage } from './reply.page';

// 15.1) Importa dependências
import { MessageComponent } from '../../components/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';

// 17.1) Importa dependências
import { MsgMenuComponent } from '../../components/msg-menu/msg-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReplyPageRoutingModule,

    // 15.2) Injeta dependências
    ReactiveFormsModule,
  ],
  declarations: [
    ReplyPage,

    // 15.3) Declara componente importado
    MessageComponent,

    // 17.2) Declara dependências
    MsgMenuComponent,
  ]
})
export class ReplyPageModule { }
