<script>
            var formm= document.getElementById('form1')
        
        formm.addEventListener('submit', function(e){
            e.preventDefault()};
        
            var file= document.getElementById('file')
            var fname= document.getElementById('fname')
            var lname= document.getElementById('lname')
            var mstatus= document.getElementById('mstatus')
            var country= document.getElementById('country')
            var address= document.getElementById('address')
            var mstatus= document.getElementById('mstatus')
            var city= document.getElementById('city')
            var userinput = document.getElementById("dob").value;  
            var dob = new Date(userinput);  
            
            

            if(file.value =="")
            document.getElementById('fileerror').innerHTML="Please Upload picture";
            document.getElementById('file').style.borderColor = "red";
            
            if(fname.value =="")
            document.getElementById('fnameerror').innerHTML="Please Enter First Name";
            document.getElementById('fname').style.borderColor = "red";
            
            if(lname.value =="")
            document.getElementById('lnameerror').innerHTML="Please Enter Last Name";
            document.getElementById('lname').style.borderColor = "red";
            

            if(country.value =="")
            document.getElementById('countryerror').innerHTML="Please Enter Country Name";
            document.getElementById('country').style.borderColor = "red";
            

            if(address.value =="")
            document.getElementById('adderror').innerHTML="Please Enter Your Address";
            document.getElementById('address').style.borderColor = "red";
            

            if(address.value =="")
            document.getElementById('adderror').innerHTML="Please Enter Your Address";
            document.getElementById('address').style.borderColor = "red";
            

            if(city.value =="")
            document.getElementById('cityerror').innerHTML="Please Select Marital Status";
            document.getElementById('city').style.borderColor = "red";
            
            
            var month_diff = Date.now() - dob.getTime(); 
            var age_dt = new Date(month_diff);
            var year = age_dt.getUTCFullYear(); 
            var age = Math.abs(year - 1970);
            return document.getElementById("showdob").innerHTML =    
             "Your Current Age is: " + age + " years. ";  
        )

       </script>