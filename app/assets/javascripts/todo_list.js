var TodoApp = TodoApp || {};

TodoApp.TodoList = {
  init: function() {
    $('#new-item-form').on('submit', this.createItem.bind(this));
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
      url: Routes.todos_path(),
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
        savedList.append(newTodo.completedItem());
      } else {
        unsavedList.append(newTodo.showView());
      }
    }.bind(this));
  },
  createItem: function(event){
    event.preventDefault();
    var content = $('#item-input').val();
    if(content !== '') {
      $('#item-input').val('');
      $.ajax({
        url: Routes.todos_path(),
        type: 'POST',
        dataType: 'json',
        data: {todo: {content: content}},
      })
      .done(this.addItemToList.bind(this));
    }
  },
  addItemToList: function(todo) {
    var newTodo = new TodoApp.Todo(todo.id, todo.content, todo.created_at, todo.completed_at);
    $('#unsaved-list').append(newTodo.showView());
  }
};
