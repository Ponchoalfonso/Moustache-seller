import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Provided data
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor() {
    this.categories = [];
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategory(id: number): Observable<Category> {
    const category = this.categories.find(c => c.id === id);

    return of(category);
  }

  newCategory(): Observable<Category> {
    const category = new Category();

    return of(category);
  }

  saveCategory(category: Category): void {
    if (Category.last_index >= 1) {
      Category.last_index++;
    } else {
      Category.last_index = 1;
    }

    category.id = Category.last_index;
    category.timestamp = new Date();

    this.categories.push(category);
  }

  updateCategory(category: Category): void {
    const cf = this.categories.find(c => c.id === category.id);
    const ci = this.categories.indexOf(cf);

    this.categories[ci] = category;
  }

  deleteCategory(id: number): void {
    const category = this.categories.find(c => c.id === id);
    const index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }

}
