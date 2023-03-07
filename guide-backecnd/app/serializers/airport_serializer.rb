class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :abreviation
end
