 
myApp.onPageInit("1-quiz-6", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	

 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 
var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");	 



var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen6").innerHTML = formatted; 
 
 $.ajax({
     url: ""+useWeb+"/Attendance/datakuis2_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   
		
		var datatxt6= []; 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			 
			
			 var KeluhanKesehatanPekerja= dttm[i].KeluhanKesehatanPekerja;
			 var Id= dttm[i].Id;
			 
			 if (KeluhanKesehatanPekerja=='Ya'){
				 var rtxt6='checked="checked"';
				 var rtxt62=''; 
	
					}else{
				 var rtxt6=' ';
				 var rtxt62='checked="checked"'; 
	
				}
				
		  var txt6='<ul>'+
					'<li>'+
					'<label class="label-checkbox item-content"  ">'+
					'<input type="radio" name="txt6"   value="Ya" '+rtxt6+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content"  ">'+
					'<input type="radio" name="txt6"    value="Tidak" '+rtxt62+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>';
             
			 
			 
					datatxt6.push(txt6);
					
					}
		   document.getElementById("datatxt6").innerHTML = datatxt6.join(" ");
		   
		myApp.hidePreloader();

		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 



$$(".btn6").on("click", function(){
	
	
var quiz6 = document.getElementsByName('txt6');  

for (var i = 0, length = quiz6.length; i < length; i++) {
    if (quiz6[i].checked) {
        // do whatever you want with the checked radio
        console.log(quiz6[i].value);
		var valquiz6=quiz6[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
 
	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		if (valquiz6  == 'Ya' ) {
			 
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		
 $.ajax({
     url: ""+useWeb+"/Attendance/add_kuis6",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "KeluhanKesehatanPekerja" : "'+valquiz6+'"}' ,
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
	
	
		mainView.router.loadPage('1-quiz-7.html'); 
		myApp.hidePreloader();
		 });
	 myApp.hidePreloader();

}else {
	 
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		
 $.ajax({
     url: ""+useWeb+"/Attendance/add_kuis6",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "KeluhanKesehatanPekerja" : "'+valquiz6+'"}' ,
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
		mainView.router.loadPage('1-quiz-8.html'); 
		myApp.hidePreloader();
		 });
	 myApp.hidePreloader();
			 

}  
		myApp.hidePreloader();
		 });
		 
		 

		 });

		 
   
 myApp.hidePreloader();
});  
});  