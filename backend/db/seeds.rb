# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'

rest_client = RestClient.get 'https://philosophy-quotes-api.glitch.me/quotes'
rest_client_array = JSON.parse(rest_client)
rest_client_array.each do |quote|
  Quote.create(
    source: quote["source"],
    philosophy: quote["philosophy"],
    quote: quote["quote"]
  )
end

michael = User.create(
  username: "michael",
  password: "michael"
)
gerald = User.create(
  username: "gerald",
  password: "gerald"
)
billy = User.create(
  username: "billy",
  password: "billy"
)

# review1 = Review.create(
#   user_review: "I dont like this quote.",
#   rating: 1,
#   user: michael,
#   quote: quote1
# )
# review2 = Review.create(
#   user_review: "This quote is alright.",
#   rating: 3,
#   user: gerald,
#   quote: quote2
# )
# review3 = Review.create(
#   user_review: "I love this quote",
#   rating: 5,
#   user: billy,
#   quote: quote3
# )




