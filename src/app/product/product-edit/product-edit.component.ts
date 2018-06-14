import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import { sidebar } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  sidebar = sidebar;
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.sidebar.zone = 1;
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const types: string[] = ['Unidad', 'Granel'];
    const id = +this.route.snapshot.paramMap.get('id');
    let product;
    this.productService.getProduct(id).subscribe(p => product = p);

    const productCopy = new Product();
    productCopy.id = product.id;
    productCopy.name = product.name;
    productCopy.measureType = types.indexOf(product.measureType).toString();
    productCopy.timestamp = product.timestamp;

    this.product = productCopy;
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product);
    this.router.navigateByUrl('/products/' + this.product.id);
  }

  goBack(): void {
    this.location.back();
  }

  toggle(): void {
    this.sidebar.state = this.sidebar.state === 'active' ? 'inactive' : 'active';
  }

}
