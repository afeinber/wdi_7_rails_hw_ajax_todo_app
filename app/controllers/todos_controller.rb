class TodosController < ApplicationController
  def default_serializer_options
    {root: false}
  end

  respond_to :json

  def index
    @todos = Todo.all
    respond_with(@todos)
  end
end
