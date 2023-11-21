import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';


@Component({
  selector: 'app-newjsonuser',
  templateUrl: './newjsonuser.component.html',
  styleUrls: ['./newjsonuser.component.css']
})
export class NewjsonuserComponent {
  users:any;
  datawithId:any;
constructor(private _userserviceService:UserserviceService , private route:Router){
  _userserviceService.getjsonData().subscribe((val)=>{
     this.users=val;
    //  console.log(this.users);
  })
}
addData(){
this.route.navigate(['/newuser']);
}
edit(id:any)
{
  this.route.navigate(['/edituser/'+id])
}
fresh(id:any){
  
    this._userserviceService.deleteDataById(id).subscribe(val=>{
      this.route.navigate(['/newjsonuser/'])
      alert('Data Deleted')
    })
  }
}
 


