import { Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ProductDesriptionComponent } from '../products/product-desription/product-desription.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
    {path:'product',component:ProductsComponent},
    {path:'description',component:ProductDesriptionComponent},
  { path: 'footer', component: FooterComponent },
];
