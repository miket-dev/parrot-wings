import { AuthComponent } from "./auth.component";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login",
    component: LoginComponent
  }
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
