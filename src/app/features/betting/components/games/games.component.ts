import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games= [
    {name: 'Cricket', img: '../../assets/g1.png'}, // Default route
    {name: 'Tennis', img: '../../assets/g2.png'}, // /games/football
    {name: 'Football', img: '../../assets/g3.png'},
    {name: 'Horse Racing', img: '../../assets/g4.png'}, 
    {name: 'Basket Ball', img: '../../assets/g5.png'}, 
    {name: 'Greyhound Racing', img: '../../assets/g6.png'}, 
    ];
  gameslider = [{name:'Casino',img:'../../assets/gs3.jpeg'},{name:'Aviator',img:'../../assets/gs4.jpeg'},{name:'Casino',img:'../../assets/gs3.jpeg'}]
}
