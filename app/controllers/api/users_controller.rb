class Api::CampainsController < ApplicationController

	def create
		@campaign = Campain.new(campaign_params)

		if @campaign.save
			render "api/campaigns/show"
		else
			render json: @campaign.errors.full_messages, status: 422
		end
	end

	private

	def campaign_params
		params.require(:campaign).permit(
			:video_url,
			:title,
			:blurb,
			:description,
			:author_id,
			:category_id,
			:goal,
			:end_date,
			:risks,
			:location
		)
	end

end


# lou_diamond_phillips = Campaign.create(
#   video_url: "https://www.youtube.com/watch?v=h_JrO5urMHo",
#   title: "Support Lou Diamond Phillips",
#   blurb: "It's time we bring the king back, to the castle.",
#   description: "Remember labamba?  Me neither, that movie was stupid, but LDP is the man.  Don't be a jerk.",
#   author_id: louis.id,
#   category_id: film_and_video_category.id,
#   goal: 1000000,
#   end_date: "2032-08-04 15:42:49.94213"
# )
