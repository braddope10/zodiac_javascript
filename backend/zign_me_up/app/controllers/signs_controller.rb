class SignsController < ApplicationController
  before_action :set_sign, only: [:show, :update, :destroy]

  # GET /signs
  def index
    @signs = Sign.all

    render json: @signs
  end

  # GET /signs/1
  def show
    render json: @sign
  end

  # POST /signs
  def create
    @sign = Sign.new(sign_params)

    if @sign.save
      render json: @sign, status: :created, location: @sign
    else
      render json: @sign.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /signs/1
  def update
    if @sign.update(sign_params)
      render json: @sign
    else
      render json: @sign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /signs/1
  def destroy
    @sign.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sign
      @sign = Sign.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sign_params
      params.require(:sign).permit(:name, :img_src, :description)
    end
end
