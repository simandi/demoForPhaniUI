import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AppsPageComponent } from './components/apps-page/apps-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreHeaderComponent,
    SideMenuComponent,
    AppsPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
