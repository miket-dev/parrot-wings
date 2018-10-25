import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routing';

import { HomeComponent } from './route/home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthModule,
        APP_ROUTING
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}