export default class ToDoModel {
    Name: string;
    IsCompleted: boolean;
    Type: string;
  
    constructor() {
      this.Name = '';
      this.IsCompleted = false;
      this.Type = '';
    }
  }