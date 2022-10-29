function validate()
{
	var firstn=document.getElementById("fname").value;
	var lastn=document.getElementById("lname").value;
	var dob=document.getElementById("dob").value;
	var gender_elements=document.getElementsByName("gender");
	for(i=0;i<gender_elements.length;i++)
	{
		if(gender_elements[i].checked)
			gender=gender_elements[i].value;
	}
	var phone=document.getElementById("phone").value;
	var streetadd=document.getElementById("saddress").value;
	var city=document.getElementById("city").value;
	var state=document.getElementById("state").value;
	var zip=document.getElementById("pincode").value;
	var email=document.getElementById("email").value;
	var pwd=document.getElementById("pwd").value;
	var confirm_password=document.getElementById("confirm_password").value;
	if(firstn && lastn && dob && gender && phone && streetadd && city && state && zip && email && pwd && confirm_password)
	{
		if( phoneNumberValidate(phone) && mailValidate(email) && passwordValidate(pwd) && confirmPasswordValidate(pwd,confirm_password) )
		{
			if(confirm("Please Confirm Your Details:\nName: "+firstn+" "+lastn+"\nDate of Birth: "+dob+"\nGender: "+gender+"\nContact Number: "+phone+"\nAddress: "+streetadd+", "+city+", "+state+", "+zip+"\nMail ID: "+email+"\nPassword: "+pwd))
			{
				alert("Registered successfully.....");
				clearall();
			}
		}
	}
	else
	{
		alert("Enter all fields");
	}
}

function phoneNumberValidate(phone)
{
	if(phone.length!=10)
	{
		alert("Enter 10 digit phone number!");
		return false;
	}
	return true;
}

function mailValidate(mail)
{
	if(!mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
	{
		alert("Invalid mail ID");
		return false;
	}
	return true;
}

function passwordValidate(pwd)
{
	if(pwd.length<=8)
	{
		alert("Password length must be greater than 8!");
		return false;
	}
	if(pwd.length>16)
	{
		alert("Password length must be less than 15!");
		return false;
	}
	if(pwd.search(/[a-z]/)<0)
	{
		alert("Password must have atleast one lowercase letter");
		return false;
	}
	if(pwd.search(/[A-Z]/)<0)
	{
		alert("Password must have atleast one uppercase letter");
		return false;
	}
	if(pwd.search(/[0-9]/)<0)
	{
		alert("Password must have atleast one digit");
		return false;
	}
	return true;
}

function confirmPasswordValidate(pwd,confirm_password)
{
	if(pwd!=confirm_password)
	{
		alert("Password and Confirm Password are not same");
		return false;
	}
	return true;
}


function clearall()
{
	document.getElementById("fname").value='';
	document.getElementById("lname").value='';
	document.getElementById("dob").value='';
	var gender_elements=document.getElementsByName("gender");
	for(i=0;i<gender_elements.length;i++)
		gender_elements[i].checked=false;
	document.getElementById("phone").value='';
	document.getElementById("saddress").value='';
	document.getElementById("city").value='';
	document.getElementById("state").value='';
	document.getElementById("pincode").value='';
	document.getElementById("email").value='';
	document.getElementById("pwd").value='';
	document.getElementById("confirm_password").value='';
}