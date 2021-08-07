import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedModule } from '@app/shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { AdminCapsulesComponent } from './components/admin-capsules/admin-capsules.component';
import { AdminTopicsComponent } from './components/admin-topics/admin-topics.component';
import { AdminFeedbackComponent } from './components/admin-feedback/admin-feedback.component';
import { AdminCreateCapsuleComponent } from './components/admin-create-capsule/admin-create-capsule.component';
import { AdminCreateTopicComponent } from './components/admin-create-topic/admin-create-topic.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminCapsulesComponent,
    AdminTopicsComponent,
    AdminFeedbackComponent,
    AdminCreateCapsuleComponent,
    AdminCreateTopicComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    SharedModule,
    AdminRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminModule {}
