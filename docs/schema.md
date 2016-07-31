# Schema Information

## campaigns
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
blurb           | text      | not null
description     | text      | not null
risks           | text      | (challenges)
body            | text      | not null
author_id       | integer   | not null, foreign key (references users), indexed
category_id     | integer   | not null, foreign key (references category), indexed
sub_category_id | integer   | foreign key (references category), indexed
location_id     | integer   | not null, foreign key (references category), indexed
end_date        | datetime  | not null, indexed
live            | boolean   | not null, default: false
approved        | boolean   | not null, default: false
goal            | integer   | not null, default: 0
image           | string    | (filename)
video_url       | integer   | (url to youtube video)
goal            | integer   | not null, default: 0

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
description  | string    | not null
campaign_id  | integer   | not null, foreign key (references users), indexed
delivery_date| datetime  | not null, indexed

## reward_items
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
image        | string    | (filename)
reward_id    | integer   | not null, foreign key (references category), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## locations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city        | string    | not null
state       | string    | not null
country     | string    | not null

## FAQs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
campaign_id | integer   | not null, foreign key (references users), indexed

## sub_categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
category_id | integer   | not null, foreign key (references category), indexed

## updates
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
campaign_id | integer   | not null, foreign key (references users), indexed
date        | datetime  | not null
title       | string    | not null
body        | text      | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
campaign_id | integer   | not null, foreign key (references users), indexed
date        | datetime  | not null
body        | text      | not null

## pledges
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
campaign_id | integer   | not null, foreign key (references users), indexed
reward_id   | integer   | not null, foreign key (references users), indexed
amount      | integer   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_icon    | string    | filename of profile image
biography       | string    |
location_id     | integer   | not null, foreign key (references category), indexed
website         | string    | url
email           | string    | not null, indexed, unique
verified        | boolean   | not null, default: false
