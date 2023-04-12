import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    // StarComponent // added in sharedModule
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      /* The :id in the second route represents a route parameter. The product Detail page displays the detail for 
      one product, so it needs to know which product to display. The ProductDetailComponent reads the ID from this
      path segment and displays the defined product. we can define any number of parameters here separated with
      slashes. */
      {
        path: 'product/:id', component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      },
    ]),
    SharedModule, // importing a module does NOT provide access to its imported modules like formsModule, comment out sharedModule exports array formModule,

  ]
})
export class ProductModule { }
