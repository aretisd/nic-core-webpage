import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { APIService } from './service/api.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatFormFieldModule, MatButtonModule, MatExpansionModule} from '@angular/material';
import { RedirectComponent } from './redirect/redirect.component';
import { ExternalUrlDirective } from './external-url.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RedirectComponent,
    ExternalUrlDirective
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
