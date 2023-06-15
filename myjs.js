function formvalidation(){
    var name=document.myform.mark.value;

    if(name==null || name==""){
        alert("Enter username first");
        return false
    }
    else if(name=="mark12"){
        return false
    }
    var name=document.myform.leano.value;

    if(name==null || name==""){
        alert("Enter password first");
        return false
    }
    else if(name=="leano"){
        return true
    }
    else alert("Invalid Username and Password");{
        return false
    }
}