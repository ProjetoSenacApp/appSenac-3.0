import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReplyPage } from './reply.page';

const routes: Routes = [
  {
    path: '',
    component: ReplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyPageRoutingModule {}
