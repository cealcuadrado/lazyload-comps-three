import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'foo', loadChildren: () => import('./foo/foo.module').then(m => m.FooModule) }, { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
