class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, except: [:updated_at, :created_at]
  end

  def create
    @user = User.create(
      username: params[:username],
      password: params[:password]
    )
    redirect_to "http://localhost:3001/create-review.html?username=#{params[:username]}"
  end
end
