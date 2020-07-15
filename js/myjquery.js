$(document).ready(function () {
    //Your jquery here
    console.log("We are Using jquery");
    //jquery selectors look like


    //$('selcetor').action()
    //$('p').click() //click on p
    $('p').click(function () {
        // $('p').hide(); //When you clicked it will hide all
        //$(this).hide(); //hide single element
        //$('#id').hide();
        //$('#class').hide();

        console.log('We clicked on p', this);


    }); // Do this when we clicjk p

    // $('p').dblclick(function(){
    //     console.log("You double click on P");

    // });
    // $('p').mouseenter(function(){
    //     console.log("You entered",this);

    // });
    // $('p').hover(function(){
    //     console.log("You hovered all",this);

    // },function() {
    //     console.log("Thanks for coming");

    // });
    //There are three main types of selector in jQuery
    //1.element selector
    //2.id selector
    //3.class selector

    //1.Element Selector-this is an example of element selector which clicks on all p
    //$('p').click();


    //2.id selector example

    //$('#second').click();

    //2.class selector example

    //$('.odd').click()


    //other selectors
    //$('*').click()//clicks on all elements
    //$('p.odd').click() //click only odd class
    //$('p:first').click() //click first elements


    //Events in jQuery
    /*
    Mouse events = click,dblclick,mouseenter,mouseleave
    keyboard events= keypress,keydown, MediaKeyStatusMap
    formEvents = submit,change,focus,blur
    document/winmdow events = load, resize , scroll, unload  */


    //demoing on method
    // $('p').on('click',function () {

    //     console.log("Thanks for clicking",this);

    // })


    // })
    $('p').on({
        click: function () {

            console.log("Thanks for clicking", this);

        },
        mouseleave: function () {
            console.log("mouse leaving");

        }


    })



    // $('#wiki').hide(3000,function () {
    //after hidden it will show hidden done
    //     console.log("hidden done");

    // })//hide div class wiki
    // $('#wiki').show(3000,function () {
    //after show it will show hidden done
    //     console.log("Show");

    // })//show div class wiki

    // $('#but').click(function () {

    //     $('#wiki').fadeOut(3000);            //toogle works as hide and show

    // })


    //fadein
    //fadeout
    //fadeTo
    // $('#wiki').fadeOut(3000,function () {
    // after hidden it will show hidden done
    //     console.log("FadeOut");

    // })//hide div class wiki
    // $('#wiki').fadeIn(3000,function () {
    // after show it will show hidden done
    //     console.log("fadeIn");

    // })//show div class wiki

    //Slide
    //Takes 2 argument speed and callback
    // $('#wiki').slideUp(1000,function () {
    //     console.log("SildeUp")

    // });
    // $('#wiki').slideDown(1000);
    // $('#wiki').slideToggle(1000);


    //animate function in jQuery
    // $('#wiki').animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px'


    // }, "fast")//fast or delay time

    //running single one by one

    $('#wiki').animate({
        opacity: 0.3
    }, 4000);
    $('#wiki').animate({
        opacity: 0.9
    }, 1000);
    $('#wiki').animate({
        width: '300px'
    }, 12000);

    // $('#wiki').stop() //stop at animation time

    // $('#wiki').text() //show text
    // $('#wiki').text(|"this is Sumon") //set text
    // $('body').html()//show body
    // $('body').html(<b>This is harray</b>)//set body






    // $('#ta').val()
    // "This is my text area"

    // $('#ta').val("This is Sumon)

    // $('#ta').val("This is Sumon")


    // $('#inp').val("This is Sumon")






    // $('#wiki').empty() //Empty element text


    //add class 
    // $('#wiki').addClass('myclass')
    //remove class
    // $('#wiki').removeClass('myclass')

    //We can add css
    // $('#wiki').css('background-color', 'red')
    // $('#wiki').css('background-color')


    // AJAX Using jQuery
    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })


    // post
        // $.post('https://code.jquery.com/jquery-3.3.1.js',
    //     { name: 'harry', channel: 'code with harry' },
    //     function (data, status) { alert(status) });

}); //ready