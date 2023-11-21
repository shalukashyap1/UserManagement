import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  
  constructor(private _userserviceService:UserserviceService, private route:Router){}
  subData(data:any){
    this._userserviceService.setjsonData(data).subscribe((val)=>{
      this.route.navigate(['/newjsonuser']);
     data.save(val);
     console.log(data)

    })
   
  
  }
 
}
