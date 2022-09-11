export interface Todo {
  readonly id?: string;
  title: string;
  content?: string;
  done: boolean;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  doneAt?: Date;
  hidden: boolean;
}
