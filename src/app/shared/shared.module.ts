import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ExponentialPipe, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ExponentialPipe, HeaderComponent],
})
export class SharedModule {}
