class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :abreviation
  has_many :amenities
end
