// let search=$("#livesearch");
function show(s) {
    // alert(s);
    if(s.length==0)
    {
        $("#livesearch").addClass('hide');
    }
    else{
       $("#livesearch").removeClass('hide');
    }
    $.ajax({
        url:'/',
        contentType:'application/json',
        method:'POST',
        data:JSON.stringify({key:s}),
        success:function(result){
            $("#livesearch").html(result);
        }
    })
    // console.log()
}