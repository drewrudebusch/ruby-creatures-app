class TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def create
  end

  def new
  end

  def edit
  end

  def show
    @tag = Tag.find params[:id]
    @creatures = @tag.creatures
  end

  def update
  end

  def destroy
  end
end
