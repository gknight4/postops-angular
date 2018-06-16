import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatAutocompleteModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry, MatIconModule } from '@angular/material'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import {MatMenuModule} from '@angular/material/menu';
import { MethodSelectComponent } from './method-select/method-select.component';
import { UrlInputComponent } from './url-input/url-input.component';
import { HeadersArrayComponent } from './headers-array/headers-array.component';
import { BodyTypeSelectComponent } from './body-type-select/body-type-select.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { JsonArrayComponent } from './json-array/json-array.component';
import { ResponseStatusComponent } from './response-status/response-status.component';
import { ResponseHeadersComponent } from './response-headers/response-headers.component';
import { ResponseBodyComponent } from './response-body/response-body.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DemoComponent,
    MethodSelectComponent,
    UrlInputComponent,
    HeadersArrayComponent,
    BodyTypeSelectComponent,
    FormArrayComponent,
    JsonArrayComponent,
    ResponseStatusComponent,
    ResponseHeadersComponent,
    ResponseBodyComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    DemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
