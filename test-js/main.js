var ImageSrc = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mOgIiqmOnoZdaBow55zLePtDRyDCWZqAmA&usqp=CAU",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-F6vNGfN-HFcQwqno0VeX2a0t7zn5BCuMAA&usqp=CAU",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3YYKZRvQJpCCc8zVEqP1Uc9RCJ1djZf7Zw&usqp=CAU",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15qnqcYkoVW7CIEeYUCiF9MgB65f3r8ALZw&usqp=CAU",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBWZFLmu2MR3ztqocdqn7dJ7tWPCc2147S8g&usqp=CAU",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L7DH56BOZPc7QT1LlPQZlQTVFAVrdtRCjQ&usqp=CAU",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJ7StByrDdjtby6fq5uXZNDahrsOtYTErNw&usqp=CAU",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROF7bdxk7WxHYaB0Cc7GahhXoM2z18l-Kxng&usqp=CAU"];
var index = 0;
var target_source = document.getElementById("source");

var change_next = function(){
	if(index<7){
		index++;
		target_now.src= ImageSrc[index];
		target_source.href = ImageSrc[index];
	}
	if(index === 0){
		target_back.style.visibility = "hidden";
	}
	else if(index === 1){
		target_back.style.visibility = "visible";
	}
	else if(index === 7){
		target_next.style.visibility = "hidden";
	}
	else if(index===6){
		target_next.style.visibility = "visible";
	}
}

var change_back = function(){
	if(index>0){
		index--;
		target_now.src= ImageSrc[index];
	}
	if(index === 0){
		target_back.style.visibility = "hidden";
	}
	else if(index === 1){
		target_back.style.visibility = "visible";
	}
	else if(index === 7){
		target_next.style.visibility = "hidden";
	}
	else if(index===6){
		target_next.style.visibility = "visible";
	}
}



var target_now = document.getElementById("display");
target_now.src = ImageSrc[index];

var target_next = document.getElementById("next");
target_next.addEventListener("click", change_next);

var target_back = document.getElementById("previous");
target_back.addEventListener("click", change_back);



