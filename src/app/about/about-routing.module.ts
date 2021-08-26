import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: "",
    component: AboutComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "one",
        loadChildren: () => import("./one/one.module").then((m) => m.OneModule),
      },
      {
        path: "two",
        loadChildren: () => import("./two/two.module").then((m) => m.TwoModule),
      },
      { path: "", redirectTo: 'home', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
