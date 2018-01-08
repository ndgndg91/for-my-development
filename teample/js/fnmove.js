    function fnMove(seq){
		if(seq==1){
			position=0;
		} else if (seq==2){
			position=1528;
		} else if (seq==3){
			position=3055;
		}
		$('#second, #second_media').animate({scrollLeft : position}, 400);
           //var offset = $("#div" + seq).offset();
           //$('#second, #second_media').animate({scrollLeft : offset.left}, 400);
       }
	function fnMove2(seq){
		if(seq==1){
			position=0;
		} else if (seq==2){
			position=1528;
		} else if (seq==3){
			position=3055;
		}
		$('#third, #third_media').animate({scrollLeft : position}, 400);
	}