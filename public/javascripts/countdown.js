var current="Swaptini is hapenning now!"
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countdown(yr,m,d,h,mi){
	theyear=yr;
	themonth=m;
	theday=d
	thehour=h;
	theminute=mi;
	se=0;
	var today=new Date()
	var todayy=today.getYear()

	if (todayy < 1000)
		todayy+=1900
		var todaym=today.getMonth()
		var todayd=today.getDate()
		var todayh=today.getHours()
		var todaymin=today.getMinutes()
		var todaysec=today.getSeconds()
		var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
		futurestring= montharray[m-1]+" "+(d+1)+", "+yr+" "+h+":"+mi+":"+se
		
		dd=Date.parse(futurestring)-Date.parse(todaystring)
		dday=Math.floor(dd/(60*60*1000*24)*1)
		dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
		dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
		dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
		
		if(dday==0&&dhour==0&&dmin==0&&dsec==1){
			document.forms.count.count2.value=current
			return
		}
		else

			if(dday < 10){
				dday = dday + '';
				dday = 0 + dday;
				document.getElementById('days').innerHTML = dday;
			}else{
				document.getElementById('days').innerHTML = dday;
			}
			
			if (dhour < 10){
				dhour = dhour + '';
				dhour = 0 + dhour;
				document.getElementById('hours').innerHTML = dhour;
			}else{
				document.getElementById('hours').innerHTML = dhour;
			}
			
			
			if (dmin < 10){
				dmin = dmin + '';
				dmin = 0 + dmin;
				document.getElementById('minutes').innerHTML = dmin;
			}else{
				document.getElementById('minutes').innerHTML = dmin;
			}
			
			// seconds /
			if (dsec < 10){
				dsec = dsec + '';
				dsec = 0 + dsec;
				document.getElementById('seconds').innerHTML = dsec;
			}else{
				document.getElementById('seconds').innerHTML = dsec;
			}
			setTimeout("countdown(theyear,themonth,theday, thehour, theminute)",1000)
		}
//enter the count down date using the format year/month/day