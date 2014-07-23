class RemoveIsCompletedFromTodos < ActiveRecord::Migration
  def change
    remove_column :todos, :is_completed, :boolean
  end
end
