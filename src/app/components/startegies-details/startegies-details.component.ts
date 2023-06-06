import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { strategies } from 'src/strategies';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-startegies-details',
  templateUrl: './startegies-details.component.html',
  styleUrls: ['./startegies-details.component.css']
})
export class StartegiesDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:HomePageComponent) { }

  strategies = strategies[Number(this.data)]

  ngOnInit(): void {
  }

}
