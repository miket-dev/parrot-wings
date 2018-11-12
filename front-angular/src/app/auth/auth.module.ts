import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth.routing";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [CommonModule, FormsModule, AuthRoutingModule],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {}
