json.array! @campaigns do |campaign|
  json.partial! "campaign", campaign: campaign
end
