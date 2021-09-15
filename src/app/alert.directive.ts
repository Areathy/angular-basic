import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {
  @Input("error") error!: string;
  @HostBinding("title") title!: string;
  
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.innerHTML = `
      <div class="alert alert-danger fade show" role="alert" style="transition: transform 0.2s">
        <span>${this.error}</span>
      </div>
    `;

    this.title = "Please try again!";

  }

  @HostListener("mouseenter", [ "$event" ])
  onMouseEnter(event: any) {
    this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
  }

  @HostListener("mouseleave", [ "$event" ])
  onMouseLeave() {
    this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
  }

}

