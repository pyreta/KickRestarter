class Api::CommentsController < ApplicationController
  def index
  end

  def create
    params[:comment][:campaign_id] = params[:comment][:campaign_id].to_i
    params[:comment][:author_id] = params[:comment][:author_id].to_i
    params[:comment][:date] = DateTime.now
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def update
  end

  def comment_params
    params.require(:comment).permit(:body, :campaign_id, :author_id, :date)
  end
end
