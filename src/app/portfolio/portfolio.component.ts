import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images:string[]=[
    "./assets/images/poert1.png",
    "./assets/images/port2.png",
    "./assets/images/port3.png"
    
  ];
showImg(img:string){

  
  Swal.fire({
    imageUrl: img,
      imageWidth: '100%',
      padding:0,

    heightAuto:false,
   
    // imageHeight: 100,
    background: "#fff",
     width: 500, 
    
    
    backdrop: `
    rgba(0,0,123,0.4)`,
    showConfirmButton:false,
   
    
  });
 
}
}
