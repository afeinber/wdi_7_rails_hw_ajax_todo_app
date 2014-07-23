$(document).ready(function() {
  TodoApp.TodoList.init();
  $(document).ajaxStop(function() {
    $('#saved-count').empty().text(TodoApp.TodoList.todones.length);
    $('#unsaved-count').empty().text(TodoApp.TodoList.todos.length);
  });
});
