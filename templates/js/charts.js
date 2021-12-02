function preview_chart(type){

        if(type === 'two'){
            type = 'bar'

            var data = {
                labels: ['Gujarat', 'MP', 'Delhi', 'Chennai'],
    datasets: [
        {
            label: "Confirm",
            backgroundColor: "Red",
            data: [30,70,40,20]
        },

        {
            label: "Recovered",
            backgroundColor: "green",
            data: [30,50,60,40]
        }
    ]
};

        }
        else {

            if (type === 'single') {
                type = 'bar';
            }
            var data = {
                labels: ['Gujarat', 'MP', 'Delhi', 'Chennai'],
                datasets: [
                    {
                        data: [50, 55, 60, 33],
                        backgroundColor: [
                            "#4b77a9",
                            "#5f255f",
                            "#d21243",
                            "#B27200"
                        ],
                        borderColor: "#fff"
                    }
                ]
               };
        }

    demo_chart(type,data)
}


function demo_chart(type,data){

           document.getElementById("demoChartContainer").innerHTML = '&nbsp;';
            document.getElementById("demoChartContainer").innerHTML = '<canvas id="demoChart" width="200" height="200"></canvas>';
            document.getElementById("demoChart").style.display ="block";

                let ctx = document.getElementById("demoChart").getContext("2d");

                let chart = new Chart(ctx, {
                    type: type,
                    data: data,
                    options: {
                        title: {
                            text: 'City(X- column) Vs Confirmed Cases (Y- column)',
                            display: true,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }

                        },
                        maintainAspectRatio: false,
                        responsive: true,
                    }
                })
}

function preview(event){
        event.preventDefault();
            var data = new FormData($('form').get(0));
    $body = $("body");

    $.ajax({
        url: '/analytics/preview',
        type: 'POST',
        data: data,
        cache: false,
        beforeSend:function() { $body.addClass("loading"); },
        processData: false,
        contentType: false,
        success: function(data) {
            const popup = window.open();

            popup.document.body.innerHTML = data.html;

        }
        ,
            complete:function () {
                $body.removeClass("loading");
            }
        ,
            error:function () {
                alert("There is some problem occurred while processing your file. Kindly check your.");
            }

    });
    return false;
    }




function upload(event) {
    event.preventDefault();
    var data = new FormData($('form').get(0));
    $body = $("body");

    $.ajax({
        url: '/analytics/columns',
        type: 'POST',
        data: data,
        cache: false,
        beforeSend:function() { $body.addClass("loading"); },
        processData: false,
        contentType: false,
        success: function(data) {

                alert(data.msg);

                if (data.msg !== 'File Uploaded') {
                    return
                }
                document.getElementById('preview').style.display = "block";
                document.getElementById("chart_selector").style.display = "block";
                for (i = 0; i < data.data.length; ++i) {
                    $('#columns').append(`<option value="${data.data[i]}">
                                           ${data.data[i]}
                                      </option>`)
                    $('#columns2').append(`<option value="${data.data[i]}">
                                           ${data.data[i]}
                                      </option>`)
                    $('#columns3').append(`<option value="${data.data[i]}">
                       ${data.data[i]}
                  </option>`)

                }
            }
        ,
            complete:function () {
                $body.removeClass("loading");
            }
        ,
            error:function () {
                alert("There is some problem occurred while processing your file. Kindly check your.");
            }

    });
    return false;
    }

function chart_choice(){
    var value = document.getElementById("chart_selector").value;
   if(value === 'pie' || value==='line'){
       document.getElementById("selector").style.display ="None";
       document.getElementById("two-variable-btn").style.display ="None";
       document.getElementById("columns").style.display ="block";
       document.getElementById("columns2").style.display ="block";
       document.getElementById("columns3").style.display ="None";
       document.getElementById("single-variable-btn").style.display ="block";
       preview_chart(value)

   }
   if(value === 'bar'){
       document.getElementById("single-variable-btn").style.display ="None";
       document.getElementById("selector").style.display ="block";
       document.getElementById("columns").style.display ="None";
       document.getElementById("columns2").style.display ="None";
       document.getElementById("demoChart").style.display ="None";
   }
}

function choice() {
   var value = document.getElementById("selector").value;
   if(value === 'single'){
       document.getElementById("single-variable-btn").style.display ="block";
       document.getElementById("two-variable-btn").style.display ="None";
       document.getElementById("columns").style.display ="block";
       document.getElementById("columns2").style.display ="block";
       document.getElementById("columns3").style.display ="None";
       preview_chart(value)


   }
   if(value === 'two'){
       document.getElementById("single-variable-btn").style.display ="None";
       document.getElementById("two-variable-btn").style.display ="block";
       document.getElementById("columns").style.display ="block";
       document.getElementById("columns2").style.display ="block";
       document.getElementById("columns3").style.display ="block";
       preview_chart(value)


   }
};


function visual(event) {
    event.preventDefault();
    var data = new FormData($('form').get(0));

    $.ajax({
        url: '/analytics/visualize',
        type: 'POST',
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        beforeSend:function() { $body.addClass("loading"); },

        success: function(data) {
            document.getElementById("chartContainer").innerHTML = '&nbsp;';
            document.getElementById("chartContainer").innerHTML = '<canvas id="chart" width="400" height="400"></canvas>';
            document.getElementById("chart").style.display ="block";
            var type = document.getElementById("chart_selector").value
            let ctx = document.getElementById("chart").getContext("2d");

            let chart = new Chart(ctx, {
              type: type,
              data: {
                 labels: data.data.labels,
                 datasets: [
                    {
                      label: data.data.name,
                      backgroundColor: data.data.backgroundColor,
                        borderColor: "#417690",
                      data: data.data.data
                    }
                 ]
              },
              options: {
                 title: {
                    text: data.title,
                    display: true,
                     scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true
                            }
                        }]
                    }

                 },
                  maintainAspectRatio: false,
                  responsive: true,
              }
            });

            },
                    complete:function(){$body.removeClass("loading");   },
                    error:function (){
            alert("There is some problem occurred while processing your file. Kindly check your.");
        }

    });
    return false;
    }


function two_variables(event) {
    event.preventDefault();
    var data = new FormData($('form').get(0));
    $body = $("body");

    $.ajax({
        url: '/analytics/two_variables',
        type: 'POST',
        data: data,
        cache: false,
        processData: false,
        contentType: false,
        beforeSend:function() { $body.addClass("loading"); },

        success: function(data) {
            document.getElementById("chartContainer").innerHTML = '&nbsp;';
            document.getElementById("chartContainer").innerHTML = '<canvas id="chart" width="800" height="500"></canvas>';
            document.getElementById("chart").style.display ="block";
            let ctx = document.getElementById("chart").getContext("2d");
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, 700, 500);

            let chart = new Chart(ctx, {
              type: "bar",
              data: {
                 labels: data.data.labels,
                 datasets: data.data.dataset,
              },
              options: {
                 title: {
                     text: data.title,
                     display: true,
                 },
                     maintainAspectRatio: false,
                     responsive: true,
                  scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true
                            }
                        }]
                    }
                 },

            });
            },
            complete:function(){$body.removeClass("loading");   },
                    error:function (){
            alert("There is some problem occurred while processing your file. Kindly check your.");
        }


    });
    return false;
    }


/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */

