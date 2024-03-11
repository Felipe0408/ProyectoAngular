import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { SideBarSideAComponent } from './side-bar-side-a/side-bar-side-a.component';
import { SideBarSideBComponent } from './side-bar-side-b/side-bar-side-b.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CuentaComponent,
    SideBarSideAComponent,
    SideBarSideBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
