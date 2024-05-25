import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIframeResizer]',
  standalone: true
})
export class IframeResizerDirective {
  private isExpanded = false;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  toggleHeight() {
    if (this.isExpanded) {
      this.shrinkIframe();
    } else {
      this.expandIframe();
    }
    this.isExpanded = !this.isExpanded;
  }

  expandIframe() {
    const iframe = this.el.nativeElement.querySelector('iframe');
    if (iframe) {
      const height = iframe.contentWindow.document.body.scrollHeight;
      iframe.style.height = `${height}px`;
    }
  }

  shrinkIframe() {
    const iframe = this.el.nativeElement.querySelector('iframe');
    if (iframe) {
      iframe.style.height = '300px'; // Set to the original height or a smaller height
    }
  }
}
