import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: ITask[];
  tabs: ITab[];
  newDate: string;
  newMemo: string;
  addDate: string;
  addMemo: string;
  adding: boolean;
  addTitle: string;
  constructor() { }

  ngOnInit() {
    this.tabs = [
      { title: 'My Tasks' },
      { title: 'In Progress' },
      { title: 'Completed' }];
    this.tasks = [
      { selected: false, title: 'todo1', important: false, edit: false, date: '2018/6/21' },
      { selected: true, title: 'todo2', important: false, edit: false, memo: '去買菜' },
      { selected: false, title: 'todo3', important: true, edit: false }];
  }

  getTasks(index: number): ITask[] {
    return this.tasks
      .filter(i => {
        switch (index) {
          case 1:
            return i.selected === false;
          case 2:
            return i.selected === true;
          default:
            return i;
        }
      });
  }
  edit(index: number) {
    this.newDate = this.tasks[index].date;
    this.newMemo = this.tasks[index].memo;
  }

  save(index: number) {
    this.tasks[index].date = this.newDate;
    this.tasks[index].memo = this.newMemo;
  }
  add() {
    if (!this.addTitle) {
      alert('請填寫 task 名稱');
      return;
    }
    this.adding = false;
    this.tasks.push({
      selected: false,
      title: this.addTitle,
      important: false,
      edit: false,
      date: this.addDate,
      memo: this.addMemo
    });
    this.addTitle = '';
    this.addDate = '';
    this.addMemo = '';
  }
}

interface ITab {
  title: string;
}

interface ITask {
  selected: boolean;
  title: string;
  important: boolean;
  edit: boolean;
  file?: any;
  date?: string;
  memo?: string;
}
