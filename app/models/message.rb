class Message < ApplicationRecord
  after_create_commit { broadcast_message }

  private

def broadcast_message
  current_time = Time.current.in_time_zone('Jakarta').strftime('%Y-%m-%d %H:%M:%S')

  ActionCable.server.broadcast('MessagesChannel', {
    id: id,
    body: body,
    timestamp: current_time
  })
end

end