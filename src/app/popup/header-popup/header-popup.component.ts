import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-popup',
  templateUrl: './header-popup.component.html',
  styleUrls: ['./header-popup.component.css', '../popup-styles.css']
})
export class HeaderPopupComponent {
  @Input() showClose: boolean = true;
  @Input() title: string = '';
  @Output() clickClosed = new EventEmitter();

  onClose() {
    this.clickClosed.emit();
  }
}
