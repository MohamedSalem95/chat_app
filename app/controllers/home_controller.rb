class HomeController < ApplicationController
  def home
    @messages = Message.all
  end
end
