import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pipedemo',
  },
  {
    path: 'pipedemo',
    loadChildren: () =>
      import('./modules/pipedemo/pipedemo.module').then(
        (m) => m.PipedemoModule
      ),
  },
  {
    path: 'pipedemo',
    loadChildren: () =>
      import('./modules/pipedemo/pipedemo.module').then(
        (m) => m.PipedemoModule
      ),
  },
  {
    path: 'templateform',
    loadChildren: () =>
      import('./modules/template-form/template-form.module').then(
        (m) => m.TemplateFormModule
      ),
  },
  {
    path: 'reactiveform',
    loadChildren: () =>
      import('./modules/reactive-form/reactive-form.module').then(
        (m) => m.ReactiveFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
