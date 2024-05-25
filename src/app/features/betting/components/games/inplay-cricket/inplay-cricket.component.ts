import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TenBettsService } from '../../../services/ten-betts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inplay-cricket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inplay-cricket.component.html',
  styleUrl: './inplay-cricket.component.css'
})
export class InplayCricketComponent implements OnInit{
  private cricketBetSubscription!: Subscription;
  isLoading:boolean =false;
  cricketData:any[]=[];
  upcomingCricketData:any[]=[];
  MatchOdds =[];

  constructor(private BetService:TenBettsService,private router:Router){}
  
  ngOnInit(): void {
    this.cricketBetSubscription = this.BetService.getCricketBet().subscribe({
      next: (res: any) => { // Specify the type of 'res' as 'any'
        console.log(res)
        if (res && res.gameList && res.gameList.length > 0) {
          this.isLoading =false;
          const currentTime: Date = new Date(); // Specify the type of 'currentTime' as 'Date'
          // const twoHoursAgo = new Date(currentTime.getTime() - 2 * 3600000);

          // Filter for live matches: Matches whose time is within 30 minutes past and 30 minutes future of current time
          // this.cricketData = res.gameList.filter((game: any) => {
          //   const gameTime = new Date(game.time);
          //   return game.type === 'CRICKET' &&
          //   gameTime > new Date(currentTime.getTime() - 30 * 60000) &&
          //   gameTime < new Date(currentTime.getTime() + 30 * 60000);
          // }).slice(0, 5);

          // Filter for upcoming matches: Matches whose start time is in the future
          // this.upcomingCricketData = res.gameList.filter((game: any) => {
          //   const gameTime = new Date(game.time);
          //   return game.type === 'CRICKET' && gameTime > currentTime;
          // }).slice(6, 10); // Take only the first 5 matches

          this.cricketData = res.gameList.slice(0,2)
          this.upcomingCricketData = res.gameList.slice(4,7)
        }

        else {
          this.isLoading = false;
        }
      },
      error: (err: any) => { // Specify the type of 'err' as 'any'
        console.error('Error fetching cricket bet:', err);
        this.isLoading =false;
      }
    });

  }
  truncateTitle(title: string): string {
    if (title.length > 30) {
      return title.substring(0, 30) + '...';
    } else {
      return title;
    }
  }
  inPlayDetails(data:any){
    this.router.navigate([`/play-match/${data}`]);

  }
}
