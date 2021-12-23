import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoModule } from 'src/app/components/logo/logo.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule, ButtonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
