import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bets.component.html',
  styleUrl: './my-bets.component.css'
})
export class MyBetsComponent {
  @Input() bettDetails:any[]=[];
  @Input() matchBets:any[]=[];
}
