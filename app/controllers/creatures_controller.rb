class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
    render :json => @creatures
  end

  def create
    Creature.create creature_params
    redirect_to creatures_path
  end

  def new
    @creature = Creature.new
  end

  def edit
    @creature = Creature.find params[:id]
    @tags = Tag.all
  end

  def show
    @creature = Creature.find params[:id]
    @tags = @creature.tags
  end

  def update
    creature = Creature.find params[:id]
    creature.update creature_params
    update_tags(creature)

    redirect_to creature_path
  end

  def destroy
    @creature = Creature.find(params[:id]).delete
    render :json => @creature
  end

  private

  def creature_params
    params.require(:creature).permit(:description, :name)
  end

  def update_tags(creature)
    tags = params[:creature][:tag_ids]
    creatures.tags.clear
    tags.each do |id|
      creature.tags << Tag.find(id) unless id.blank?
    end
  end

end
