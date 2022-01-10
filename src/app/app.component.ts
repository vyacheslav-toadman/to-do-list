import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'breakfast',
      done: true
    },
    { description: 'brush teeth',
      done: true
    },
    { description: 'homework',
      done: false
    },
    { description: 'dress',
      done: true
    },
  ];

  get items() {
    if(this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
  }
}
