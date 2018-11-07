import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './route/home/home.component';
import { AuthGuard } from './auth/auth.guard';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'auth', loadChildren: '.\/auth\/auth.module#AuthModule'
    }
]);