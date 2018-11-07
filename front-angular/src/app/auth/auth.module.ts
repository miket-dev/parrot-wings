import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ModuleRouting } from './auth.routing';

@NgModule({
    imports: [
    BrowserModule,
        FormsModule,
        HttpModule,
        ModuleRouting
    ],
    declarations: [
        AuthComponent,
        LoginComponent
    ],
    bootstrap: [
        AuthComponent
    ]
})
export class AuthModule {}