import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveListComponent } from './componenents/pages/reactive-list/reactive-list.component';
import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [ReactiveListComponent],
  imports: [CommonModule, ReactiveformRoutingModule],
})
export class ReactiveFormModule {}
