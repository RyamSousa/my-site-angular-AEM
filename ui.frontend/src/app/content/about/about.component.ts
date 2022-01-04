import { Utils } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  text: string;
  editMode: boolean;

  constructor() {
    this.editMode = Utils.isInEditor();
  }

  ngOnInit(): void {
  }

}
