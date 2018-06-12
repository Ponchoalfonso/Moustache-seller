import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  sidebar = sidebar;
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.router.navigateByUrl('/products');
  }

  toggle(): void {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
