class ReviewsController < ApplicationController

  def index
    if params[:username]
      @reviews = Review.where(user_id: User.find_by(username: params[:username]))
      # byebug
      render json: @reviews, include: :quote
    else
      @reviews = Review.all
      render json: @reviews, include: :quote
    end
    
    # redirect_to "http://localhost:3001/create-review.html?username=#{params[:username]}"
    # redirect_to "http://localhost:3001/see-reviews.html?username=#{params[:username]}"
    # redirect_to "http://localhost:3001/see-reviews.html"
  end

  def create
    user = User.find_by(username: params[:username])
    @review = Review.create({
      user_review: params[:user_review],
      rating: params[:rating],
      user_id: user.id,
      quote_id: params[:quote]
    })
    redirect_to "http://localhost:3001/create-review-x.html?username=#{params[:username]}"
  end
end
