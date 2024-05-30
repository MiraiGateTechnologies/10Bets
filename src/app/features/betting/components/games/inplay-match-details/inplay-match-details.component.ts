import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score/score.component';
import { MyBetsComponent } from './my-bets/my-bets.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SportService } from '../../../services/sport.service';
import { Subscription } from 'rxjs';
import { MatchOdds } from '../../../../../shared/interface/sport.interface';
import { FooterComponent } from '../../../../../layout/footer/footer.component';
import { TopHeaderComponent } from '../../../../../layout/top-header/top-header.component';
import { DomSanitizer } from '@angular/platform-browser';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PlaceBetComponent } from '../place-bet/place-bet.component';
import { TenBettsService } from '../../../services/ten-betts.service';
import { EventData } from '../../../../../shared/interface/match-details.interface';


@Component({
  selector: 'app-inplay-match-details',
  standalone: true,
  imports: [CommonModule,ScoreComponent,MyBetsComponent,MyBetsComponent,FooterComponent,TopHeaderComponent],
  templateUrl: './inplay-match-details.component.html',
  styleUrl: './inplay-match-details.component.css'
})
export class InplayMatchDetailsComponent  implements OnInit{
  team:string = '';
  activeTab: string = '';
  matchcode:any;
  private subscriptions = new Subscription();
  filteredSessionBets: any = [];
  loading:boolean =false;
  errorMessage: string = '';
  MatchOdds:any[]=[];
  marketData:any[]=[];
  fancy:any[]=[];
  marketString:string='';
  public safeStreamUrl: any;
  gameId:any

  sessionBets: any = [];
  visibilityStates:any = { news: false, mybet: false, liveTv:false, score:false,market:false,primeCricket:false };
  scoreDetails={team1:'sadique',team2:'shafi',score1:23,score2:43,recentBall:12,msg:'hello',player1:'Sadique',player2:'shafi',bwl:'01'};
  bettDetails:any[] =[{bitamount:23,bitrate:23,run:23,bitmode:'YES',sessionname:"Shafi"}];
  matchBets: any [] = [{bitamount:33,bitrate:43,run:22,bitmode:'NO',sessionname:"Sadique"}];
  upcomingCricketData :any[]=[{title:"India Vs Australia",mbet:43,sbet:43}]

  constructor( public router: Router,private route: ActivatedRoute,private betService:TenBettsService,private sanitizer: DomSanitizer,private modalService: NgbModal){
    
    this.matchcode = this.route.snapshot.paramMap.get('matchcode');
    // this.team1 = this.matchcode.eventName;
    // console.log(this.matchcode.)
  }

  ngOnInit(): void {
    this.betService.data$.subscribe((data:any)=>{
      if (data) {
        this.team = data.eventName;
        this.gameId = data.gameId;
      }
    });
    const streamLink = `https://www.youtube.com/watch?v=WQdqgrWvy6g`;
    this.safeStreamUrl = this.sanitizer.bypassSecurityTrustResourceUrl(streamLink);
    this.subscriptions.add(this.SportDetails());
    
  }

  SportDetails(){
    this.filteredSessionBets = setInterval(() => {
      if(this.matchcode != undefined ||this.matchcode != ''){
        this.betService.getDataByMatchCode(this.matchcode).subscribe({
          next:(res)=>{
            console.log(res)
            this.MatchOdds = res.odds_market;
            this.marketData = res['WHO WILL WIN'];
            this.fancy = res.fancy;
            // this.team1 =
        },error:(error) =>{
          this.loading =false;
          this.errorMessage = error;
        }
      })
    }
  }, 900);


  // jsonData

  // this.betService.getDataByMatchCode(this.matchcode).subscribe({
  //   next:(res:any)=>{
  //     console.log(res)
  //     res.forEach((element:any) => {
  //         this.team = element.team;
  //         this.MatchOdds = element.matchOdds
  //         this.sessionBets = element.sessionOdds;
  //       });
  //             this.loading=false;
             
  //   }
  // })
}
  goBack(){
    window.history.back();
  }
  open(mode: string, data: any) {
    let rate;
    let run = 0;
    let type = 0;
    switch (mode) {
        case 'K':
            rate = data.krate;
            type = 0;
            break;
        case 'L':
            rate = data.lrate;
            type = 0;
            break;
        case 'YES':
            rate = data.yRate;
            run = data.yRun;
            type = 1;
            break;
        case 'NO':
            rate = data.nRate;
            run = data.nRun;
            type = 1;
            break;
    }
    console.log(rate,'rate.........')
    if (rate > 0) {
        const modalRef = this.modalService.open(PlaceBetComponent, {
            windowClass: 'custom-modal-content'
        });
        (<PlaceBetComponent> modalRef.componentInstance).data = {
            mode,
            rate: rate,
            gameId:this.gameId,
            type: type,
            team: data.team ?? data.name,
            sid: data.id,
            run: run,
            match_code: this.matchcode,
        };
        modalRef.result.then((result: any) => {
            if (result == 1) {
                // this.position();
            }
        });
    } else {
        // this.toastr.error('Rate must be grater than zero');
    }
}

  toggleVisibility(sectionKey: string): void {
    this.activeTab = sectionKey;
    const wasAlreadyVisible = this.visibilityStates[sectionKey];
    for (const key in this.visibilityStates) {
      if (this.visibilityStates.hasOwnProperty(key)) {
        this.visibilityStates[key] = false;
        // this.getStreemData();
      }
    }
    this.visibilityStates[sectionKey] = !wasAlreadyVisible;
  }

  truncateTitle(title: string): string {
    if (title.length > 30) {
      return title.substring(0, 30) + '...';
    } else {
      return title;
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    if (this.filteredSessionBets) {
        clearInterval(this.filteredSessionBets);
    }
  }
}
