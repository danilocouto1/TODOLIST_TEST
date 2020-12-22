import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefa = ""; //variavel para o input
  tarefas : Array<String> = []; // array onde serão adicionados os itens 

  addTarefa() { // função para adiconar a tarefa no arry
    this.tarefas.push(this.tarefa);
    this.tarefa = "";
  }

  rmvTarefa(tarefa) { // função para remover itens da lista
    this.tarefas.splice( this.tarefas.indexOf(tarefa), 1);
  }
}
