import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthService } from '../../features/betting/services/auth.service';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css'
})
export class SideNavigationComponent {
  constructor(private authService:AuthService){}
  logOut(){
    this.authService.logOut();
  }
}
