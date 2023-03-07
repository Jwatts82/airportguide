require "test_helper"

class AmenitiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @amenity = amenities(:one)
  end

  test "should get index" do
    get amenities_url, as: :json
    assert_response :success
  end

  test "should create amenity" do
    assert_difference("Amenity.count") do
      post amenities_url, params: { amenity: { airport_id: @amenity.airport_id, cost: @amenity.cost, description: @amenity.description, hours: @amenity.hours, name: @amenity.name, rating: @amenity.rating } }, as: :json
    end

    assert_response :created
  end

  test "should show amenity" do
    get amenity_url(@amenity), as: :json
    assert_response :success
  end

  test "should update amenity" do
    patch amenity_url(@amenity), params: { amenity: { airport_id: @amenity.airport_id, cost: @amenity.cost, description: @amenity.description, hours: @amenity.hours, name: @amenity.name, rating: @amenity.rating } }, as: :json
    assert_response :success
  end

  test "should destroy amenity" do
    assert_difference("Amenity.count", -1) do
      delete amenity_url(@amenity), as: :json
    end

    assert_response :no_content
  end
end
