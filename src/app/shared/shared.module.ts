import { NgModule, Input, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AbstractControl, ValidatorFn, NG_VALIDATORS, Validator } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})

export class SharedModule {}
