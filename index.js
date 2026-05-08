document.getElementById("calculate-btn").onclick=function()
{
    var yourName=document.getElementById("your-name").value;
    var crushName=document.getElementById("crush-name").value;
    var LoveScore=Math.floor(Math.random()*100)+1;
    document.getElementById("result").innerHTML=yourName+"❤️"+crushName+"="+LoveScore+"%";
    if(LoveScore>=80)
    {
        document.getElementById("message").innerHTML="Perfect match made in heaven! 💍";
    }
    else if(LoveScore>=60)
    {
        document.getElementById("message").innerHTML="There's a spark! Go for it! 🔥";
    }
    else if(LoveScore>=40)
    {
        document.getElementById("message").innerHTML="It's complicated... 😅";
    }
    else
    {
        document.getElementById("message").innerHTML="Find someone else😜";
    }
}