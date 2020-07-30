class QuotesController < ApplicationController
  def index
    @quotes = Quote.all
    render json: @quotes, except: [:created_at, :updated_at]
  end

  def show
    @quote = Quote.find(params[:id])
    render json: @quote, except: [:created_at, :updated_at]
  end
end
