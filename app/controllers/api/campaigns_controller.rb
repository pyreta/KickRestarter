class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.includes(:author, :city, :state).all
  end
  def create
    debugger 
    # FORMAT INCOMING DATAAA
    #x = Time.zone.parse("2018-01-31 00:00:00.0000")
    # y = x+5.day
    # ((y-Time.now)/86400.00).to_i
    end_date = Time.now + (params[:campaign][:days]).to_i.day
    params[:campaign][:end_date] = end_date
    # params[:campaign][:video_embed_url] = params[:campaign][:video_url]
    # .split("watch?v=")
    # .join("embed/")
    params[:campaign][:category_id] = params[:campaign][:categoryId].to_i
		@campaign = Campaign.new(campaign_params)
    @campaign.author_id = current_user.id
		if @campaign.save
      render json: @campaign
		else
			render json: @campaign.errors.full_messages, status: 422
		end
	end



	def show
		@campaign = Campaign.find(params[:id])
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
