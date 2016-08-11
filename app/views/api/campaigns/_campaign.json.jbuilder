json.video_url campaign.video_url
json.video_embed_url campaign.video_embed_url
json.id campaign.id
json.funded campaign.funded
json.pledged campaign.pledged
json.days_to_go campaign.days_to_go
json.author campaign.author.username
json.title campaign.title
json.city campaign.city.name
json.state campaign.state.name
json.blurb campaign.blurb
json.description campaign.description
json.author_id campaign.author_id
json.category_id campaign.category_id
json.goal campaign.goal
json.end_date campaign.end_date
json.image_url asset_path(campaign.image.url)
json.backers campaign.pledgers.count
json.amount_pledged campaign.pledges.sum(:amount)
json.rewards campaign.rewards do |reward|
  json.backers reward.pledgers
  json.extract! reward, :title, :description, :campaign_id, :delivery_date, :min_amount, :id
end

json.comments campaign.comments do |comment|
  json.author comment.author
  json.extract! comment, :body, :author_id, :campaign_id, :date
end
# json.comments campaign.comments
