var TodoApp = TodoApp || {};

TodoApp.TodoList = {
  init: function() {
    //$('#new-item-form').submit(this.addItem);
    //$('#saved-list').on('click', '.delete', this.deleteItem);
    //$('#unsaved-list').on('click', '.delete', this.deleteItem);
    //$('#unsaved-list').on('click', '.commit', this.completeItem);
    //$('#unsaved-by-date').click(this.orderUnsavedByDate);
    //$('#unsaved-by-desc').click(this.orderUnsavedByDesc);
    //$('#saved-by-date').click(this.orderSavedByDate);
    //$('#saved-by-desc').click(this.orderSavedByDesc);
    TodoApp.TodoList.loadTodos();
  },
  loadTodos: function() {
    $.ajax({
      url: 'http://localhost:3000/todos',
    })
    .done(this.todoCallbackHandler.bind(this));
  },
  todoCallbackHandler: function(todos) {
    var newTodo,
      unsavedList = $('#unsaved-list'),
      savedList = $('#saved-list');
    todos.forEach(function(todo){
      newTodo = new TodoApp.Todo(todo.id, todo.content, todo.created_at, todo.completed_at);
      if(newTodo.completedAt) {
        savedList.append(newTodo.showView());
      } else {
        unsavedList.append(newTodo.showView());
      }
    }.bind(this));
  }


};
