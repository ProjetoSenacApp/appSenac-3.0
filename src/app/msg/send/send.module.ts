import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SendPageRoutingModule } from './send-routing.module';
import { SendPage } from './send.page';

// 17.1) Importa dependências
import { MsgMenuComponent } from 'src/app/components/msg-menu/msg-menu.component';

// 17.3) Importa dependências
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendPageRoutingModule,

    // 17.4) Injeta dependências
    ReactiveFormsModule,
  ],
  declarations: [
    SendPage,

    // 17.2) Declara dependências
    MsgMenuComponent,
  ]
})
export class SendPageModule { }
