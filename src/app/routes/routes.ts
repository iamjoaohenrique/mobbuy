import { Routes } from '@angular/router';
import { ContainerComponent } from '../@core/components/container/container.component';
import { ListcompaniesComponent } from '../@core/components/container/listcompanies/listcompanies.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'lista',
        component: ListcompaniesComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];