import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  imports: [CommonModule],
  exports: [PersonalComponent],
  declarations: [PersonalComponent],
})
export class PersonalModule {}
