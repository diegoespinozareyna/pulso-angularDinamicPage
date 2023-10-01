import { Component, OnInit } from '@angular/core';
import { Product } from '../catalog/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../catalog/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageTitle = 'Product';
  errorMessage = '';
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const name: string = String(this.route.snapshot.paramMap.get('name'));
    this.getProductByName(name);
  }

  getProductByName(name: string): void {
    this.productService.getProductByName(name).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/catalog']);
  }
}