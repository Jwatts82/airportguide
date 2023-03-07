require "test_helper"

class AirportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @airport = airports(:one)
  end

  test "should get index" do
    get airports_url, as: :json
    assert_response :success
  end

  test "should create airport" do
    assert_difference("Airport.count") do
      post airports_url, params: { airport: { abreviation: @airport.abreviation, city: @airport.city, name: @airport.name, state: @airport.state } }, as: :json
    end

    assert_response :created
  end

  test "should show airport" do
    get airport_url(@airport), as: :json
    assert_response :success
  end

  test "should update airport" do
    patch airport_url(@airport), params: { airport: { abreviation: @airport.abreviation, city: @airport.city, name: @airport.name, state: @airport.state } }, as: :json
    assert_response :success
  end

  test "should destroy airport" do
    assert_difference("Airport.count", -1) do
      delete airport_url(@airport), as: :json
    end

    assert_response :no_content
  end
end
