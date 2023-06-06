import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.css']
})
export class BoardOfDirectorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bodCards =[
    {
      img:'assets/images/bod/ajaykumar.jpg',
      name:'Ajay Kumar',
      about:'Non-Executive & Independent Director'
    },
    {
      img:'assets/images/bod/AshokKumarGupta.jpg',
      name:'Ashok Kumar Gupta',
      about:'Managing Director'
    },
    {
      img:'assets/images/bod/ssl.jpg',
      name:'Shyam Sunder Lal Gupta',
      about:'Non-Executive & Independent Director'
    },
    {
      img:'assets/images/bod/GovindPrasadAgrawal.jpg',
      name:'Govind Prasad Agrawal',
      about:'Non-Executive Chairman'
    },
    {
      img:'assets/images/bod/Bhupinder Singh.jpg',
      name:'Bhupinder Singh',
      about:'Non-Executive & Independent Director'
    },
    {
      img:'assets/images/bod/ASHU GUPTA.jpg',
      name:'Ashu Gupta',
      about:'Non-Executive Director'
    },
  ]
}
