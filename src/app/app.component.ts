import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgLnik: string = 'https://www.proarch.com/hubfs/User%20Management.png';
  imgLogo:string='https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?pid=ImgDet&rs=1';
  successMsg:string='';
  userForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(10), Validators.pattern('^[0-9]+$')])
  })
  get f(){
    return this.userForm.controls;
  }

  userData(){
   console.log(this.userForm);
   console.log(this.userForm.value);
   
  
    this.successMsg=('Successfully Submmited');
    setTimeout(()=>{
      this.successMsg=''; 
    },2000)


   this.userForm.reset();
  
  }
  pageLink: any = [
    { path: '/', linkcontent: 'Home' },
    { path: '/about', linkcontent: 'About' },
    { path: '/users', linkcontent: 'Users' },
    {path:'/services',linkcontent:'Services'},
    { path: '/user-register', linkcontent: 'UserRegister' },
    {path:'database',linkcontent:'DataBase'},
    {path:'newuser',linkcontent:'New User Login'},
    {path:'newjsonuser',linkcontent:'New Users'}
    
    ];
   moreLink:any=[
    {path:'/products',linkcontent:'products'},
    {path:'/polices',linkcontent:'polices'}
   ]; 
   
  
}
