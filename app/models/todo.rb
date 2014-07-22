class Todo < ActiveRecord::Base
  validates :content, :is_completed, presence: true
end
