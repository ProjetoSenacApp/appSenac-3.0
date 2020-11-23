import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test01Page } from './test01.page';

const routes: Routes = [
  {
    path: '',
    component: Test01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test01PageRoutingModule {}
