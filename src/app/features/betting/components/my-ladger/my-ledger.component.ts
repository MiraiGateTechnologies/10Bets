import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-my-ledger',
  standalone: true,
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './my-ledger.component.html',
  styleUrl: './my-ledger.component.css'
})
export class MyLedgerComponent {
  currentPage = 1;
  pageSize = 8;
  ledger: any[] = [
    { date: '2024-05-22', time: '14:00', matchName: 'Ludo King', wonBy: 'Ludo King', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', matchName: 'Mines', wonBy: 'Mines', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', matchName: 'Heliex', wonBy: 'Heliex', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', matchName: 'Catfish', wonBy: 'Catfish', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', matchName: 'Roulate', wonBy: 'Roulate', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', matchName: 'Tinder', wonBy: 'Tinder', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', matchName: 'FiarPlay', wonBy: 'FiarPlay', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', matchName: '10Bets', wonBy: '10Bets', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', matchName: 'Once3', wonBy: 'Once3', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', matchName: 'Football ', wonBy: 'Football', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', matchName: 'Bort.IO', wonBy: 'Bort.IO', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', matchName: 'FruteChop', wonBy: 'FruteChop', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', matchName: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', matchName: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
  
  ];
}
