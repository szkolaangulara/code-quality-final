import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input()
  public placeholder: string = '';
  @Output()
  public valueChanged: EventEmitter<string | number> = new EventEmitter<string | number>();

  public currentValue: string | number;

  public ngModelValueChanged(): void {
    console.log('zmieniłą się wartośc', this.currentValue);
    this.valueChanged.emit(this.currentValue);
  }
}
