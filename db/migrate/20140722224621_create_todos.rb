class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :content, null: false
      t.boolean :is_completed, default: :false, null: false

      t.timestamps
    end
  end
end
