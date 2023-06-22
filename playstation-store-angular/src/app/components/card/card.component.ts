import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() cardCover: String = "";
  @Input() cardLabel: String = "";
  @Input() cardPricing: String = "";
  @Input() cardDevice: String = "";
}
