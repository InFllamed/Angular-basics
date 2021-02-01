import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.scss']
})

export class CardComponent implements OnInit{
  title = 'My Card Title';
  text = 'My sample text';
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

