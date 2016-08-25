# json.id user.id
# json.username user.username
# json.email user.email
json.image_url asset_path(user.image.url)
# json.pledged_campaigns user.pledged_campaigns
json.extract! user, :id, :username, :email, :biography, :url
#
json.pledges user.pledges do |pledge|
  json.extract! pledge.reward, :campaign_id, :title
  json.campaign pledge.reward.campaign.title
  json.amount pledge.amount
  json.min_amount pledge.reward.min_amount
end
