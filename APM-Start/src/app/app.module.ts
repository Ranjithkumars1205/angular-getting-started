import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [ // below declaration are belong to this module.
    AppComponent, // our appmodule declares our root application component here, a component must belonging to one and only angular module
    // there are two ways to expose a directive in an angular module. 
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [ // imports array is for pulling in external modules
    BrowserModule, // to pull the features (like *ngIf and *ngFor)it needs to run this application in a browser
    FormsModule, // for ngmodel form directive
    HttpClientModule, // The Http service provider registration is done for us in the HttpClientModule.
  ],
  /* Note that the providedIn feature is new in angular version 6 */
  // providers: [ProductService], 
  /* this is older code, you'd see this service registered in a module like this.
   /* however, above syntax is still valid .. The recommended practice is to use the new "ProvidedIN" feature in the service instead. 
   this provides better tree shaking. Tree shaking is a process whereby the angular compiler shakes out unused code for
   smaller deployed bundles. */
  bootstrap: [AppComponent]
})
export class AppModule { }
