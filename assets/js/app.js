setLogoIcon();
function setLogoIcon(){

    var classes = ['ion-paintbucket','ion-ios-world', 'ion-pull-request', 'ion-paper-airplane', 'ion-map','ion-calculator','ion-images','ion-music-note','ion-android-bicycle','ion-ios-lightbulb-outline','ion-coffee','ion-power','ion-erlenmeyer-flask','ion-android-walk','ion-social-github','ion-social-python'];
    var icon = $('.icon-hero i');

    icon.fadeToggle( 50, "linear" );
    icon.bind((document.ontouchstart!==null)?'click':'touchstart', function() {
        changeClass();
    });

    changeClass();
    function changeClass(){
        classes.sort(function() { return 0.5 - Math.random() }); // shuffle the array
        var randomnumber = Math.floor((Math.random() * classes.length));
        icon.removeClass();
        icon.addClass(classes[randomnumber]);
    }
}