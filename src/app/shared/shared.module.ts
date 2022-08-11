import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@NgModule({
  imports: [CommonModule],
  exports: [WizardStepComponent],
  declarations: [WizardStepComponent],
})
export class SharedModule {}
