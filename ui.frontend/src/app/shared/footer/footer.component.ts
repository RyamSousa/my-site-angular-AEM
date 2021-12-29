import { Utils } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  author: string;
  email: string;
  editMode: boolean;

  constructor() {
    this.editMode = Utils.isInEditor();
  }

  ngOnInit(): void {
  }

}
