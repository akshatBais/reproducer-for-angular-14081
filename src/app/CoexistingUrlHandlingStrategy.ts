import {UrlHandlingStrategy, UrlTree} from "@angular/router";

/**
 * Coexists with the angular 1 ngRoute by only handling urls starting with ng2.
 */
export class CoexistingUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean {
    return url.toString().startsWith("/ng2");
  }

  extract(url: UrlTree): UrlTree {
    return url;
  }

  merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
    return newUrlPart;
  }
}

