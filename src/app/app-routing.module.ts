import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';
import { PageComponent } from './component/page/page.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
