import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-passbook',
  standalone: true,
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './passbook.component.html',
  styleUrl: './passbook.component.css'
})
export class PassbookComponent {
  currentPage = 1;
  pageSize = 8;
  matches: any[] = [
    { date: '2024-05-22', time: '14:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
    { date: '2024-05-22', time: '14:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Kolkata Knight Riders', won: 0.00,loss:55,balance:43434 },
    { date: '2024-05-23', time: '15:00', remark: 'KOLKATA KNIGHT RIDERS V RAJASTHAN ROYAL', wonBy: 'Rajasthan Royals', won: 5465 ,loss:33,balance:-4545},
  
  ];
  constructor(){}
  
}
