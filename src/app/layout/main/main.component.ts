import { Component } from '@angular/core';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { SliderComponent } from '../../features/betting/components/slider/slider.component';
import { GamesComponent } from '../../features/betting/components/games/games.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopHeaderComponent,SideNavigationComponent,FooterComponent,SliderComponent,GamesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
