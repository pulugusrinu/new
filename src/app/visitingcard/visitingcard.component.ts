import { Component } from '@angular/core';

@Component({
  selector: 'app-visitingcard',
  templateUrl: './visitingcard.component.html',
  styleUrls: ['./visitingcard.component.css']
})
export class VisitingcardComponent {

users:any[]=[];

constructor(){

this.users=[

  {
    name:"Vijay Kumar",
    title:"Software Engineer",
    Salary:"80000",
    department:"2",
    address:[
      'Kukatpally',
      'Hyderabad',
      '1111111'
    ],
    phone:[
      '11111111',
      '22222222',
      '33333333'
    ]
  },

  {
    name:"Srinivas",
    title:"Software Developer",
    Salary:"100000",
    address:[
      'G.N.pelem',
      'Bapatla',
      '522329'
    ],
    phone:[
      '11111111',
      '22222222',
      '33333333'
    ]
  }

]

}

}
