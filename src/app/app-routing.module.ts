import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { ProductscontainerComponent } from './product/productcontainer/productcontainer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ShoppingcardComponent } from './product/shoppingcard/shoppingcard.component';
import { ProuctdetailsComponent } from './product/productdetails/productdetails.component';
import { NotfoundComponent  } from './product/notfound/notfound.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: ProductscontainerComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shoppingcard', component: ShoppingcardComponent, canActivate:[authGuard] },
  { path: 'productdetails/:id', component: ProuctdetailsComponent, canActivate:[authGuard] },
  {path : '**',pathMatch: 'full' , component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
