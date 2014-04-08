// This section is for the Dinner .......
function checkTime()
{
var d= new Date().getHours();
if (d<5)
	{
	alert("The Rest Restaurant is Currently Closed\n All Orders will Be Processed When Normal Hours Resume");
	}
else if (d>=5 && d<11)
	{
	alert("We are Currently serving Breakfast\n Click on the Breakfast Menu to see what we have Available");
	}
else if (d>11 && d<15)
	{
	alert("We are Currently serving Lunch\n Click on the Lunch Menu to see what we have Available");
	}
else  
	{
	alert("We are Currently serving Dinner\n Click on the Dinner Menu to see what we have Available");
	}
}
function smOxtail()
{
var size;
var quan= prompt("How much Small Oxtail would like to order?");
	if (isNaN(quan))
	{
	size=alert(quan+" is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Small Oxtail = $"+quan*7);
	}
document.getElementById("Oxsm").innerHTML=size;
total(quan*7);
}
function medOxtail()
{
var size;
var quan= prompt("How much Medium Oxtail would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Oxtail = $"+quan*9);
	}
document.getElementById("Oxmed").innerHTML=size;
total(quan*9);
}
function larOxtail()
{
var size;
var quan= prompt("How much large Oxtail would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Oxtail = $"+quan*11);
	}
document.getElementById("Oxlar").innerHTML=size;
total(quan*11);
}
function smBar() 
{
var size;
var quan= prompt("How much Small Barbecue Chicken would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Small Barbecue = $"+quan*5);
	}
document.getElementById("Barsm").innerHTML=size;
total(quan*5);
}
function medBar()
{
var size;
var quan= prompt("How much Medium Barbecue Chicken would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Barbecue = $"+quan*7);
	}
document.getElementById("Barmed").innerHTML=size;
total(quan*7);
}
function larBar()
{
var size;
var quan= prompt("How much Large Barbecue Chicken would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Barbecue = $"+quan*9);
	}
document.getElementById("Barlar").innerHTML=size;
total(quan*9);
}
function smCurG() 
{
var size;
var quan= prompt("How much Small Curry Goat would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Small Curry Goat = $"+quan*5);
	}
document.getElementById("Cursm").innerHTML=size;
total(quan*5);
}
function medCurG()
{
var size;
var quan= prompt("How much Medium Curry Goat would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Curry Goat = $"+quan*7);
	}
document.getElementById("Curmed").innerHTML=size;
total(quan*7);
}
function larCurG()
{
var size;
var quan= prompt("How much Large Curry Goat would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Curry Goat = $"+quan*9);
	}
document.getElementById("Curlar").innerHTML=size;
total(quan*9)
}
function smStew() 
{
var size;
var quan= prompt("How much Small Stew Chicken would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Small Stew Chicken = $"+quan*5);
	}
document.getElementById("Stsm").innerHTML=size;
total(quan*5);
}
function medStew()
{
var size;
var quan= prompt("How much Medium Stew Chicken would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Stew Chicken = $"+quan*7);
	}
document.getElementById("Stmed").innerHTML=size;
total(quan*7);
}
function larStew()
{
var size;
var quan= prompt("How much Large Stew Chicken would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Stew Chicken = $"+quan*9);
	}
document.getElementById("Stlar").innerHTML=size;
total(quan*9)
}
var tot = 0;
var tax = 0;
function total(smOx, medOx, larOx, smBq, medBq, larBq, smCur, medCur, larCur, smSt, medSt, larSt)
{
taxp=0.02;
if (isNaN(smOx)) smOx= 0;
if (isNaN(medOx))medOx= 0;
if (isNaN(larOx))larOx= 0;
if (isNaN(smBq))smBq= 0;
if (isNaN(medBq))medBq= 0;
if (isNaN(larBq))larBq= 0;
if (isNaN(smCur))smCur= 0;
if (isNaN(medCur))medCur= 0;
if (isNaN(larCur))larCur= 0;
if (isNaN(smSt))smSt= 0;
if (isNaN(medSt))medSt= 0;
if (isNaN(larSt))larSt= 0;
tot=tot+(smOx*taxp+smOx)+(medOx*taxp+medOx)+(larOx*taxp+larOx)+
	(smBq*taxp+smBq)+(medBq*taxp+medBq)+(larBq*taxp+larBq)+
	(smCur*taxp+smCur)+(medCur*taxp+medCur)+(larCur*taxp+larCur)+
	(smSt*taxp+smSt)+(medSt*taxp+medSt)+(larSt*taxp+larSt);
tots=Math.round(tot*100)/100;
tax=tax+(smOx*taxp)+(medOx*taxp)+(larOx*taxp)+
	(smBq*taxp)+(medBq*taxp)+(larBq*taxp)+
	(smCur*taxp)+(medCur*taxp)+(larCur*taxp)+
	(smSt*taxp)+(medSt*taxp)+(larSt*taxp);
var taxes=Math.round(tax*100)/100;
document.getElementById("tax").innerHTML= "Tax = $"+taxes;
document.getElementById("totals").innerHTML= "Your Total = $"+ tots;
}

function validationForm()
{
// First Name validation
var x=document.forms["myForm"]["fname"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }
 // Last name Validation
var x=document.forms["myForm"]["Lname"].value;
if (x==null || x=="")
  {
  alert("Last name must be filled out");
  return false;
  }
 // address validation
 var x=document.forms["myForm"]["address"].value;
if (x==null || x=="")
  {
  alert("Address must be filled out");
  return false;
  }
 // State validation.
 
 var x=document.forms["myForm"]["state"].value;
if (x==null || x=="")
  {
  alert("State must be filled out");
  return false;
  }
 // City Validation
 var x=document.forms["myForm"]["city"].value;
if (x==null || x=="")
  {
  alert("City must be filled out");
  return false;
  }
 // Zip code Validation
 var x=document.forms["myForm"]["zip"].value;
 var pos=x.length;
 if (x==null ||isNaN(x) || pos<5)
	{
	alert("This is not a Valid Zip");
	return false;
	}
 
//email validation.
var x=document.forms["myForm"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address\n Please enter a Valid Email address");
  return false;
  }

// telephone validation..
var x=document.forms["myForm"]["tel"].value;
if ( x==null || x=="")
	{
	alert("Invalid Telephone Number\n Please Enter a Valid Telephone Number");
	return false;
	}
}

// this section is for the Breakfast..................

function smAckee()
{
var size;
var quan= prompt("How much Small Ackee&Salfish would like to order?");
	if (isNaN(quan))
	{
	size=alert(quan+" is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Ackee&Saltfish = $"+quan*8);
	}
document.getElementById("ASsm").innerHTML=size;
total(quan*8);
}
function medAckee()
{
var size;
var quan= prompt("How much Medium Oxtail would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Ackee&Saltfish = $"+quan*10);
	}
document.getElementById("ASmed").innerHTML=size;
total(quan*10);
}
function larAckee()
{
var size;
var quan= prompt("How much large Ackee&Saltfish would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Ackee&Saltfish = $"+quan*12);
	}
document.getElementById("ASlar").innerHTML=size;
total(quan*12);
}
function smMac() 
{
var size;
var quan= prompt("How much Small Mackerel would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Small Mackerel= $"+quan*5);
	}
document.getElementById("Macsm").innerHTML=size;
total(quan*5);
}
function medMac()
{
var size;
var quan= prompt("How much Medium Mackerel would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Mackerel = $"+quan*7);
	}
document.getElementById("Macmed").innerHTML=size;
total(quan*7);
}
function larMac()
{
var size;
var quan= prompt("How much Large Mackerel would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Mackerel = $"+quan*9);
	}
document.getElementById("Maclar").innerHTML=size;
total(quan*9);
}
function smCaSa() 
{
var size;
var quan= prompt("How much Small Callalo&Saltfish would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Small Callalo&Saltfish = $"+quan*5);
	}
document.getElementById("CaSasm").innerHTML=size;
total(quan*5);
}
function medCaSa()
{
var size;
var quan= prompt("How much Medium Callalo&Saltfish would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Callalo&Saltfish = $"+quan*7);
	}
document.getElementById("CaSamed").innerHTML=size;
total(quan*7);
}
function larCaSa()
{
var size;
var quan= prompt("How much Large Callalo&Saltfish would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Callalo&Saltfish = $"+quan*9);
	}
document.getElementById("CaSalar").innerHTML=size;
total(quan*9)
}
function smFfish() 
{
var size;
var quan= prompt("How much Small Fry Fish would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Small Fry Fish = $"+quan*5);
	}
document.getElementById("Ffishsm").innerHTML=size;
total(quan*5);
}
function medFfish()
{
var size;
var quan= prompt("How much Medium Fry Fish would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Medium Fry Fish = $"+quan*7);
	}
document.getElementById("Ffishmed").innerHTML=size;
total(quan*7);
}
function larFfish()
{
var size;
var quan= prompt("How much Large Fry Fish would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Large Fry Fish = $"+quan*9);
	}
document.getElementById("Ffishlar").innerHTML=size;
total(quan*9)
}
var tot = 0;
var tax = 0;
function total(smAck, medAck, larAck, smMac, medMac, larMac, smCaSa, medCaSa, larCaSa, smFfish, medFfish, larFfish)
{
taxp=0.02;
if (isNaN(smAck))smAck= 0;
if (isNaN(medAck))medAck= 0;
if (isNaN(larAck))larAck= 0;
if (isNaN(smMac))smMac= 0;
if (isNaN(medMac))medMac= 0;
if (isNaN(larMac))larMac= 0;
if (isNaN(smCaSa))smCaSa= 0;
if (isNaN(medCaSa))medCaSa= 0;
if (isNaN(larCaSa))larCaSa= 0;
if (isNaN(smFfish))smFfish= 0;
if (isNaN(medFfish))medFfish= 0;
if (isNaN(larFfish))larFfish= 0;
tot=tot+(smAck*taxp+smAck)+(medAck*taxp+medAck)+(larAck*taxp+larAck)+
	(smMac*taxp+smMac)+(medMac*taxp+medMac)+(larMac*taxp+larMac)+
	(smCaSa*taxp+smCaSa)+(medCaSa*taxp+medCaSa)+(larCaSa*taxp+larCaSa)+
	(smFfish*taxp+smFfish)+(medFfish*taxp+medFfish)+(larFfish*taxp+larFfish);
tots=Math.round(tot*100)/100;
tax=tax+(smAck*taxp)+(medAck*taxp)+(larAck*taxp)+
	(smMac*taxp)+(medMac*taxp)+(larMac*taxp)+
	(smCaSa*taxp)+(medCaSa*taxp)+(larCaSa*taxp)+
	(smFfish*taxp)+(medFfish*taxp)+(larFfish*taxp);
var taxes=Math.round(tax*100)/100;
document.getElementById("tax").innerHTML= "Tax = $"+taxes;
document.getElementById("totals").innerHTML= "Your Total = $"+ tots;
}
function BreakForm()
{
// First Name validation
var x=document.forms["Bform"]["fname"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }
 // Last name Validation
var x=document.forms["Bform"]["Lname"].value;
if (x==null || x=="")
  {
  alert("Last name must be filled out");
  return false;
  }
 // address validation
 var x=document.forms["Bform"]["address"].value;
if (x==null || x=="")
  {
  alert("Address must be filled out");
  return false;
  }
 // State validation.
 var x=document.forms["Bform"]["state"].value;
if (x==null || x=="")
  {
  alert("State must be filled out");
  return false;
  }
 // City Validation
 var x=document.forms["Bform"]["city"].value;
if (x==null || x=="")
  {
  alert("City must be filled out");
  return false;
  }
 // Zip code Validation
 var x=document.forms["Bform"]["zip"].value;
 var pos=x.length;
 if (x==null ||isNaN(x) || pos<5)
	{
	alert("This is not a Valid Zip");
	return false;
	}
 
//email validation.
var x=document.forms["Bform"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address\n Please enter a Valid Email address");
  return false;
  }

// telephone validation..
var x=document.forms["Bform"]["tel"].value;
 var pos=x.length;
 if (x==null ||isNaN(x) || pos<10)
	{
	alert("This is not a Valid Telephone");
	return false;
	}
}
// This is the Lunch section...................................
function Patty()
{
var size;
var quan= prompt("How much Patty and CocoBread would like to order?");
	if (isNaN(quan))
	{
	size=alert(quan+" is Not a Number");
	}
	else
	{
	size= (quan+" Patty and CocoBread = $"+quan*3);
	}
document.getElementById("Patty").innerHTML=size;
total(quan*3)
}

function Meat()
{
var size;
var quan= prompt("How much MeatLoaf would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" MeatLoaf = $"+quan*2.5);
	}
document.getElementById("MeatLoaf").innerHTML=size;
total(quan*2.5);
}
function VegLoaf()
{
var size;
var quan= prompt("How much Vegetable Loaf would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Vegetable Loaf = $"+quan*2);
	}
document.getElementById("VegLoaf").innerHTML=size;
total(quan*2);
}
function SugBun() 
{
var size;
var quan= prompt("How much Sugar Bun would like to order?");
	if (isNaN(quan))
	{
	size=alert("This is Not a Number");
	return false;
	}
	else
	{
	size= (quan+" Sugar Bun= $"+quan*3);
	}
document.getElementById("SugBun").innerHTML=size;
total(quan*3);
}
var tot=0;
var tax=0;
function total(Patty, Meat, vegLoaf, SugBun)
{
var taxp=0.02;
if (isNaN(Patty))Patty= 0;
if (isNaN(Meat))Meat= 0;
if (isNaN(vegLoaf))vegLoaf= 0;
if (isNaN(SugBun))SugBun= 0;
tot=tot+(Patty*taxp+Patty)+(Meat*taxp+Meat)+(vegLoaf*taxp+vegLoaf)+
	(SugBun*taxp+SugBun);
var tots=Math.round(tot*100)/100;
tax=tax+(Patty*taxp)+(Meat*taxp)+(vegLoaf*taxp)+
	(SugBun*taxp);
var taxes=Math.round(tax*100)/100;
document.getElementById("tax").innerHTML= "Tax = $"+taxes;
document.getElementById("totals").innerHTML= "Your Total = $"+ tots;
}
// Validation for the Lunch...........
function LunForm()
{
// First Name validation
var x=document.forms["Lform"]["fname"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }
 // Last name Validation
var x=document.forms["Lform"]["Lname"].value;
if (x==null || x=="")
  {
  alert("Last name must be filled out");
  return false;
  }
 // address validation
 var x=document.forms["Lform"]["address"].value;
if (x==null || x=="")
  {
  alert("Address must be filled out");
  return false;
  }
 // State validation.
 var x=document.forms["Lform"]["state"].value;
if (x==null || x=="")
  {
  alert("State must be filled out");
  return false;
  }
 // City Validation
 var x=document.forms["Lform"]["city"].value;
if (x==null || x=="")
  {
  alert("City must be filled out");
  return false;
  }
 // Zip code Validation
 var x=document.forms["Lform"]["zip"].value;
 var pos=x.length;
 if (x==null ||isNaN(x) || pos<5)
	{
	alert("This is not a Valid Zip");
	return false;
	}
 
//email validation.
var x=document.forms["Lform"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address\n Please enter a Valid Email address");
  return false;
  }

// telephone validation..
var x=document.forms["Lform"]["tel"].value;
 var pos=x.length;
 if (x==null ||isNaN(x) || pos<10)
	{
	alert("This is not a Valid Telephone");
	return false;
	}
}
