class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render json: @user
    else
      flashit(["Invalid Username or Password"])
      render json: {}
    end
  end

  def destroy
    if @current_user
      logout
      render json: {}
    else
      puts "LOGGGGDDDOUT ALREADY"
      render test: "Not signed in"
      # render status: 404
    end
  end
end
