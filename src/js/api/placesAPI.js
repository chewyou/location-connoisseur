import $ from '../jquery-2.1.4';
import config from '../config';

export default {

    loadPlacesNearUser: function (location, radius, callback) {
        $.ajax({
            type: "GET",
            url: config.api_base_url + '/nearbysearch/json?location=' + location + '&radius=' + radius + '&types=food&key=' + config.api_key,
            success: callback
        });
    }
}
