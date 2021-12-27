import { SpaAngularEditableComponentsModule } from '@adobe/aem-angular-editable-components';
import { PageComponent } from './page/page.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import './import-components-aem';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    SpaAngularEditableComponentsModule,
    CommonModule
  ],
  exports: [
    PageComponent
  ]
})
export class AemComponentsModule { }
