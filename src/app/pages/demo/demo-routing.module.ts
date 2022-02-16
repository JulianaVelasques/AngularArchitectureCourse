import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  // as the application uses the lazy loading, the 'demo' path is indicated in the parent routes
  //in this case, this is app-routing.
  //Here, in demo-routing it is enough to set an empty string as a path.
  {
    path: '',
    component: DemoComponent,
    //Register modules here
    children: [
      {
        path: 'styles',
        loadChildren: () =>
          import('./pages/styles/styles.module').then((m) => m.StylesModule),
      },
      {
        path: 'shared',
        loadChildren: () =>
          import('./pages/shared/shared.module').then((m) => m.SharedModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
