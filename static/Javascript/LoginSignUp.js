        $(document).ready(function() {
            $('.collapsible').collapsible();
            $('select').material_select();
            $(".button-collapse").sideNav();
            $('.slider').slider();
            $(".dropdown-button").dropdown();

            function disableBack() { window.history.forward(); }
            window.onload = disableBack();
        });