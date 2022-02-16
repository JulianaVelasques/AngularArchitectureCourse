import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // all the elements in the children section will be displayed inside the router-outlet.
    children: [
      {
        path: 'demo',
        // lazy loading of the demo module
        loadChildren: () =>
          import('./pages/demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
