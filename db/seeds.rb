Todo.delete_all


Todo.create!(content: "flee", created_at: Time.now)
Todo.create!(content: "blee", created_at: 2.days.ago, completed_at: Time.now)
