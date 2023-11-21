import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {

  constructor (private route:ActivatedRoute){}
  img:string='https://pluspng.com/img-png/free-png-hd-smiley-face-thumbs-up-thank-you-smiley-face-smiley-face-thank-you-free-clipart-486.png';
 AdminID:any;
ngOnInit(){

let Aid=this.route.snapshot.paramMap.get('id');
this.AdminID=Aid;

}
}
