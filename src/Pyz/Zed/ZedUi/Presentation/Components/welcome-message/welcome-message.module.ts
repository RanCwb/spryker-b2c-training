import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';

@NgModule({
  declarations: [WelcomeMessageComponent],
  imports: [],
  entryComponents: [WelcomeMessageComponent],
})
export class welcomeMessageModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(WelcomeMessageComponent, { injector });
    customElements.define('app-welcome-message', el);
  }

  ngDoBootstrap() {}
}
