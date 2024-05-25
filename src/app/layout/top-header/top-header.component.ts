import { Component } from '@angular/core';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [SideNavigationComponent],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {

}
