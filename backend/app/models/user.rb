class User < ApplicationRecord
  has_many :reviews
  has_many :quotes, through: :reviews
end
