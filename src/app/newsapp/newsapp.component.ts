import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newsapp',
  templateUrl: './newsapp.component.html',
  styleUrls: ['./newsapp.component.css']
})
export class NewsappComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }









  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.newsdata=data
      }
    )
  }
newsdata:any={}

  ngOnInit(): void {
  }

}
