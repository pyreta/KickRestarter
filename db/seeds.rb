loremString = "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla felis vitae lacinia facilisis. Curabitur rutrum posuere justo. Integer ut tortor orci. Ut rhoncus congue odio a cursus. Maecenas sapien nulla, fermentum eget eros tincidunt, condimentum tempor lacus. Vivamus pulvinar sagittis mattis. Duis diam tellus, lacinia in blandit convallis, molestie vitae enim. Nam mauris justo, mattis sit amet massa id, ultricies porta lacus. Proin velit turpis, suscipit laoreet tempor in, dignissim eget ex. Vivamus et mi quis velit faucibus porttitor.

Donec semper nisl finibus ornare gravida. Phasellus porttitor sollicitudin dui vel posuere. In at ex ac ligula egestas congue. Vestibulum leo nulla, aliquet vitae suscipit eu, gravida eu ex. Nulla elementum fringilla tincidunt. Nulla facilisi. Cras porta luctus nisi at vehicula. Proin ut nisl neque. Nullam non facilisis enim. Vestibulum fermentum in lectus in rutrum.

Vivamus eu sapien pretium, interdum sapien vitae, tincidunt nibh. In ac turpis ac nulla laoreet iaculis a a justo. Aenean vehicula diam quis finibus gravida. Donec in metus pulvinar libero vulputate finibus. Vestibulum sit amet arcu in velit ullamcorper rhoncus consequat id tellus. Suspendisse vitae nunc efficitur, dictum sem sit amet, vestibulum risus. Cras hendrerit odio tellus, a efficitur orci bibendum at. Nullam aliquam dignissim nisl non fringilla. Sed iaculis, magna eu sagittis cursus, enim tortor dictum nulla, nec semper quam justo id ex. Aenean sed elit luctus lacus ullamcorper faucibus. Nam a imperdiet odio. Phasellus tincidunt sapien eget vestibulum malesuada. Nam in iaculis est, vel mollis ipsum.

Donec vehicula venenatis pretium. Vestibulum ornare bibendum felis, in vehicula dolor luctus nec. Pellentesque ut viverra nunc, eu placerat diam. Nunc est magna, commodo id ante non, porttitor ultrices tortor. Duis scelerisque, justo quis pellentesque faucibus, mi felis vehicula sapien, non porttitor justo elit id metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut placerat lorem. Praesent finibus neque eget eros dignissim tincidunt. Nullam fringilla vitae mauris vel finibus.

Proin eu consequat lectus, nec interdum mi. Duis elementum augue nec dui rhoncus, et venenatis metus scelerisque. Donec quis urna nec mi sollicitudin congue. Ut rhoncus sed nisl vel blandit. Fusce aliquam magna at nunc bibendum, quis lobortis velit posuere. Curabitur accumsan et nunc commodo volutpat. Nullam velit dui, aliquam vitae placerat eget, ultricies eget neque.
"

# States
new_york_state = State.create(name:"NY")
florida_state = State.create(name:"FL")

# Cities
new_york_city = City.create(name:"New York", state_id: new_york_state.id)
miami_city = City.create(name:"Miami", state_id: florida_state.id)

# Users
louis = User.create(
  username: "pyreta",
  password: "password",
  biography: "I was born on the top of a hill in the middle of Minneapolis.  It was here that I learned the true nature of potato chips and what it means to actually live on said potato chips.  Is it potato or potatoe?  Ask DanQuail, perhaps he shall have an answer for you.  Otherwise, just google it.  These days you don't need to ask questions, just look it up.  Facts are attainable by all (who have phones).  Goodbye brozef",
  location_id: new_york_city.id,
  url: "www.jollyband.com",
  email: "pyreta@gmail.com"
)

louie = User.create(
  username: "babylouie",
  password: "password",
  biography: "I'm a baby, so there's not much to say.",
  location_id: miami_city.id,
  url: "www.louisabramson.com",
  email: "louis@louisabramson.com"
)

# Categories
created_categories = [
  art_category = Category.create(title: "Art"),
  comics_category = Category.create(title: "Comics"),
  crafts_category = Category.create(title: "Crafts"),
  dance_category = Category.create(title: "Dance"),
  design_category = Category.create(title: "Design"),
  fashion_category = Category.create(title: "Fashion"),
  film_and_video_category = Category.create(title: "Film & Video"),
  food_category = Category.create(title: "Food"),
  games_category = Category.create(title: "Games"),
  journalism_category = Category.create(title: "Journalism"),
  music_category = Category.create(title: "Music"),
  photography_category = Category.create(title: "Photography"),
  publishing_category = Category.create(title: "Publishing"),
  technology_category = Category.create(title: "Technology"),
  theater_category = Category.create(title: "Theater")
]


# SubCategories
art_subcategories = ["Ceramics", "Conceptual Art", "Digital Art",
  "Illustrations", "Installations", "Mixed Media", "Painting",
  "Performance Art", "Public Art", "Sculpture", "Textiles", "Video Art"]

art_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: art_category.id)
end

comics_subcategories = ["Anthologies", "Comic Books", "Events",
  "Graphic Novels", "Webcomics"]

comics_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: comics_category.id)
end

crafts_subcategories = [
  "Candles",
  "Crochet",
  "DIY",
  "Embroidery",
  "Glass",
  "Knitting",
  "Letterpress",
  "Pottery",
  "Printing",
  "Quilts",
  "Stationery",
  "Taxidermy",
  "Weaving",
  "Woodworking"
]

crafts_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: crafts_category.id)
end


dance_subcategories = [
  "Performances",
  "Residencies",
  "Spaces",
  "Workshops"
]

dance_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: dance_category.id)
end

design_subcategories = [
  "Architecture",
  "Civic Design",
  "Graphic Design",
  "Interactive Design",
  "Product Design",
  "Typography",
]

design_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: design_category.id)
end

fashion_subcategories = [
  "Accessories",
  "Apparel",
  "Childrenswear",
  "Couture",
  "Footwear",
  "Jewelry",
  "Pet Fashion",
  "Ready-to-wear"
]

fashion_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: fashion_category.id)
end

film_subcategories = [
  "Action",
  "Animation",
  "Comedy",
  "Documentary",
  "Drama",
  "Experimental",
  "Family",
  "Fantasy",
  "Festivals",
  "Horror",
  "Movie Theaters",
  "Music Videos",
  "Narrative Film",
  "Romance",
  "Science Fiction",
  "Shorts",
  "Television",
  "Thrillers",
  "Webseries"
]

film_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: film_and_video_category.id)
end

food_subcategories = [
  "Bacon",
  "Community Gardens",
  "Cookbooks",
  "Drinks",
  "Events",
  "Farmer's Markets",
  "Farms",
  "Food Trucks",
  "Restaurants",
  "Small Batch",
  "Spaces",
  "Vegan",
]

food_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: food_category.id)
end

games_subcategories = [
  "Gaming Hardware",
  "Live Games",
  "Mobile Games",
  "Playing Cards",
  "Puzzles",
  "Tabletop Games",
  "Video Games"
]

games_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: games_category.id)
end

journalism_subcategories = [
  "Audio",
  "Photo",
  "Print",
  "Video",
  "Web",
  "Music"
]

journalism_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: journalism_category.id)
end

music_subcategories = [
  "Blues",
  "Chiptune",
  "Classical Music",
  "Country & Folk",
  "Electronic Music",
  "Faith",
  "Hip-Hop",
  "Indie Rock",
  "Jazz",
  "Kids",
  "Latin",
  "Metal",
  "Pop",
  "Punk",
  "R&B",
  "Rock",
  "World Music"
]

music_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: music_category.id)
end

photography_subcategories = [
  "Animals",
  "Fine Art",
  "Nature",
  "People",
  "Photobooks",
  "Places"
]

photography_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: photography_category.id)
end

publishing_subcategories = [
  "Academic",
  "Anthologies",
  "Art Books",
  "Calendars",
  "Children's Books",
  "Fiction",
  "Literary Journals",
  "Nonfiction",
  "Periodicals",
  "Poetry",
  "Radio & Podcasts",
  "Translations",
  "Young Adult",
  "Zines"
]

publishing_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: publishing_category.id)
end

technology_subcategories = [
  "3D Printing",
  "Apps",
  "Camera Equipment",
  "DIY Electronics",
  "Fabrication Tools",
  "Flight",
  "Gadgets",
  "Hardware",
  "Makerspaces",
  "Robots",
  "Software",
  "Sound",
  "Space Exploration",
  "Wearables",
  "Web"
]

technology_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: technology_category.id)
end

theater_subcategories = [
  "Experimental",
  "Festivals",
  "Immersive",
  "Musical",
  "Plays",
  "Spaces"
]

theater_subcategories.each do |subcategory|
  SubCategory.create(title:subcategory, category_id: theater_category.id)
end

# Campaigns
lou_diamond_phillips = Campaign.create(
  video_url: "https://www.youtube.com/watch?v=h_JrO5urMHo",
  title: "Support Lou Diamond Phillips",
  blurb: "It's time we bring the king back, to the castle.",
  description: "Remember labamba?  Me neither, that movie was stupid, but LDP is the man.  Don't be a jerk."+ loremString,
  author_id: louis.id,
  category_id: film_and_video_category.id,
  goal: 1000000,
  end_date: "2032-08-04 15:42:49.94213",
)

slap_bracelets = Campaign.create(
  video_url: "https://www.youtube.com/watch?v=0Nwnp51QV5s",
  title: "Bring Back Slap Bracelets",
  blurb: "They're worth cutting your wrists over.",
  description: "It's all fun and games until the cheap cloth comes off and you have little kids taking turns ramming sharp pieces of metal into their flesh." + loremString,
  author_id: louie.id,
  category_id: fashion_category.id,
  goal: 450,
  end_date: "2018-01-31 00:00:00.0000",
  # image: File.open('app/assets/images/peewee.jpg')
)

cheap_reward = Reward.create(title: "Cheapskate award!", description: "wow f oksdflkjs  ekwelrkj  aflkaskj f lskdfj aslkjasd  gkdkdkfj f fkd f sdflkjasj a slkdjj g g dkjsdflkid d lksdflsdfj sdf eijflksjdf", campaign_id: slap_bracelets.id, delivery_date:"2018-01-31 00:00:00.0000", min_amount: 5)
less_cheap_reward = Reward.create(
  title: "You are better than awful",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla felis vitae lacinia facilisis. Curabitur rutrum posuere justo. Integer ut tortor orci. Ut rhoncus congue odio a cursus. Maecenas sapien nulla, fermentum eget eros tincidunt, condimentum tempor lacus. Vivamus pulvinar sagittis mattis. Duis diam tellus, lacinia in blandit convallis, molestie vitae enim. Nam mauris justo, mattis sit amet massa id, ultricies porta lacus. Proin velit turpis, suscipit laoreet tempor in, dignissim eget ex. Vivamus et mi quis velit faucibus porttitor. Donec semper nisl finibus ornare gravida.",
  campaign_id: slap_bracelets.id,
  delivery_date:"2019-09-31 00:00:00.0000",
  min_amount: 10,
)
cheap_pledge = Pledge.create(reward_id: cheap_reward.id, pledger_id: louis.id, amount:112)

comment1 = Comment.create(author_id: louis.id, campaign_id: slap_bracelets.id, body: "woah this is a cool page dude!", date:DateTime.now)
