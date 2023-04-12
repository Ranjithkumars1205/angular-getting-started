import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { Route, RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

const route: Route[] = [
  /* Important Note: there are no leading slashed in our path segments(path: 'products'), and the 
  order of the routes in this arry matters.
  The route uses a first-match-wins strategy (ascending order) when matching the routes.
  this means that more specific route should always be before less specific routs, such as the
  wild card route. */
  // { path: 'products', component: ProductListComponent },
  // /* The :id in the second route represents a route parameter. The product Detail page displays the detail for 
  // one product, so it needs to know which product to display. The ProductDetailComponent reads the ID from this
  // path segment and displays the defined product. we can define any number of parameters here separated with
  // slashes. */
  // { path: 'product/:id', component: ProductDetailComponent,
  // canActivate: [ProductDetailGuard] },
  { path: 'welcome',  component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // this is default route
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]

@NgModule({
  declarations: [ // below declaration are belong to this module.
    AppComponent, // our appmodule declares our root application component here, a component must belonging to one and only angular module
    // there are two ways to expose a directive in an angular module. 
    // ProductListComponent,
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    /* The ProductListComponent uses ngIf, ngFor so do we pull in the system BrowserModule?
    Nope. The browerModule should only be imported into the root applicatio module, AppModule.
    Instead, we import the system CommonModule. The CommonModule exposes the ngFor and ngIf directives. Not surprisingly
    the browserModule itself actually imports and exports the commonModule, which is why we have access to ngFor and ngIf when we import 
    BrowserModule in our AppModule.  */
     // imports array is for pulling in external modules
    BrowserModule, // to pull the features (like *ngIf and *ngFor)it needs to run this application in a browser
    // FormsModule, // for ngmodel form directive // added in ProductModule
    HttpClientModule, // The Http service provider registration is done for us in the HttpClientModule.
    RouterModule.forRoot(route),
    ProductModule
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
