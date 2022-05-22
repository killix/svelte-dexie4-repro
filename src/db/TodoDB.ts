import Dexie from 'dexie';
import type { Table } from 'dexie';
// import dexieCloud, { DexieCloudTable } from 'dexie-cloud-addon';
import { populate } from './populate';
import type { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';

export class TodoDB extends Dexie {
  // Table accessors are auto-generated by Dexie (from schema below)
  todoLists!: Table<TodoList, 'id'>;
  todoItems!: Table<TodoItem, 'id'>;
  openCloseStates!: Table<boolean, [string, string]>;

  constructor() {
    super('TodoDBCloud2');
    this.version(1).stores({
      todoLists: `@id`,
      todoItems: `@id, [todoListId+realmId]`,
      openCloseStates: `` // Set of open ids (persisted local state only)
    });
    this.todoLists.mapToClass(TodoList);
    this.on('populate', () => {
      this.on('ready', () => {
        return populate(this);
      });
    });
    // Configure cloud:
    // this.cloud.configure({
    //   unsyncedTables: ['openCloseStates'],
    //   databaseUrl: process.env.REACT_APP_DBURL!,
    //   tryUseServiceWorker: true, // true!
    //   requireAuth: false,
    // });
  }
}
