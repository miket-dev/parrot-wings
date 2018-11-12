import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './route/home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AuthModule,
        AuthRoutingModule,
        AppRoutingModule
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