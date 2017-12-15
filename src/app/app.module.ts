import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes, UrlHandlingStrategy} from "@angular/router";
import {EmptyComponent} from "./empty.component";
import {ModernComponent} from "./modern.component";
import {UpgradeModule} from "@angular/upgrade/static";
import {RouterUpgradeInitializer} from "@angular/router/upgrade";
import {CoexistingUrlHandlingStrategy} from "./CoexistingUrlHandlingStrategy";
import {NgViewComponent} from "./ng-view.component";

const routes: Routes = [
  {path: "ng2/modern", component: ModernComponent},
  {path: "**", component: EmptyComponent}  // for routes managed by ngRoute
];

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    ModernComponent,
    NgViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UpgradeModule,
  ],
  providers: [
    RouterUpgradeInitializer,
    {provide: UrlHandlingStrategy, useClass: CoexistingUrlHandlingStrategy},
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  // suppress automatic bootstrapping
  ngDoBootstrap() { }
}
