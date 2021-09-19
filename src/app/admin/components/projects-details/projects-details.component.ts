import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {

  project: Project;
  routeParmsSubscription!: Subscription;
  
  constructor(private activatedRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.project = new Project();
  }

  ngOnInit() {
    this.routeParmsSubscription = this.activatedRoute.params.subscribe((params) => {
      let pid = params["projectid"];
      
      this.projectsService.getProjectByProjectID(pid).subscribe((proj: Project) => {
        this.project = proj;
      });

    });
  }

  ngOnDestroy() {
    this.routeParmsSubscription.unsubscribe();
  }

}
