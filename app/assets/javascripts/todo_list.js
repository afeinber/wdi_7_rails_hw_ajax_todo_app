var TodoApp = TodoApp || {};

TodoApp.TodoList = {
  todos: [],
  todones: [],
  init: function() {
    $('#new-item-form').on('submit', this.createItem.bind(this));
    $('#saved-list').on('click', '.delete', this.deleteItem);
    $('#unsaved-list').on('click', '.delete', this.deleteItem);
    $('#unsaved-list').on('click', '.commit', this.completeItem);
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
        this.todones.push(newTodo);
        savedList.append(newTodo.completedItem());
      } else {
        this.todos.push(newTodo);
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
    this.todos.push(newTodo);
    $('#unsaved-list').append(newTodo.showView());
  },
  deleteItem: function(event){
    event.preventDefault();
    var element = $(this).parents('.to-do-item');

    $.ajax({
      url: Routes.todo_path(element.data('id')),
      type: 'DELETE',
    })
    .done(function() {
      TodoApp.TodoList.todos = TodoApp.TodoList.todos.filter(function(todo) {
        return todo.id !== element.data('id');
      });
      TodoApp.TodoList.todones = TodoApp.TodoList.todones.filter(function(todo) {
        return todo.id !== element.data('id');
      });
      element.remove();
    });
  },
  completeItem: function(event) {
    event.preventDefault();
    var element = $(this).parents('.to-do-item');
    var completedAt = new Date();

    $.ajax({
      url: Routes.todo_path(element.data('id')),
      type: 'PATCH',
      dataType: 'json',
      data: {completed_at: completedAt},
    })
    .done(function() {
      TodoApp.TodoList.completeElement(element, completedAt);
    });
  },
  completeElement: function(element, completedAt) {
    var targetId = element.data('id');
    element.remove();
    var completedTodo;
    TodoApp.TodoList.todos.forEach(function(todo, i, todos){
      if(targetId === todo.id) {
        todos.splice(i,1);
        completedTodo = todo;
        return;
      }
    });
    completedTodo.completedAt = completedAt;
    TodoApp.TodoList.todones.push(completedTodo);
    $('#saved-list').append(completedTodo.completedItem());

  }
};
