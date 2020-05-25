// Hitta hur långt ifrån nav:en ligger från övre fönterkanten
const topOfNav = $("nav").offset().top;

// Lyssna på fönstret om användaren scrollar
$(window).on("scroll", function() {

// Logga avståndet från naven till toppen
console.log("Nav offset" + topOfNav);
// Logga hur långt användaren har scrollat ner från toppen
console.log("Scrolltop" + $(window).scrollTop());

// Om användaren scrollar längre än avståndet mellan nav:en och fönstrets överkant
if($(window).scrollTop() > topOfNav) {
    // .. så lägg till klassen sticky som sätter position: fixed och top: 0. Fäster nav:en till toppen!
    $("nav").addClass("sticky");
    // Lägg till klassen som att body:n lägger till lite padding (80px samma som navens höjd)
    $("body").addClass("addSpace");

} else {
    // Tar bort klasserna om villkoret inte uppfylls.
    $("nav").removeClass("sticky");
    $("body").removeClass("addSpace");
}

});