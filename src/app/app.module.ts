import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { BsTabGroupComponent } from './components/bs-tab-group/bs-tab-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    TabPanelComponent,
    BsTabGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
