class MessagesController < ApplicationController


	def index
		@messages = Message.all
		render json: @messages, status: :ok
	end

	def create
		@message = Message.new(message_params)
		if @message.save
			ActionCable.server.broadcast('room_channel', { message: @message.content })
		end
	end

	private

	def message_params
		params.require(:message).permit(:content)
	end


end
