import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from 'src/app/models/color';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[]
  dataLoaded=false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
      this.dataLoaded=true;
    })
  }

}
