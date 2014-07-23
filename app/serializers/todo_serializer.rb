class TodoSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :completed_at
end
