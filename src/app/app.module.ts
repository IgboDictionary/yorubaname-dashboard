import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import 'hammerjs';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent, SimpleLayoutComponent } from './layouts';
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from './dashboard.component';
import { NameService } from './services/name.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    SimpleLayoutComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouting
  ],
  providers: [
    AuthService,
    AuthGuardService,
    NameService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
