class Api::PledgesController < ApplicationController
  def index
  end

  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      render json: @pledge.campaign
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def destroy
    @pledge = Pledge.includes(:campaign).find(params[:pledge][:id])
    @campaign = @pledge.campaign
    @pledge.destroy
    render json: @campaign
  end

  def update
  end

  def pledge_params
    params.require(:pledge).permit(:id, :pledger_id, :reward_id, :amount)
  end
end
