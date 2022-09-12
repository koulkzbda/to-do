export const TODOS: any = [
  {
    id: '1',
    title: 'Inventory',
    content: '',
    done: true,
    priority: 0,
    createdAt: new Date(2022, 9, 9),
    updatedAt: new Date(2022, 9, 9),
    doneAt: new Date(2022, 9, 10),
    hidden: false,
  },
  {
    id: '2',
    title: 'Review stock issue',
    content: '',
    done: false,
    priority: 1,
    createdAt: new Date(2022, 9, 10),
    updatedAt: new Date(2022, 9, 10),
    hidden: false,
  },
  {
    id: '3',
    title: 'Review RSF',
    content: 'Investigate reliability of schedules and forecasts KPI',
    done: false,
    priority: 2,
    createdAt: new Date(2022, 9, 10),
    updatedAt: new Date(2022, 9, 10),
    hidden: false,
  },
];



export function findTodoById(id: string) {
  return TODOS[id];
}
