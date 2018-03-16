import $ from '../jquery-2.1.4';

export default function () {
    $(window).load(() => {

        $('.list-toggle').on("click", function () {
            $(this).addClass('is-light');
            $('.map-toggle').removeClass('is-light');
            $('.map-view').addClass('is-hidden');
            $('.list-view').removeClass('is-hidden');
        });

        $('.map-toggle').on("click", function () {
            $(this).addClass('is-light');
            $('.list-toggle').removeClass('is-light');
            $('.list-view').addClass('is-hidden');
            $('.map-view').removeClass('is-hidden');
        });

    });
}
