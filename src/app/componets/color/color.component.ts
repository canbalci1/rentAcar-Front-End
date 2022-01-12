import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from 'src/app/models/color';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[]
  apiUrl='https://localhost:44391/api/colors/getall'
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.httpClient.get<ColorResponseModel>(this.apiUrl).subscribe(response=>{
    this.colors=response.data
    });
  }

}