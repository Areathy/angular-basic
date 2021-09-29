import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { GroupedTask } from '../models/grouped-task';
import { TaskStatusDetail } from '../models/task-status-detail';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  urlPrefix: string = "http://localhost:9090";

  constructor(private httpClient: HttpClient) {}

  getTasks() : Observable<GroupedTask[]>  {
    return this.httpClient.get<GroupedTask[]>(this.urlPrefix + "/api/tasks", { responseType: "json" });
  }

  getTaskByTaskID(TaskID: number) : Observable<Task>  {
    return this.httpClient.get<Task>(this.urlPrefix + "/api/tasks/searchbytaskid/" + TaskID, { responseType: "json" });
  }

  updateTaskStatus(taskStatusDetail: TaskStatusDetail) : Observable<TaskStatusDetail>  {
    return this.httpClient.put<TaskStatusDetail>(this.urlPrefix + "/api/updatetaskstatus", taskStatusDetail, { responseType: "json" });
  }

  insertTask(newTask: Task): Observable<Task>  {
    return this.httpClient.post<Task>(this.urlPrefix + "/api/createtask", newTask, { responseType: "json" });
  }
}

