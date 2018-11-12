import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './route/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';

const appRoutes = [{
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
}, {
    path: 'login',
    loadChildren: "./auth/auth.module#AuthModule",
    canActivate: [AuthGuard]
}, {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
}];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule {}