import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  newProject: Project = new Project();

  constructor(private projectService: ProjectsService) { 
  }

  ngOnInit(): void {

    this.projectService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
    );
  }

  onSaveClick()
  {
    this.projectService.insertProject(this.newProject).subscribe((response) => {
      //Add Project to Grid
      var p: Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      //Clear New Project Dialog - TextBoxes
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }

}
