import { Utils } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  avatarUrl: string;
  htmlUrl: string;
  editMode: boolean;

  constructor() {
    this.editMode = Utils.isInEditor();
  }

  ngOnInit(): void {
  }

}
