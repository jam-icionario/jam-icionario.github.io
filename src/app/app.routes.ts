import { Routes } from '@angular/router';
import { ListComponent } from './components/scores/list/list.component';
import { DetailsComponent } from './components/scores/details/details.component';
import { ListCategoriesComponent } from '@components/categories/list-categories/list-categories.component';
import { CategoryDetailsComponent } from '@components/categories/category-details/category-details.component';

export const routes: Routes = [
    { path: '', title: 'Categories', component: ListCategoriesComponent },
    { path: 'scores', title: 'All scores', component: ListComponent },
    { path: 'scores/:number', title: 'Score details', component: DetailsComponent },
    { path: 'categories', title: 'Categories', component: ListCategoriesComponent },
    { path: 'categories/:name', title: 'Scores for a category', component: CategoryDetailsComponent },
    // Redirect any broken paths back to the main page.
    { path: '**', redirectTo: '' },
];
