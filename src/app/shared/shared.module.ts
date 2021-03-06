import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CapsuleCardComponent } from './components/capsule-card/capsule-card.component';
import { TopicCardComponent } from './components/topic-card/topic-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DataTableComponent,
    CapsuleCardComponent,
    TopicCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DataTableComponent,
    CapsuleCardComponent,
    TopicCardComponent,
  ],
})
export class SharedModule {}
