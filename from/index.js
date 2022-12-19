var sub_mit=document.getElementById("form-sub")


sub_mit.addEventListener('submit',(e)=>{
    e.preventDefault()
    var first_name=document.querySelector('[placeholder="First name"]').value
    var last_name=document.querySelector('[placeholder="Last name"]').value
    var address=document.querySelector('[placeholder="Address"]').value
     var pincode=document.querySelector('[placeholder="Pincode"]').value 
     var gender=document.querySelector('[id="inputGender"]').value
     var food=document.querySelector('[ id="inputfood" ]') .value 
     var country=document.querySelector('[placeholder="Country"]') .value
     var state=document.querySelector('[ id="inputState" ]').value
    var datas=[first_name,last_name,address,pincode,gender,food,country,state]
    var creating_tr=document.createElement('tr')
    for( i=0;i<8;i++){
        var creating_td=document.createElement('td')
        creating_td.innerHTML=datas[i]
        creating_tr.append(creating_td)
        document.querySelector('tbody').append(creating_tr)
      }
    
    
})