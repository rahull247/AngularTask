import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagestack',
  templateUrl: './imagestack.component.html',
  styleUrls: ['./imagestack.component.css']
})
export class ImagestackComponent implements OnInit {
    angularPath:string="";
    chromePath:string="";
    firefoxPath:string="";
    htmlPath:string="";
    cssPath:string="";
    androidPath:string="";
    constructor() {
      this.angularPath="/assets/images/Angular.svg";
    this.chromePath="/assets/images/Crome.jpg";
    this.firefoxPath="/assets/images/Firefox.jfif";
    this.htmlPath="/assets/images/Html.png";
    this.cssPath="/assets/images/Css.png";
    this.androidPath="/assets/images/Android.png";
     }

    

  ngOnInit(): void {
  }

}
