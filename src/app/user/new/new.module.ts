import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPageRoutingModule } from './new-routing.module';

import { NewPage } from './new.page';

// 5.1) Importa dependências
import { ProfileComponent } from '../../components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPageRoutingModule,

    // 5.2) Injeta dependências
    ReactiveFormsModule,
  ],
  declarations: [
    NewPage,

    // 5.3) Declara componente importado
    ProfileComponent,
  ]
})
export class NewPageModule {}
