import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router:Router){
    
  }
  inplay(){
    this.router.navigate(['/inplay'])
  }

  navigate(path:string){

  

    this.router.navigate([path])
  }

}