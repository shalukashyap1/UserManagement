import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


 Data=[
    {
      id:101,
      name: 'Vaishali',
      img:'https://th.bing.com/th/id/OIP.4gTf3rPL53ihJ4QdiP8FzwHaJ4?w=202&h=270&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      feild:'Developer',
      body:'I have 2+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',
      
    },
    {

      id:102,
      name: 'khushboo',
      img:'https://th.bing.com/th/id/OIP.HiOWejovEmgFsz84gZkuwQAAAA?w=202&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      feild:'Developer',
      body:'I have 3+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',
      
    },
    {

      id:103,
      name: 'Madhu',
      img:'https://th.bing.com/th/id/OIP.kio_dcyXbyWP2TdKcIYKYgHaKW?w=202&h=282&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      feild:'Developer',
      body:'I have 4+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',

      
    },
    {

      id:104,
      name: 'Shalu',
      img:'https://th.bing.com/th/id/OIP.isN_tAUTLiFAoCh_VuvcqgAAAA?w=202&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      feild:'Developer',
      body:'I have 2+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',

      
    },
    {

      id:105,
      name: 'preety',
      img:'https://th.bing.com/th/id/OIP.MerUndzcbOkJf9kuOaprhQAAAA?pid=ImgDet&rs=1',
      feild:'Developer',
      body:'I have 1+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',
      
    },
    {

      id:106,
      name: 'Shiwangi',
      img:'https://th.bing.com/th/id/OIP.oZaMJ6RBEpCFy64BdJZHKgHaJh?pid=ImgDet&w=203&h=259&c=7&dpr=1.3',
      feild:'Developer',
      body:'I have 3+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',

      
    },
    {

      id:107,
      name: 'Rashi',
      img:'https://th.bing.com/th/id/OIP.eFnUJpNM79eEfG5HttroXgAAAA?pid=ImgDet&w=203&h=250&c=7&dpr=1.3',
      feild:'Developer',
      body:'I have 8+ months of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',
        

      
    },
    {

      id:108,
      name: 'Khushi',
      img:'https://th.bing.com/th/id/OIP.OrR1I_mLK3Tru0T-cbFDEgHaJh?pid=ImgDet&w=203&h=259&c=7&dpr=1.3',
      feild:'Developer',
      body:'I have 5+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',

      
    },
    {

      id:109,
      name: 'Annu ',
      img:'https://th.bing.com/th/id/OIP.tISr1k1-BI0RKYDvBw5wPwAAAA?pid=ImgDet&rs=1',
      feild:'Developer',
      body:'I have 8+ year of experince in react technology, I am good developer in this field ,A React developer translates wireframes (also known as screen blueprints) into code. They also work with and write CSS selectors and HTML tags.',

      
    },

  ];
  constructor(private _http:HttpClient) { }

  getjsonData(){
    return this._http.get(' http://localhost:3000/user');
  }
  // getJsonUsersById(id:any){
  //   return this._http.get('http://localhost:3000/users/'+id);
  // }
  setjsonData(p:any){
    return this._http.post(' http://localhost:3000/user',p);
  }
  updateJsonData(p:any,id:any){
    return this._http.put('http://localhost:3000/user/'+id,p);
  }
  deleteDataById(id:any){
    return this._http.delete('http://localhost:3000/user/'+id);
  } 
  
  
  
}
