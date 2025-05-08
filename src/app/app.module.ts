import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycalcComponent } from './mycalc/mycalc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MycalcNewComponent } from './mycalc-new/mycalc-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MycalcComponent,
    MycalcNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
