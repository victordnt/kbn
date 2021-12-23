import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonLinkComponent } from './button.component';
import { LogoComponent } from '../logo/logo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ButtonLinkComponent],
  exports: [ButtonComponent, ButtonLinkComponent],
})
export class ButtonModule {}
