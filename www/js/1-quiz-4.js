 
myApp.onPageInit("1-quiz-4", function(page){
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
document.getElementById("date-absen4").innerHTML = formatted; 
 
$.ajax({
     url: ""+useWeb+"/Attendance/datakuis2_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
		 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   
			 
			 
			 if (dttm[i].HariKeBerapaIsoman=='' || dttm[i].HariKeBerapaIsoman==null){
				 var HariKeBerapaIsoman= '';
			 }else{
				 var HariKeBerapaIsoman= dttm[i].HariKeBerapaIsoman;
			 }
			 
			  if (dttm[i].DimanaIsoman=='' || dttm[i].DimanaIsoman==null){
				 var DimanaIsoman= '';
			 }else{
				 var DimanaIsoman= dttm[i].DimanaIsoman;
			 }
			 
			  if (dttm[i].SuhuTubuh=='' || dttm[i].SuhuTubuh==null){
				 var SuhuTubuh= '';
			 }else{
				 var SuhuTubuh= dttm[i].SuhuTubuh;
			 }
			 
			  if (dttm[i].KeluhanPekerja=='' || dttm[i].KeluhanPekerja==null){
				 var KeluhanPekerja= '';
			 }else{
				 var KeluhanPekerja= dttm[i].KeluhanPekerja;
			 }
			 
			  if (dttm[i].ObatYangDiminum=='' || dttm[i].ObatYangDiminum==null){
				 var ObatYangDiminum= '';
			 }else{
				 var ObatYangDiminum= dttm[i].ObatYangDiminum;
			 }
			 
			  if (dttm[i].KendalaIsoman=='' || dttm[i].KendalaIsoman==null){
				 var KendalaIsoman= '';
			 }else{
				 var KendalaIsoman= dttm[i].KendalaIsoman;
			 }
			 
					
					} 
		   
		   
		  document.getElementById("hariisoman").value = HariKeBerapaIsoman; 
		  document.getElementById("tempatisoman").value = DimanaIsoman; 
		  document.getElementById("kendala").value = KendalaIsoman; 
		  document.getElementById("suhutubuh").value = SuhuTubuh; 
		  document.getElementById("txtKeluhan").value = KeluhanPekerja.replace(/<br[^>]*>/g, "\n"); 
		  document.getElementById("txtObat").value = ObatYangDiminum.replace(/<br[^>]*>/g, "\n"); 
	
		   
		myApp.hidePreloader();
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 


$$(".btn3").on("click", function(){
	
var ehariisoman= document.getElementById("hariisoman");
var valhariisoman = ehariisoman.value;
console.log(valhariisoman);

var etempatsoman= document.getElementById("tempatisoman");
var valtempatsoman = etempatsoman.value;
console.log(valtempatsoman);

var esuhutubuh= document.getElementById("suhutubuh");
var valsuhutubuh = esuhutubuh.value;
console.log(valsuhutubuh);

var ekendala= document.getElementById("kendala");
var valkendala = ekendala.value;
console.log(valkendala);


var strKeluhan = $$(".txtKeluhan").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
var strObat = $$(".txtObat").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
			
			if (valhariisoman==''){
				
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Pilih hari ke berapa Isolasi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			else if (valtempatsoman==''){
				
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Pilih tempat Isolasi Mandiri</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			else if (valkendala==''){
				
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Pilih Kendala Isolasi Mandiri</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			else if (valsuhutubuh==''){
				
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Pilih Suhu Tubuh</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			else if (strKeluhan==''){
				
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Jelaskan Kondisi Kesehatan</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			else if (strObat==''){
				
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Jelaskan Obat yang diminum</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			 
			
			else{
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
			$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis4",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "HariKeBerapaIsoman" : "'+valhariisoman+'",   "DimanaIsoman" : "'+valtempatsoman+'",   "SuhuTubuh" : "'+valsuhutubuh+'",   "KeluhanPekerja" : "'+strKeluhan+'",   "ObatYangDiminum" : "'+strObat+'",   "KendalaIsoman" : "'+valkendala+'"}' ,
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
	
	
	
		mainView.router.loadPage('1-quiz-5.html'); 
		myApp.hidePreloader();
		 });
		 }

  
		myApp.hidePreloader();
		 });
		 
		 

		 });

		 
   
 myApp.hidePreloader();
}); 
});  