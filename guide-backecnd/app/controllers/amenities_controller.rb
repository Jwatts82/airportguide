class AmenitiesController < ApplicationController
  before_action :set_amenity, only: %i[ show update destroy ]

  # GET /amenities
  def index
    @amenities = Amenity.all

    render json: @amenities
  end

  # GET /amenities/1
  def show
    render json: @amenity
  end

  # POST /amenities
  def create
    @amenity = Amenity.new(amenity_params)

    if @amenity.save
      render json: @amenity, status: :created, location: @amenity
    else
      render json: @amenity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /amenities/1
  def update
    if @amenity.update(amenity_params)
      render json: @amenity
    else
      render json: @amenity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /amenities/1
  def destroy
    @amenity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_amenity
      @amenity = Amenity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def amenity_params
      params.require(:amenity).permit(:name, :description, :hours, :rating, :cost, :airport_id)
    end
end
