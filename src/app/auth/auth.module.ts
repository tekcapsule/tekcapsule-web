import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AmplifyService } from 'aws-amplify-angular';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [AuthPageComponent, SigninComponent],
  imports: [CommonModule, AmplifyUIAngularModule, AuthRoutingModule],
  providers: [AmplifyService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule {}
