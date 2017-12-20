import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IfElseThenComponent } from './if-else-then/if-else-then.component';

import { AnimateComponent } from './animate/animate.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AotComponent } from './aot/aot.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { CsvDynamicTableComponent } from './csv-dynamic-table/csv-dynamic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    IfElseThenComponent,
    AnimateComponent,
    DashboardComponent,
    HomeComponent,
    AotComponent,
    DynamicComponentComponent,
    ErrorPageComponent,
    HttpApiComponent,
    CsvDynamicTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
