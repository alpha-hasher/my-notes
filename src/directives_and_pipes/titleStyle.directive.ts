import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[styleTitle]' //camelCase prefered
})
export class TitleStyleDirective implements OnInit, OnChanges {
  // accessing elements in the way the below commented code does isn't recommended as Angular may render our template
  // without DOM, and then these properties will not be available hence ignore the below commented way of doing it
  // and refer the working (uncommented) code below

  /*
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {

      this.elementRef.nativeElement.style.backgroundColor = '#fff';
      this.elementRef.nativeElement.style.borderRadius = "10px"
      this.elementRef.nativeElement.style.padding = "10px 25px";
  }
  */


  //below is a better approach, it has two ways: 1 using Renderer 2 using hostBinding
  //for styling I prefer the hostBinding

  //we can alias the directive selector here and directly set the color on the HTML using this syntax
  @Input() fontColor: string = '#000';

  @HostBinding('style')
  overrideStyle = {
    backgroundColor: '#fff',
    borderRadius:  '10px',
    padding: '10px 25px',
    color: '#000'
  };

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnChanges() {
    this.overrideStyle.color = this.fontColor;
  }

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement, 'background-color', '#fff' // optional 4th flag parameter
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'border-radius', '10px');
    // this.renderer.setStyle(this.elRef.nativeElement, 'padding', '10px 25px');
  }

  //example @HostListner usage
  @HostListener('mouseenter') mouseEnter (event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
    this.overrideStyle = {
      ...this.overrideStyle,
      backgroundColor: 'purple',
      color: '#fff'
    }
  }

  @HostListener('mouseout') mouseLeave (event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#fff');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#000');
    this.overrideStyle = {
      ...this.overrideStyle,
      backgroundColor: '#fff',
      color: this.fontColor
    }
  }

}
