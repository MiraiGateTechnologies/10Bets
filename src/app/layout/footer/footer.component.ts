import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  constructor(private router:Router){

  }

  navigate(path:string){

  

    this.router.navigate([path])
  }

}