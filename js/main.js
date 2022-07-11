$(document).ready(function (){
    let counter = $('#counter');
    let start = 5000;
    counter.html(start);

    let interval = setInterval(function (){
        if (counter.text() > 1)
        {
            counter.html(counter.text()-1);
        }else
        {
            clearInterval(interval)
            counter.html('Welcome');
        }
    }, 1000)

})