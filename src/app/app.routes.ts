import { Routes } from '@angular/router';
import { AddCategoryComponent } from './Features/Category/add-category/add-category.component';
import { CategoryListComponent } from './Features/Category/category-list/category-list.component';

export const routes: Routes = [
    {
        path: 'admin/categories', component: CategoryListComponent
    },
    {
        path:'admin/categories/add', component: AddCategoryComponent
    }
];
