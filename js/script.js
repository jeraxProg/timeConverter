let input = document.querySelector("#input");
let result = document.querySelector("#result");
let inputType = document.querySelector("#inputType");
let resultType = document.querySelector("#resultType");
let option__from, option__to;

//listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

//initialization value
// option__from = inputType.value;
// option__to = resultType.value;

function myResult() {

    option__from = inputType.value;
    option__to = resultType.value;

	

    if(option__from === "Second" && option__to === "Millisecond"){
        result.value = input.value * 1000;

    }else if (option__from === "Second" && option__to === "Minute"){
        result.value = input.value / 60;
		
	}else if (option__from === "Second" && option__to === "Hour"){
        result.value = input.value / 3600;

	}else if (option__from === "Second" && option__to === "Day"){
        result.value = input.value / 86400;

	}else if (option__from === "Second" && option__to === "Week"){
        result.value = input.value / 604800;

	}else if (option__from === "Second" && option__to === "Month"){
        result.value = input.value / 2629746;
	
	}else if (option__from === "Second" && option__to === "Year"){
        result.value = input.value / 31556952;
	
    }else if (option__from === "Second" && option__to === "Second"){
        result.value = input.value;
    }

    if(option__from === "Millisecond" && option__to === "Second"){
        result.value = input.value / 1000;

    }else if (option__from === "Millisecond" && option__to === "Minute"){
        result.value = input.value / 60000;
		
	}else if (option__from === "Millisecond" && option__to === "Hour"){
        result.value = input.value / 3.6e+6;

	}else if (option__from === "Millisecond" && option__to === "Day"){
        result.value = input.value / 8.64e+7;

	}else if (option__from === "Millisecond" && option__to === "Week"){
        result.value = input.value / 6.048e+8;

	}else if (option__from === "Millisecond" && option__to === "Month"){
        result.value = input.value / 2.628e+9;
	
	}else if (option__from === "Millisecond" && option__to === "Year"){
        result.value = input.value / 3.154e+10;
	
    }else if (option__from === "Millisecond" && option__to === "Millisecond"){
        result.value = input.value;
    }

	if(option__from === "Minute" && option__to === "Millisecond"){
        result.value = input.value * 60000;

    }else if (option__from === "Minute" && option__to === "Second"){
        result.value = input.value * 60;
		
	}else if (option__from === "Minute" && option__to === "Hour"){
        result.value = input.value / 60;

	}else if (option__from === "Minute" && option__to === "Day"){
        result.value = input.value / 1440;

	}else if (option__from === "Minute" && option__to === "Week"){
        result.value = input.value / 10080;

	}else if (option__from === "Minute" && option__to === "Month"){
        result.value = input.value / 43800;
	
	}else if (option__from === "Minute" && option__to === "Year"){
        result.value = input.value / 525600;
	
    }else if (option__from === "Minute" && option__to === "Minute"){
        result.value = input.value;
    }

	if(option__from === "Hour" && option__to === "Second"){
        result.value = input.value * 3600;

    }else if (option__from === "Hour" && option__to === "Millisecond"){
        result.value = input.value * 3.6e+6;
		
	}else if (option__from === "Hour" && option__to === "Minute"){
        result.value = input.value * 60;

	}else if (option__from === "Hour" && option__to === "Day"){
        result.value = input.value / 24;

	}else if (option__from === "Hour" && option__to === "Week"){
        result.value = input.value / 168;

	}else if (option__from === "Hour" && option__to === "Month"){
        result.value = input.value / 730;
	
	}else if (option__from === "Hour" && option__to === "Year"){
        result.value = input.value / 8760;
	
    }else if (option__from === "Hour" && option__to === "Hour"){
        result.value = input.value;
    }

	if(option__from === "Day" && option__to === "Second"){
        result.value = input.value * 86400;

    }else if (option__from === "Day" && option__to === "Millisecond"){
        result.value = input.value * 8.64e+7;
		
	}else if (option__from === "Day" && option__to === "Minute"){
        result.value = input.value * 1440;

	}else if (option__from === "Day" && option__to === "Hour"){
        result.value = input.value * 24;

	}else if (option__from === "Day" && option__to === "Week"){
        result.value = input.value / 7;

	}else if (option__from === "Day" && option__to === "Month"){
        result.value = input.value / 30;
	
	}else if (option__from === "Day" && option__to === "Year"){
        result.value = input.value / 365;
	
    }else if (option__from === "Day" && option__to === "Day"){
        result.value = input.value;
    }

	if(option__from === "Week" && option__to === "Second"){
        result.value = input.value * 604800;

    }else if (option__from === "Week" && option__to === "Millisecond"){
        result.value = input.value * 6.048e+8;
		
	}else if (option__from === "Week" && option__to === "Minute"){
        result.value = input.value * 10080;

	}else if (option__from === "Week" && option__to === "Hour"){
        result.value = input.value * 168;

	}else if (option__from === "Week" && option__to === "Day"){
        result.value = input.value * 7;

	}else if (option__from === "Week" && option__to === "Month"){
        result.value = input.value / 4.345;
	
	}else if (option__from === "Week" && option__to === "Year"){
        result.value = input.value / 52.143;
	
    }else if (option__from === "Week" && option__to === "Week"){
        result.value = input.value;
    }

	if(option__from === "Month" && option__to === "Second"){
        result.value = input.value * 2.628e+6;

    }else if (option__from === "Month" && option__to === "Millisecond"){
        result.value = input.value * 2.628e+9;
		
	}else if (option__from === "Month" && option__to === "Minute"){
        result.value = input.value * 43800;

	}else if (option__from === "Month" && option__to === "Hour"){
        result.value = input.value * 730;

	}else if (option__from === "Month" && option__to === "Day"){
        result.value = input.value * 30;

	}else if (option__from === "Month" && option__to === "Week"){
        result.value = input.value * 4.345;
	
	}else if (option__from === "Month" && option__to === "Year"){
        result.value = input.value / 12;
	
    }else if (option__from === "Month" && option__to === "Month"){
        result.value = input.value;
    }

	if(option__from === "Year" && option__to === "Second"){
        result.value = input.value * 3.154e+7;

    }else if (option__from === "Year" && option__to === "Millisecond"){
        result.value = input.value * 3.154e+10;
		
	}else if (option__from === "Year" && option__to === "Minute"){
        result.value = input.value * 525600;

	}else if (option__from === "Year" && option__to === "Hour"){
        result.value = input.value * 8760;

	}else if (option__from === "Year" && option__to === "Day"){
        result.value = input.value * 365;

	}else if (option__from === "Year" && option__to === "Week"){
        result.value = input.value * 52.143;
	
	}else if (option__from === "Year" && option__to === "Month"){
        result.value = input.value * 12;
	
    }else if (option__from === "Year" && option__to === "Year"){
        result.value = input.value;
    }

	document.querySelector("#display").innerHTML =` ${result.value} ${option__from}/s`;

   
}

function myFunction() {
    document.querySelector("form").reset();
    document.querySelector("#display").innerHTML = "";
    
}



