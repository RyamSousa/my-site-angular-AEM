import User from 'src/app/models/user.model';
import { ServiceUsersService } from 'src/app/services/service-users.service';
import { Utils } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  linkedinLink: string;
  instagramLink: string;
  editMode: boolean;

  constructor(private userService: ServiceUsersService) {
    this.editMode = Utils.isInEditor();
  }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getUser('adobe');
  }

}
