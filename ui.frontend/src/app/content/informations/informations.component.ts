import { Utils } from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit, Output } from '@angular/core';
import User from 'src/app/models/user.model';
import { ServiceUsersService } from 'src/app/services/service-users.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  @Input() username: string;
  user: User;
  editMode: boolean;
  isLoadding: boolean;

  constructor(private serviceUser: ServiceUsersService) {
    this.editMode = Utils.isInEditor();
    this.isLoadding = false;
  }

  async ngOnInit(): Promise<void> {
    this.user = await this.serviceUser.getUser('adobe');
    ServiceUsersService.emitEventRepositories.emit(this.user.login);
  }


  async search() {
    this.isLoadding = true;
    this.user = await this.serviceUser.getUser(this.username);
    ServiceUsersService.emitEventRepositories.emit(this.user.login);
    this.isLoadding = false;
  }
}
