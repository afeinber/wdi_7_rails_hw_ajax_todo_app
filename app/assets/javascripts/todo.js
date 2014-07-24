var TodoApp = TodoApp || {};

TodoApp.Todo = function(id, content, createdAt, completedAt) {
  this.id = id;
  this.content = content;
  this.createdAt = new Date(createdAt);
  this.completedAt = completedAt ? new Date(completedAt) : null;
};

TodoApp.Todo.prototype = {
  showView: function() {
    // var newDiv = $('<div></div>');
    // newDiv.addClass('panel panel-default to-do-item');
    // var innerDiv = $('<div></div>');
    // innerDiv.addClass('panel-body');
    // innerDiv.text(this.content);
    // newDiv.append(innerDiv);
    // var footer = $('<div></div>');
    // footer.addClass('panel-footer text-right');
    // newDiv.append(footer);
    // footer.append($('<div>').addClass('col-md-9 item-date text-left').text(this.dateFromString(this.createdAt, false)
    //   ));
    // var btnDiv = $('<div>').addClass('col-md-3');
    // footer.append(btnDiv);
    // var btnGroup = $('<div></div>');
    // btnGroup.addClass('btn-group');
    // btnDiv.append(btnGroup);
    // var button = $('<button></button>');
    // button.addClass('btn btn-default commit');
    // btnGroup.append(button);
    // var delButton = $('<button></button>');
    // delButton.addClass('btn btn-default delete');
    // btnGroup.append(delButton);
    // checkIcon = $('<i></i>');
    // checkIcon.addClass('fa fa-check-square-o');
    // button.append(checkIcon);
    // delIcon = $('<i></i>');
    // delIcon.addClass('fa fa-times');
    // delButton.append(delIcon);
    newDiv = HandlebarsTemplates.todo(this);
    //$(newDiv).data('id', this.id);
    return newDiv;
  },
  completedItem: function() {
    // var newDiv = $('<div></div>');
    // newDiv.addClass('panel panel-default to-do-item');
    // var innerDiv = $('<div></div>');
    // innerDiv.addClass('panel-body');
    // innerDiv.text(this.content);
    // newDiv.append(innerDiv);
    // var footer = $('<div></div>');
    // footer.addClass('panel-footer text-right');
    // newDiv.append(footer);
    // footer.append($('<div>').addClass('col-md-9 item-date text-left').text(this.dateFromString(this.completedAt, true)
    //   ));
    // var btnDiv = $('<div>').addClass('col-md-3');
    // footer.append(btnDiv);
    // var delButton = $('<button></button>');
    // delButton.addClass('btn btn-default delete');
    // btnDiv.append(delButton);
    // delIcon = $('<i></i>');
    // delIcon.addClass('fa fa-times');
    // delButton.append(delIcon);
    // newDiv.data('id', this.id);
    newDiv = HandlebarsTemplates.todo(this);
    return newDiv;
  },
  dateFromString: function(date, isComplete) {
    if(isComplete) {
      return 'Completed on: ' +(date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes();
    } else {
      return 'Created on: ' +(date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes();
    }
  }
};
