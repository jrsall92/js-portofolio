import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProjectPageComponent} from './project-page/project-page.component';

export const routes: Routes = [
  {path: 'projects/:project-page', component: ProjectPageComponent},
  {path: '**', component: HomeComponent},
];
