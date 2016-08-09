class Api::PledgesController < ApplicationController
  def index
  end

  def create
    @pledge = Pledge.new(pledge_params)
    if @pledge.save
      render json: @pledge
    else
      render json: @pledge.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def update
  end

  def pledge_params
    params.require(:pledge).permit(:pledger_id, :reward_id, :amount)
  end
end
