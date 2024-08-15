import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveListComponent } from './componenents/pages/reactive-list/reactive-list.component';
import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveListComponent],
  imports: [CommonModule, ReactiveformRoutingModule, ReactiveFormsModule],
})
export class ReactiveFormModule {}
