import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'catalog', component: CatalogComponent, title: 'Catalog',
  },
  {
    path: 'catalog/:name', component: ProductComponent, title: 'Product',
  },
  { path: 'blog', component: BlogComponent, title: 'Blog' },
  { path: 'testimonials', component: TestimonialsComponent, title: 'Testimonials' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: '**', pathMatch: 'full', component: NotFoundComponent, title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
