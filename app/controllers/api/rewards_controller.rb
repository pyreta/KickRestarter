class Api::RewardsController < ApplicationController
  def index
  end

  def create

    params[:reward][:campaign_id] = params[:reward][:campaign_id].to_i
    @reward = Reward.new(reward_params)
    if @reward.save
      render json: @reward
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def update
  end

  def reward_params
    params.require(:reward).permit(:title, :campaign_id, :description, :min_amount, :delivery_date)
  end
end
