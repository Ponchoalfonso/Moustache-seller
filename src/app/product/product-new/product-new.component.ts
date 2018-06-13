import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../classes/product';
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  sidebar = sidebar;
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newProduct();
  }

  newProduct(): void {
    this.productService.newProduct().subscribe(product => this.product = product);
  }

  saveProduct(): void {
    this.productService.saveProduct(this.product);
    this.router.navigateByUrl('/products/' + this.product.id);
  }

  toggle(): void {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
