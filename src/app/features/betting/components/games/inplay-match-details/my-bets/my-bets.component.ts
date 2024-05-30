import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './my-bets.component.html',
  styleUrl: './my-bets.component.css'
})
export class MyBetsComponent {
  // @Input() bettDetails:any[]=[];
  @Input() matchBets:any[]=[];
  currentPage = 1;
  pageSize = 8;
  bettDetails: any[] = [
    { sessionBets: '--', amount: '15',rate:12, run: '34', mode: 'No', sessionName: 'Faizan'},
    { sessionBets: '--', amount: '15', rate:43,run: '34', mode: 'No', sessionName: 'Rushal'},
    { sessionBets: '--', amount: '15', rate:65,run: '34', mode: 'No', sessionName: 'sarthak'},


  
  ];

}
