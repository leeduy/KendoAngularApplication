import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.scss'],
})
export class ButtonControlComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Output() clickHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  buttonClickHandler(): void {
    this.clickHandler.emit();
  }
}
