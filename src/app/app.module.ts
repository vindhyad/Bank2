import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OperationComponent } from './operation/operation.component';
import { Routes, RouterModule } from '@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
const routes:Routes=[
{path:"register",component:RegisterComponent},
{path:"login",component:LoginComponent},
{path:"aboutus",component:AboutUsComponent},
{path:"contactus",component:ContactUsComponent},
{path:"operation",component:OperationComponent},
{path:"withdraw",component:WithdrawComponent},
{path:"deposit",component:DepositComponent},
{path:"fundtransfer",component:FundtransferComponent},
{path:"showbalance",component:ShowbalanceComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    OperationComponent,
    WithdrawComponent,
    DepositComponent,
    FundtransferComponent,
    ShowbalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
