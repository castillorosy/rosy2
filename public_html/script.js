//this page is mostly about how to select the back ground
$("document").ready(function() {
    $(".test").css("background-color", "blue");
    $('p:first').css({"background-color": "red", "color": "white"});
});
//this code shows how to hover over things and to hide/show things
$('document').ready(function() {
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('div').bind('mouse', mouseOverMe);
    $('h1').bind('click', mouseClick);

    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);
    $('#show').css('visibility', 'hidden');

    $('#hide').bind('click', hideThePage);

    $('#show').bind('click', showThePage);

    $('#superHumans').accordion({header: "h3"});
});
function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}
function removeAPara() {
    $('#randPara p:list').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}
function replaceWText() {
    $('#replaceWText').text('Replaced!');
}
function mouseOverMe() {
    $("h1").html("blah");
}
function mouseOutMe() {
    $('h1').html("what's up?");
}

function mouseClick() {
    $('p').html('tf');
    $('p').html('wtf');
    $('p').html('asf');
}
//$("window").resize(resizedWindow);
//
//function resizedWindow()
//{
//    $("#second").html("Window was resized W: " + $("window").width() + " H: + ");
//    $(("window").height());
//}
//$("document").ready(function() {
//    $('#hideLogo').bind('click', hideTheImage);
//    $('#showLogo').bind('click', showTheImage);
//});

function hideTheImage() {
    $('#logo').hide('explode', {}, 2500);
}

function showTheImage() {
    $('#logo').show('fold', {}, 2500);
}

$('document').ready(function() {
    $('#removePara').bind('dbleclick', idontknow);
});

function idontknow() {
    $('body').hide('puff');
}