import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductsComponent } from './components/products/products.component';
import { PolicesComponent } from './components/polices/polices.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DatabaseComponent } from './components/database/database.component';
import { AdminDetailsComponent } from './components/database/admin-details/admin-details.component';
import { UserComponent } from './components/database/user/user.component';
import { AdminComponent } from './components/database/admin/admin.component';
import { UserserviceService } from './userservice.service';
import { NewUserComponent } from './components/new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';
import { NewjsonuserComponent } from './components/newjsonuser/newjsonuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';







@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
   UsersComponent,
    ServiceComponent,
    ProductsComponent,
    PolicesComponent,
    ErrorpageComponent,
    HomeComponent,
    UserRegisterComponent,
    LoginComponent,
    DatabaseComponent,
    AdminComponent,
    AdminDetailsComponent,
    UserComponent,
    NewUserComponent,
    NewjsonuserComponent,
    EdituserComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
