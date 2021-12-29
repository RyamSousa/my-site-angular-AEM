import { ServiceUsersService } from 'src/app/services/service-users.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InformationsComponent } from './informations/informations.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import './import-components-content';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AboutComponent,
    InformationsComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  exports: [
    AboutComponent,
    InformationsComponent,
    PortfolioComponent
  ],
  providers: [ ServiceUsersService]
})
export class ContentModule { }
