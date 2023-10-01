import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  products: Product[] = [];
  errorMessage = '';
  
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
