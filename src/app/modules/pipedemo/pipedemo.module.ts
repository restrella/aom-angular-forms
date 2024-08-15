import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelistComponent } from './pages/pipelist/pipelist.component';
import { PipedemoRoutingModule } from './pipedemo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PipelistComponent],
  imports: [PipedemoRoutingModule, CommonModule, SharedModule],
})
export class PipedemoModule {}
