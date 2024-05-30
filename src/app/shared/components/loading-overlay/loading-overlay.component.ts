import { Component } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.css'
})
export class LoadingOverlayComponent {
  isLoading = false;
  constructor(private loadingService: LoadingService) {
    console.log('hello loading ..............');
    console.log('hello loading ..............');
    console.log('hello loading ..............');
    console.log('hello loading ..............');
    this.loadingService.loading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}
