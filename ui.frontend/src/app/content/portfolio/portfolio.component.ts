import { ServiceRepositoriesService } from './../../services/service-repositories.service';
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

  constructor(private respositoriesService: ServiceRepositoriesService) {
    this.editMode = Utils.isInEditor();
  }

  async ngOnInit(): Promise<void> {
    this.repositories = await this.respositoriesService.getRepositories('adobe');
  }
}
