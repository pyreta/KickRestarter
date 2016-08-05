class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
    # render json: @campaigns
  end

	def create
		@campaign = Campaign.new(campaign_params)

		if @campaign.save
      render json: @campaign
			# render "api/campaigns/show"
		else
			render json: @campaign.errors.full_messages, status: 422
		end
	end

	private

	def campaign_params
		params.require(:campaign).permit( :video_url, :title, :blurb, :description,
      :author_id, :category_id, :goal, :end_date, :image)
	end

end

def create

end

def update
end
