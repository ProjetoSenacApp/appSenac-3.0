import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test02Page } from './test02.page';

const routes: Routes = [
  {
    path: '',
    component: Test02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test02PageRoutingModule {}
