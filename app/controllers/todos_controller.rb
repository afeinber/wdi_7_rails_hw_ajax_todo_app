class TodosController < ApplicationController
  def default_serializer_options
    {root: false}
  end

  respond_to :json

  def index
    @todos = Todo.all
    respond_with(@todos)
  end

  def create
    @todo = Todo.create(todo_params)
    respond_with(@todo)
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    @todos = Todo.all
    respond_with(@todos)
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.completed_at = params[:completed_at]
    @todo.save
    respond_with(@todo)
  end

  private

  def todo_params
    params.require(:todo).permit(:content)
  end
end
