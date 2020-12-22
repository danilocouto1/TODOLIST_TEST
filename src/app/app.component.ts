import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefa = "";
  tarefas : Array<String> = [];

  addTarefa() {
    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }

  rmvTarefa(tarefa) {
    this.tarefas.splice( this.tarefas.indexOf(tarefa), 1);
  }
}
