import { Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router :Router){ }

  showDetails(d:any){
  this.router.navigate(['/database/admin',d.id]);
  console.log('ID is=',d.id)
  }
  
  adminData=[
    {
    id:101,
    name:'shalu',
    dep:'IT Recurter',
    resp:'Hiring'
    },
    {
      id:102,
      name:'shuruti',
      dep:'IT Recurter',
      resp:'Hiring'
      },
      {
        id:103,
        name:'aswarya',
        dep:'IT Recurter',
        resp:'Hiring'
        },
        {
          id:104,
          name:'kajal',
          dep:'IT Recurter',
          resp:'Hiring'
          },
          {
            id:105,
            name:'parul',
            dep:'IT Recurter',
            resp:'Hiring'
            },
];
}