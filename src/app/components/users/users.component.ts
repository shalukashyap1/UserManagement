import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  
  
  users: any = [
    {
      img:'https://bruinlife.s3.us-west-1.amazonaws.com/wp-content/uploads/2018/05/02172455/2B8_5801.jpg',
      name: 'Vaishali Saini',
      fname: 'Vivek Saini',
      skills: ['Node js', 'React js', 'GitHub'],
      address:
        {
          city: 'MZN',
          state: 'UP',
          pin: 130404,
        }
      
    },
    {
      img:'https://th.bing.com/th/id/R.97fa15ef2fe6d8d3988751a1b296f11c?rik=iRDG5zJHDxuHyQ&riu=http%3a%2f%2f2017.igem.org%2fwiki%2fimages%2f0%2f03%2fTracy.jpg&ehk=caYFBw%2fqJ6KVtob3%2bRQfkIxdCq2FBO0IqmVfhk8wRZU%3d&risl=&pid=ImgRaw&r=0',
      name: 'Shalu Kashyap',
      fname: 'Rajender Prasad',
      skills: ['Node js', 'React js', 'Java'],
      address: 
        {
          city: 'MZN',
          state: 'UP',
          pin: 251202,
        }
      
    },
    {
      img:'https://media.licdn.com/dms/image/C4E03AQHD45PvftHxjw/profile-displayphoto-shrink_800_800/0/1612155293769?e=2147483647&v=beta&t=DnYONmlvirAsRipei_QfH0XB2VZ9p-SjvMmSEvNhIZI',
      name: 'Madhu Rani',
      fname: 'Raj Kumar',
      skills: ['HTML', 'CSS', 'React js', 'GitHub'],
      address: 
        {
          city: 'Noida',
          state: 'UP',
          pin: 201301,
        }

      
    },
    {
      img:'https://th.bing.com/th/id/OIP.tISr1k1-BI0RKYDvBw5wPwAAAA?pid=ImgDet&rs=1',
      name: 'Khushi Varma',
      fname: 'Rahul Varma',
      skills: ['HTML', 'CSS', 'React js', 'angular'],
      address: 
        {
          city: 'Noida',
          state: 'UP',
          pin: 201305,
        }

      
    },
    {
      img:'https://th.bing.com/th/id/OIP.U1oNxIOaCXRM5G1z4C6KagAAAA?pid=ImgDet&w=203&h=253&c=7&dpr=1.3',
      name: 'Mohan Shrma',
      fname: 'Rakesh Shrma',
      skills: ['.net', 'Java', 'React js', 'GitHub'],
      address: 
        {
          city: 'Delhi',
          state: 'Delhi',
          pin: 134503,
        }

      
    },
    {
      img:'https://th.bing.com/th/id/OIP.asjnTRv3RM5kWsPM3JDeiAAAAA?pid=ImgDet&w=203&h=261&c=7&dpr=1.3',
      name: 'Ajay Kumar Yadav',
      fname: 'Naresh Yadav',
      skills: ['MySql', 'Android', 'React js'],
      address: 
        {
          city: 'Jaypur',
          state: 'RTHN',
          pin: 101023,
        }

      
    },
    {
      img:'https://th.bing.com/th/id/OIP.UGfYSJBSNyLe-im_25emcQAAAA?pid=ImgDet&rs=1',
      name: 'Sonu Kumar',
      fname: 'Baburam Tyagi',
      skills: ['DBMS', 'Oerating System', 'React js', 'GitHub'],
      address: 
        {
          city: 'Chandighar',
          state: 'CHD',
          pin: 301331,
        }

      
    },
    {
      img:'https://th.bing.com/th/id/OIP.MerUndzcbOkJf9kuOaprhQAAAA?pid=ImgDet&rs=1',
      name: 'Preety singh',
      fname: 'Mintu Kumar',
      skills: ['HTML', 'CSS', 'React js', 'GitHub'],
      address: 
        {
          city: 'Karnal',
          state: 'HR',
          pin: 190501,
        }

      
    },
    {
      img:'https://th.bing.com/th/id/OIP.-XL5A0pbfUoGq_fDufaR4wAAAA?pid=ImgDet&rs=1',
      name: 'Vneet Kumar',
      fname: 'Raj Kumar',
      skills: ['DSA', 'OOPS', 'React js', 'GitHub'],
      address: 
        {
          city: 'Lknw',
          state: 'UP',
          pin: 201301,
        }

      
    }



  ]

}
