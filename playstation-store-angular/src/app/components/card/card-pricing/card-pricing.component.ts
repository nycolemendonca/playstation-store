import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html'
})
export class CardPricingComponent {
  @Input() cardPricing: String = "";
  @Input() cardDevice: String = "";
}
