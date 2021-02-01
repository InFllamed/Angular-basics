import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.scss']
})

export class CardComponent implements OnInit{
  @Input() card: Card;
  @Input() index: number;
  title = 'My Card Title';
  text = 'My sample text';
  cardDate: Date = new Date();
  textColor: string;
  // tslint:disable-next-line:typedef
  ngOnInit() {}

  // tslint:disable-next-line:typedef
  changeTitle() {
    this.title = 'Title has been changed!';
  }

  // tslint:disable-next-line:typedef
  inputHandler(value) {
    // const value = event.target.value;
    this.title = value;
  }

  // tslint:disable-next-line:typedef
  changeHandler() {

  }
}

