# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# create_table "users", force: :cascade do |t|
#   t.string   "username",        null: false
#   t.string   "password_digest", null: false
#   t.string   "session_token",   null: false
#   t.string   "profile_icon"
#   t.text     "biography"
#   t.integer  "location_id",     null: false
#   t.string   "url"
#   t.string   "email",           null: false
#
# end

user1 = User.create(
  username: "pyreta",
  password: "password",
  profile_icon: "pyreta_icon.jpg",
  biography: "I was born on the top of a hill in the middle of Minneapolis.  It was here that I learned the true nature of potato chips and what it means to actually live on said potato chips.  Is it potato or potatoe?  Ask DanQuail, perhaps he shall have an answer for you.  Otherwise, just google it.  These days you don't need to ask questions, just look it up.  Facts are attainable by all (who have phones).  Goodbye brozef",
  location_id: 1,
  url: "www.jollyband.com",
  email: "pyreta@gmail.com"
)

user1 = User.create(
  username: "babylouie",
  password: "password",
  profile_icon: "babylouie_icon.jpg",
  biography: "I'm a baby, so there's not much to say.",
  location_id: 2,
  url: "www.louisabramson.com",
  email: "louis@louisabramson.com"
)
