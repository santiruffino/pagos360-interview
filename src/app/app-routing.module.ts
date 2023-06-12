import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { SearchComponent } from './pages/search/search.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    title: 'Search',
    canActivate: [AuthGuard],
  },
  {
    path: 'results/:date',
    component: ResultsTableComponent,
    title: 'Results',
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
