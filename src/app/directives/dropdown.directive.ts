import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // isOpen = false;
  @HostListener('click') toggleOpen() {
    // this.isOpen = !this.isOpen;
    this.elementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('show');
  }
  // @HostListener('document: click', ['$event'])
  // backdropClick(event: any){
  //   this.isOpen && this.toggleOpen();
  //
  // }

 constructor(
   private elementRef: ElementRef,

 ) { }

}
