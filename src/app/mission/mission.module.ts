import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { MissionRoutingModule } from './mission-routing.module';
import { MissionPageComponent } from './mission-page.component';
import { CollaborateFormComponent } from './components/collaborate-form/collaborate-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MissionPageComponent, CollaborateFormComponent],
  imports: [CommonModule, SharedModule, MissionRoutingModule, FormsModule],
})
export class MissionModule {}
