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
    return of(this.categories.find(category => category.id === id));
  }

  newCategory(): Observable<Category> {
    const category = new Category();
    this.categories.push(category);

    return of(category);
  }

  deleteCategory(id: number): void {
    const category = this.categories.find(c => c.id === id);
    const index = this.categories.indexOf(category);
    this.categories.splice(index, 1);
  }

}
