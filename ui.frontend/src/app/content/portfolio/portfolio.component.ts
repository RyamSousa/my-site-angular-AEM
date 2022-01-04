import { ServiceUsersService } from 'src/app/services/service-users.service';
import { Utils } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';
import Repository from 'src/app/models/repository.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  repositories: Repository[];
  editMode: boolean;

  constructor(private serviceUser: ServiceUsersService) {
    this.editMode = Utils.isInEditor();
  }

  async ngOnInit(): Promise<void> {
    try {
      await ServiceUsersService.emitEventRepositories.subscribe(
        login => this.loadRepositories(login)
      );
    } catch (error) {
      alert('Repositórios não encontrados');
    }

  }

  async loadRepositories(login: string) {
    this.repositories = await this.serviceUser.getRepositories(login);
  }
}
