import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopClick]'
})
export class StopClickDirective {

  constructor() { }

  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }

  @HostListener("touchmove", ["$event"])
  public onTouchMmove(event: any): void {
    event.stopPropagation();
  }

  @HostListener("touchstart", ["$event"])
  public onTouchStart(event: any): void {
    event.stopPropagation();
  }

  @HostListener("touchend", ["$event"])
  public onTouchEnd(event: any): void {
    event.stopPropagation();
  }

  @HostListener("mousedown", ["$event"])
  public onMouseDown(event: any): void {
    event.stopPropagation();
  }

}
