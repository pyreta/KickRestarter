class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.includes(:author, :city, :state).all
  end
  def create
    debugger
    params[:campaign][:category_id] = params[:campaign][:categoryId].to_i
		@campaign = Campaign.new(campaign_params)
    @campaign.author_id = current_user.id
		if @campaign.save
      JSON.parse(params[:campaign][:rewards]).each do |reward|
        reward_params = {
          title: reward["title"],
          campaign_id: @campaign.id,
          description: reward["description"],
          min_amount: reward["min_amount"],
          delivery_date: reward["delivery_date"]
        }
        @reward = Reward.new(reward_params)
        @reward.save

      end
      render json: @campaign
		else
			render json: @campaign.errors.full_messages, status: 422
		end
	end



	def show
		@campaign = Campaign.includes(rewards: [:pledgers], comments: [:author]).find(params[:id])
	end

	def update
		@campaign = Campaign.find(params[:id])
		if @campaign.update(campaign_params)
      render :show
		else
			render json: @campaign.errors.full_messages, status: 422
		end
	end

	private

	def campaign_params
		params.require(:campaign).permit( :video_url, :title, :blurb, :description,
      :author_id, :category_id, :goal, :end_date, :image, :id, :video_embed_url)

	end

end

def create

end

def update
end
