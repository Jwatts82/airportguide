class AmenitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :hours, :rating, :cost, :airport_id
end
