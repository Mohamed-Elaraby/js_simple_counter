$(document).ready(function (){
    let counter = $('#counter');
    let start = 3;
    change_Counter_value(start)

    let interval = setInterval(function (){
        if (counter.text() > 1)
        {
            change_Counter_value(counter.text()-1)
        }else
        {
            clearInterval(interval)
            change_Counter_value('welcome')
        }
    }, 1000)

    function change_Counter_value (value)
    {
        counter.html(value);
    }
})