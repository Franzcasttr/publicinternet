module Api
    class InternetSpeedController < BaseController
        def create
            place = Place.create!(
                name: params[:place_name],
                city: params[:place_city],
                address: params[:place_address],
            )

            place = InternetSpeed.create!(
                place: place
                download_speed: params[:place_download_speed],
                download_unit: params[:place_download_unit],
            )
        
            render(json: { }, status: created)
        end
    end
end