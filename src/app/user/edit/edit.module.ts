import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './edit-routing.module';

import { EditPage } from './edit.page';

// 9.1) Importa dependências
import { ProfileComponent } from '../../components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,

    // 9.2) Injeta dependências
    ReactiveFormsModule,
  ],
  declarations: [
    EditPage,

    // 9.3) Declara componente importado
    ProfileComponent,
  ]
})
export class EditPageModule { }
