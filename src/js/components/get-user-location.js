import $ from '../jquery-2.1.4';
import places from '../api/placesAPI';

export default function () {
    $(window).load(() => {
        // getLocation();
    });

    const getLocation = function () {
        // $('.location-wrap').addClass('loader');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, fail);
        }
    };

    const fail = function () {
        console.log("Location blocked by user");
    };

    const success = function (position) {
        let location = position.coords.latitude + "," + position.coords.longitude;
        let radius = 100;

        // Load Location into header
        loadLatLong(location);

        // Load nearby places into body
        // places.loadPlacesNearUser(location, radius, data => {
        //     console.log(data);
        //     $('.places-near-user').html(data);
        // });

    };

    const loadLatLong = function (location) {
        $('.location-wrap').removeClass('loader');
        $('.user-position').html(location);
    };
}


