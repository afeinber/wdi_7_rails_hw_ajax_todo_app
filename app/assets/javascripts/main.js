$(document).ready(function() {
  TodoApp.TodoList.init();
  $(document).ajaxStop(function() {
    $('#saved-count').empty().text(TodoApp.TodoList.todones.length);
    $('#unsaved-count').empty().text(TodoApp.TodoList.todos.length);
  });
});

Handlebars.registerHelper('timeFromString', function(createdAt, completedAt){
  if(completedAt) {
    return 'Completed on: ' +(completedAt.getMonth()+1) + '/' + completedAt.getDate() + '/' + completedAt.getFullYear() + ' at ' + completedAt.getHours() + ':' + completedAt.getMinutes();
  } else {
    return 'Created on: ' +(createdAt.getMonth()+1) + '/' + createdAt.getDate() + '/' + createdAt.getFullYear() + ' at ' + createdAt.getHours() + ':' + createdAt.getMinutes();
  }
});
