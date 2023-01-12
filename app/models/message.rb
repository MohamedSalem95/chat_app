class Message < ApplicationRecord
=begin
	# just for test puposes
	after_save :tell_message

	private

	def tell_message
		ActionCable.server.broadcast 'room_channel', { content: self.content }
	end
=end
end
