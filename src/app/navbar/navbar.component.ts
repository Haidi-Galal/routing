import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @HostListener('window:scroll', ['$event']) 
  scrollHandler() {
    console.debug("Scroll Event");
    console.log(scrollY);
    
    
  //  let offset=  document.getElementById("nav")?.offsetTop;
   if(scrollY>200){
    document.getElementById("nav")?.classList.remove("py-4");
   }
   else{
    document.getElementById("nav")?.classList.add("py-4");

   }
    // console.log(document.getElementById("nav"))
  }
 
}
