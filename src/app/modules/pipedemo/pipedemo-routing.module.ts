import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelistComponent } from './pages/pipelist/pipelist.component';

const routes: Routes = [
  {
    path: '',
    component: PipelistComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipedemoRoutingModule {}
