import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@app/state';
import {Category} from '@app/category/category';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {CategoryQuery} from '@app/category/state/category.reducers';
import {LoadCategoriesAction} from '@app/category/state/category.actions';

@Component({
  selector: 'djudo-category-list',
  templateUrl: 'category-list.component.html',
  styleUrls: ['category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(private store$: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.store$.dispatch(new LoadCategoriesAction());
    this.categories$ = this.store$.select(CategoryQuery.getCategories);
  }

  getCategory(id: number) {
    this.router.navigate(['categories', id]);
  }
}
