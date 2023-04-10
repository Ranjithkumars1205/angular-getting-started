import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    // providers: [ProductService] // this service is then available to the component and it's child components.
})

export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageHeight = 50;
    showImage = true;
    private _listFilter = '';
    filteredProduct: IProduct[] = [];
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter', this._listFilter);
        this.filteredProduct = this.performFilter(value);
    }
    products: IProduct[] = [];
    productSub!: Subscription;
    errorMessage = '';

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        /* to perform any component initialization */
        this.productSub = this.productService.getProduct().subscribe(
            products => { 
                this.products = products;
                // this.listFilter = 'cart';
                this.filteredProduct = this.products;
            },
            error => this.errorMessage = error
        );
        
    }
    
    // ngDoCheck() {
    //     console.log('123', this.listFilter);
    // }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(product => product.productName.toLocaleLowerCase().includes(filterBy));
    }

    showImageHandler() {
        this.showImage = !this.showImage;
    }

    OnRatingClicked(message: string): void {
        this.pageTitle = `Product List: ${message}`;
    }

    ngOnDestroy(): void {
        this.productSub.unsubscribe();
    }
}