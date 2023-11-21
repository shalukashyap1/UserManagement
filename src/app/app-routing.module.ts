import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductsComponent } from './components/products/products.component';
import { PolicesComponent } from './components/polices/polices.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/database/admin/admin.component';
import { UserComponent } from './components/database/user/user.component';
import { DatabaseComponent } from './components/database/database.component';
import { AdminDetailsComponent } from './components/database/admin-details/admin-details.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewjsonuserComponent } from './components/newjsonuser/newjsonuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'about',component:AboutComponent},

  // {path:'users',redirectTo:'login',pathMatch:'full'},

  {path:'users',component:UsersComponent},
  
 
  {path:'services',component:ServiceComponent},

  {path:'user-register',component:UserRegisterComponent},
  {path:'database',component:DatabaseComponent,
   
 children:[
   {path:'admin',component:AdminComponent},
   {path:'admin/:id',component:AdminDetailsComponent},
   {path:'user',component:UserComponent},
   {path:'user/:id',component:UserComponent},
 ]
},
  {path:'login',component:LoginComponent},
  
  {path:'newuser',component:NewUserComponent},
 
  {path:'products',component:ProductsComponent},

  {path:'polices',component:PolicesComponent},

 {path:'newjsonuser',component:NewjsonuserComponent},

 {path:'edituser/:id',component:EdituserComponent},

  {path:'**',component:ErrorpageComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
