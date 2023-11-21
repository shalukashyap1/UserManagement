import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 data:any;
 desc:any;

constructor(private _userserviceService:UserserviceService, private route:ActivatedRoute){
  this.data=_userserviceService.Data;
  console.log(this.data);
}
showData(){
  this.route.paramMap.subscribe((Params)=>{

    for(let e of this.data){
      if(e.id==Params.get('id'))
      {
      this.desc=e.body;
    
      }
    }
   
  })
  alert(this.desc);
}

  

}



