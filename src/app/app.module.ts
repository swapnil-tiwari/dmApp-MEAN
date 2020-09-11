import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProjectWindowComponent } from './project-window/project-window.component';
import { ClockPanelComponent } from './clock-panel/clock-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ProjectWindowComponent,
    ClockPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
