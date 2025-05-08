import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DefaultMerchantPortalConfigModule, RootMerchantPortalModule } from '@mp/zed-ui';
import { DefaultTableConfigModule } from '@mp/gui-table';
import { welcomeMessageModule } from '../welcome-message/welcome-message.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RootMerchantPortalModule,
        DefaultMerchantPortalConfigModule,
        DefaultTableConfigModule,
        welcomeMessageModule
    ],
})
export class AppModule extends RootMerchantPortalModule {}
