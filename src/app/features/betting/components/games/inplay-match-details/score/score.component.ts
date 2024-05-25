import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IframeResizerDirective } from './iframe-resizer.directive';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule, IframeResizerDirective],
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent implements OnInit{
  @ViewChild('myIframe') myIframe!: ElementRef<HTMLIFrameElement>;
  @Input() scoreDetails: any;
  url = "https://www.satsports.net/score_widget/index.html?id=48994849";
  private cachedUrl: any;
  
  // getDataFromIframe =document.getElementById('myIframe');
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // const data = this.getDataFromIframe.contentWindow
  // this.getDataFromIframe()
  }

  getDataFromIframe() {
    const data = this.myIframe.nativeElement.contentWindow;
    console.log(data?.parent.document);
  }
  transform(url: string) {
    // Only sanitize if URL changes
    if (!this.cachedUrl || this.cachedUrl.originalUrl !== url) {
      this.cachedUrl = { 
        originalUrl: url,
        sanitized: this.sanitizer.bypassSecurityTrustResourceUrl(url)
      };
    }
    return this.cachedUrl.sanitized;
  }

  handleMessage = (event: MessageEvent) => {
    // Check the origin of the message
    if (event.origin !== "https://www.satsports.net") {
      console.warn("Received message from unauthorized origin");
      return;
    }

    // Process the data from the iframe
    console.log('Data from iframe:', event.data);
  }
}
