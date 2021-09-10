import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input("currentProject") project!: Project ;
  @Input("recordIndex") i!: number;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();


  constructor(public projectsService: ProjectsService) { }

  ngOnInit(): void {
    
  }

  onEditClick(event: any, i: number) {
    this.editClick.emit({ event, i });
  }

  onDeleteClick(event: any, i: number) {
    this.deleteClick.emit({ event, i });
  }

}
