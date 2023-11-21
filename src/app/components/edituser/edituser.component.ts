import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  userId:any
  data:any;
  newData:any
  constructor(private _userserviceService : UserserviceService , private route: ActivatedRoute, private router: Router)
  {
   
    //to fetch the current id 
    this.route.paramMap.subscribe((params) => {
     
      this.userId = params.get('id');
    });
    console.log(this.userId);
    

    _userserviceService.getjsonData().subscribe(val=>{
      this.data=val;
      for(let d of this.data)
      {
        if(d.id == this.userId)
        {
          this.newData=(d);
        }
      }
    })
    // _userserviceService.getJsonUsersById(this.userId).subscribe(val=>{
    //  
    //   this.newData=val
    // })
  }

  savData(data:any){
    console.log(data)
    this._userserviceService.updateJsonData(data, this.userId).subscribe(val=>{
      this.router.navigate(['/newuser'])
    data.save(val);
    })
  }
}
