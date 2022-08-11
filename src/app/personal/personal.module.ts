import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: PersonalComponent }]),
    ReactiveFormsModule,
  ],
  exports: [PersonalComponent],
  declarations: [PersonalComponent],
})
export class PersonalModule {}
