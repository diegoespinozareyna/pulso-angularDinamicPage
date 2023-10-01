import { NgModule } from '@angular/core';
import { BrowserModule, Meta, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BlogComponent } from './blog/blog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './shared/hero/hero.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { ContentComponent } from './shared/content/content.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { Replace } from './shared/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    TestimonialsComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeatureComponent,
    ContentComponent,
    CatalogComponent,
    NotFoundComponent,
    ProductComponent,
    Replace
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
