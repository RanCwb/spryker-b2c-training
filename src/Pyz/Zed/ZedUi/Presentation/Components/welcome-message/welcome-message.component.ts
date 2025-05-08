import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WelcomeMessageComponent {
  merchantName = 'Merchant'; 
}
