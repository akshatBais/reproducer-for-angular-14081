import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AppComponent} from "./app/app.component";
import {downgradeComponent, setAngularLib, UpgradeModule} from "@angular/upgrade/static";

import "./old-app/old.app";

const angular = require("angular");

if (environment.production) {
  enableProdMode();
}

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(platformRef => {
    angular.module("old").directive('appRoot', downgradeComponent({component: AppComponent}));
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['old'], {strictDi: true});
  }).catch(err => console.log(err));
