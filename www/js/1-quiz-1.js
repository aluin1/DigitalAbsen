

 function showq1(){
  document.getElementById('divq2').style.display ='none';
}
function showq2(){
  document.getElementById('divq2').style.display = 'block';
}
  
myApp.onPageInit("1-quiz-1", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 	
 var strNopek = localStorage.getItem("LogonNip");

 $.ajax({
     url: ""+useWeb+"/Attendance/datakuis_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
		
		var datatxt1= []; 
		var datatxt2= []; 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			 
			 var KeluhanKesehatanHariSebelumnya= dttm[i].KeluhanKesehatanHariSebelumnya;
			 if (KeluhanKesehatanHariSebelumnya=='Ya'){
				 var rtxt1='checked="checked"';
				 var rtxt2='';
				 var showtxt2='';
	
					}else{
				 var rtxt1=' ';
				 var rtxt2='checked="checked"';
				 var showtxt2='class="hide"';
	
				}
			 var DemamBatukLainnya= dttm[i].DemamBatukLainnya; 
			 if (DemamBatukLainnya=='Ya'){
				 var rtxt21='checked="checked"';
				 var rtxt22='';
	
					}else{
				 var rtxt21=' ';
				 var rtxt22='checked="checked"';
	
				}
		  var txt1='<ul>  <li>'+
					'<label class="label-checkbox item-content" onclick="showq2();">'+
					'<input type="radio" name="txt1"   value="Ya" '+rtxt1+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content" onclick="showq1();">'+
					'<input type="radio" name="txt1"    value="Tidak"  '+rtxt2+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>';
             
			 
		var txt2='<div id="divq2" '+showtxt2+' >'+
					'<table  width="100%">'+
					'<tr><td style="padding:10px!important" colspan="3">Apakah Demam/Batuk/Flu/Sesak/Penciuman Bau Menurun ?'+
					'<ul> <li>'+
					'<label class="label-checkbox item-content"  >'+
					'<input type="radio" name="txt2" value="Ya"  '+rtxt21+'  >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content"  >'+
					'<input type="radio" name="txt2" value="Tidak" '+rtxt22+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>'+
					'</td></tr> '+
					'</table>'+
					'</div>';
					datatxt1.push(txt1);
					datatxt2.push(txt2);
					
					
					
					}
		   document.getElementById("datatxt1").innerHTML = datatxt1.join(" ");
		   document.getElementById("datatxt2").innerHTML = datatxt2.join(" ");
	
 myApp.hidePreloader();
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 

				   
$$(".btn1").on("click", function(){
	
	
var quiz1 = document.getElementsByName('txt1');
var quiz2 = document.getElementsByName('txt2');

for (var i = 0, length = quiz1.length; i < length; i++) {
    if (quiz1[i].checked) {
        // do whatever you want with the checked radio
        console.log(quiz1[i].value);
		var valquiz1=quiz1[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

for (var i = 0, length = quiz2.length; i < length; i++) {
    if (quiz2[i].checked) {
        // do whatever you want with the checked radio
        console.log(quiz2[i].value);
		var valquiz2=quiz2[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		if (valquiz1  == 'Ya' ) {
			
			
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "keluhankesehatan" : "'+valquiz1+'",  "gejala" : "'+valquiz2+'",  "statuskuis" : "0"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 
	 
	 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
	
		mainView.router.loadPage('1-quiz-2.html'); 
		myApp.hidePreloader();
		 });

}else {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
 setTimeout(function () {
	 
	 		$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "keluhankesehatan" : "'+valquiz1+'",  "gejala" : "",  "statuskuis" : "0"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 
	 
	 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
	
	
	
		mainView.router.loadPage('1-quiz-2.html'); 
		myApp.hidePreloader();
		 });
 
	 myApp.hidePreloader();

}  
		myApp.hidePreloader();
		 });
		 
		 

		 });
		 
		  
		  
   
 });
});  