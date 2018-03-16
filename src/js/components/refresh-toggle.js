import $ from '../jquery-2.1.4';

export default function () {
    $(window).load(() => {
        $('.refresh-location').on("click", function () {
            $('.user-position').html("");
            refreshLocation();
        });
    });

    const refreshLocation = function() {
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

        // Load Location into header
        loadLatLong(location);
    };

    const loadLatLong = function (location) {
        $('.location-wrap').removeClass('loader');
        $('.user-position').html(location);
    };
}