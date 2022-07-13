$(document).ready(function(){
    const URL = "http://10.0.19.207:3000/api/";
    var div=$('#listTodo').html();
    $.ajax({
        url: URL+"getAllTodo",
        type:"GET",
        dataType:"json",
        success:function(data,status,jqXHR){
           for(let i=0;i<data.data.length;i++){
          
            if(data.data[i].activates){
                $("ul").append(`<li class="text-danger" value=${data.data[i]._id}>${data.data[i].title} Deadline: ${data.data[i].times}<input class="activates" type="checkbox" value="false" checked><button type="button" class="btn btn-success float-right" >Edit</button>
                <button type="button" id=btnDelete class="btndelete btn btn-danger float-right">Delete</button></li>`);
                $("li").addClass("list-group-item");
                $("li").addClass("list-group-item-primary");
               
            }
            else{
                $("ul").append(`<li value=${data.data[i]._id} >${data.data[i].title} Deadline: ${data.data[i].times}<input class="activates" type="checkbox" value="true"><button type="button" class="btn btn-success float-right" >Edit</button>
                <button type="button" id=btnDelete class="btndelete btn btn-danger float-right">Delete</button></li>`);
                $("li").addClass("list-group-item");
                $("li").addClass("list-group-item-primary");
                
            }
           }
        },
        error: function(jqXHR,status){
        }
    });   
    $(document).on("click",".btn-success",function(){
        $(".popup, .popup-content").addClass("active");
    })
     $(document).on("click",".activates",function(){
       const checked = $(this).attr("value");
       console.log(checked);
       const idTodo = $(this).closest('li').attr("value");
       console.log(idTodo);
       $.ajax({
        url: URL+"updateActivatesById/"+idTodo,
        type: "PUT",
        crossDomain: true,
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded', 
        xhrFields: { withCredentials: true }, 
        data: {
            activates : checked,
        },
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        success: function (data, status, jqXHR) {
             
            location.reload();
        },
        error: function (jqXHR, status) {
            console.log(jqXHR);
            alert('fail' + status.code);
        }
     });
        
     })
     $(document).on("click",".btndelete",function(){
        const id = $(this).closest('li').attr("value");
        console.log(id);
        $.ajax({
            url: URL+"deleteById/"+id,
            type: "DELETE",
            crossDomain: true,
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded', 
            xhrFields: { withCredentials: true }, 
            data: {
                id : id,
            },
            headers: {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            },
            success: function (data, status, jqXHR) {
                
             location.reload();
            },
            error: function (jqXHR, status) {
                console.log(jqXHR);
                alert('fail' + status.code);
            }
         });

     })
    $("#insertTodo").click(function(){
    const title = $("#title").val();
    const times = $("#datepicker").val();
 
    $.ajax({
        url: URL+"todo",
        type: "POST",
        crossDomain: true,
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded', 
        xhrFields: { withCredentials: true }, 
        data: {
            title:title,
            times: times
        },
        headers: {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        },
        success: function (data, status, jqXHR) {
            location.reload();
        },
        error: function (jqXHR, status) {   
            console.log(jqXHR);
            alert('fail' + status.code);
        }
     });
    });


});
 