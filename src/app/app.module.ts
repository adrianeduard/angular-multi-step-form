import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PersonalModule } from './personal/personal.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CoreModule,
    SharedModule,
    PersonalModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
