import { Component,HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'showtime'

  constructor() { 
    
    
    
  }

  ngOnInit() {
    this.openmenu();
  }


   sidemenu:any = document.getElementById('sidemenu');
   openmenu(){
    if(this.sidemenu!=null)
    {
    this.sidemenu.style.right="0"
    }
    
    console.log("kkkkk")
  }
    closemenu(){
      if(this.sidemenu!=null)
      {
        this.sidemenu.style.right="-200px";
      }
    
  }
}
