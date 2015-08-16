/**
 * Created by misra on 010, 10.08.15.
 */
function loadCustomer(){
    /*document.getElementById("testA").innerHTML = '';
    var id = document.getElementById("customerId").value;
    $.ajax({
        url : 'http://localhost:8380/timetracker-web/track/status',
        dataType : 'jsonp',
        async : false,
        type : 'get',
        data : {
            callback: 'callback_load_customer',
            trackingId: id
        },
        jsonp: false,
        jsonpCallback:'callback_load_customer',
        success : function (data) {
            var rows = data.trackers[0];
            var arr = Object.keys(rows).map(function(k) { return rows[k] });
            arr.unshift(1);
            console.log(arr);
            gridd = webix.ui({
                container:"testA",
                view:"datatable",
                columns:[
                    { id:"data1",	header:"Message",  		width:100},
                    { id:"data2",	header:"User Name",     width:120},
                    { id:"data3",	header:"Time Elapsed",  width:140},
                    { id:"data4",	header:"Tracking ID",   width:325},
                    { id:"data5",	header:"Start Time",    width:100},
                    { id:"data6",	header:"Status", 	    width:100}
                ],
                autoheight:true,
                autowidth:true,
                datatype:"jsarray",
                data:[
                    arr
                ]
            });
        },
        error : function(xhr, status, e){
            console.log(e);
        }
    });*/
    alert("not implemented yet");
}

function loadTracker(){
    document.getElementById("testA").innerHTML = '';
    var id = document.getElementById("trackingId").value;
    $.ajax({
        url : 'http://localhost:8380/timetracker-web/track/status',
        dataType : 'jsonp',
        async : false,
        type : 'get',
        data : {
            callback: 'callback_load_tracker',
            trackingId: id
        },
        jsonp: false,
        jsonpCallback:'callback_load_tracker',
        success : function (data) {
            var rows = data.trackers[0];
            var arr = Object.keys(rows).map(function(k) { return rows[k] });
            arr.unshift(1);
            console.log(arr);
            gridd = webix.ui({
                container:"testA",
                view:"datatable",
                columns:[
                    { id:"data1",	header:"Message",  		width:100},
                    { id:"data2",	header:"User Name",     width:120},
                    { id:"data3",	header:"Time Elapsed",  width:140},
                    { id:"data4",	header:"Tracking ID",   width:325},
                    { id:"data5",	header:"Start Time",    width:100},
                    { id:"data6",	header:"Status", 	    width:100}
                ],
                autoheight:true,
                autowidth:true,
                datatype:"jsarray",
                data:[
                    arr
                ]
            });
        },
        error : function(xhr, status, e){
            console.log(e);
        }
    });
}