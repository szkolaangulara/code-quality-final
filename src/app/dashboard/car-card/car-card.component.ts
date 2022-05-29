import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {

  @Input()
  public brand: string;
  @Input()
  public model: string;
  @Input()
  public imgSrc: string;

}
