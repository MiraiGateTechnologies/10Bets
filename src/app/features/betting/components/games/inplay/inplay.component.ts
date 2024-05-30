import { Component } from '@angular/core';
import { TenBettsService } from '../../../services/ten-betts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingOverlayComponent } from '../../../../../shared/components/loading-overlay/loading-overlay.component';
import { GameType } from '../../../../../shared/models/game-types.enum';
import { GameDetails } from '../../../../../shared/interface/game-details.model';

@Component({
  selector: 'app-inplay',
  standalone: true,
  imports: [CommonModule,LoadingOverlayComponent],
  templateUrl: './inplay.component.html',
  styleUrl: './inplay.component.css'
})
export class InplayComponent {
  private cricketBetSubscription!: Subscription;
  public currentRoute:any;
  cricketData =false;
  isLoading:boolean =false;
  gamesName:string ='CRICKET';
  getBettingArrayData:GameDetails[]=[];
  MatchOdds =[];

  constructor( private BetService:TenBettsService,
               private router:Router,
               private activateRouter:ActivatedRoute
            ){ }
  ngOnInit(): void {
    this.getBettingData();
  }
  getBettingData(){
    this.cricketBetSubscription = this.BetService.getGamesBet().subscribe({
      next: (res: any) => {
        res.forEach((data:any)=>{
          const eventNameParts = data.eventName.split('/');
          data.eventName = eventNameParts[0].trim();
          this.activateRouter.snapshot.url.map(segment => {
            this.gamesName = 'CRICKET';
            if(segment.path == GameType.CRICKET){
              if(data.myGameType == GameType.CRICKET){
                this.getBettingArrayData.push(data);
              }
            }
            else if(segment.path == GameType.INPLAY){
              if(data.inPlay == "True"){
                if(data.myGameType == GameType.CRICKET){
                  this.getBettingArrayData.push(data);
                }
              }
            }
            else if(segment.path == GameType.FOOTBALL){
              this.gamesName= 'FOOTBALL'
            }
          })
        })
      },error(err:any){
        console.error('Error fetching cricket bet:', err);
      }
    })
  }

  truncateTitle(title: string): string {
    if (title.length > 30) {
      return title.substring(0, 30) + '...';
    } else {
      return title;
    }
  }
  
  inPlayDetails(data:any){
    this.BetService.updateData(data);
      this.router.navigate([`/play-match/${data.code}`]);
  }

  ngOnDestroy(): void {
    // Unsubscribe to ensure no memory leaks
    this.cricketBetSubscription.unsubscribe();
  }
}
