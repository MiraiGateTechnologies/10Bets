import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopHeaderComponent,FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeader:boolean= true;
  showFooter:boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event:any): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe({
        next: (event: NavigationEnd) => {
          this.showHeader = !(
            event.urlAfterRedirects.includes('/login') 
          );
          this.showFooter =!(
            event.urlAfterRedirects.includes('/login')
          );
        },
        error: (error) => {
          console.error('Router events error:', error);
        },
        complete: () => {
          console.log('Router events subscription completed.');
        }
      });
  }
}
