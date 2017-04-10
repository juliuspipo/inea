//Desktop
var contador1 = 0;
var contador2 = 0;
var resultadoError1 = 0;
var resultadoGeneral1 = 0;
var desktop =function desktop(type){
	console.log(type)
	if(!type){
		contador1++;
		resultadoError1 = resultadoError1 - 0.25;
		if(contador1 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			resultadoError1 = 1;
		} else if(contador1 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			resultadoError1 = 0.25;
		} else if(contador1 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			resultadoError1 = 0.5;
		} else if(contador1 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			resultadoError1 = 0.75;
		} else if(contador1 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + resultadoGeneral1 + ' puntos por esta pregunta');
		} 
	} else if(type && contador1 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + resultadoGeneral1 + ' puntos por esta pregunta');
	} else if(type && contador1 < 4) {
		contador2++;
		if(contador2 == 1){
			resultadoGeneral1 = 0.5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Te faltđ otro botón. Obtuviste ' + resultadoGeneral1 + ' puntos por esta pregunta');
		} else if(contador2 == 2){
			resultadoGeneral1 = resultadoGeneral1 - resultadoError1;
			resultadoGeneral1 = resultadoGeneral1 + 0.5;
			contador1 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + resultadoGeneral1 + ' puntos por esta pregunta');
		}
		else if(contador2 >= 3){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + resultadoGeneral1 + ' puntos por esta pregunta');
		}
	}
};


//Laptop
var contador3 = 0;
var contador4 = 0;
var resultadoError2 = 0;
var resultadoGeneral2 = 0;
var laptop =function laptop(type){
	console.log(type)
	if(!type){
		contador3++;
		resultadoError2 = resultadoError2 - 0.25;
		if(contador3 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			resultadoError2 = 1;
		} else if(contador3 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			resultadoError2 = 0.25;
		} else if(contador3 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			resultadoError2 = 0.5;
		} else if(contador3 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			resultadoError2 = 0.75;
		} else if(contador3 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + resultadoGeneral2 + ' puntos por esta pregunta');
		} 
	} else if(type && contador3 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + resultadoGeneral2 + ' puntos por esta pregunta');
	} else if(type && contador3 < 4) {
		contador4++;
		if(contador4 == 1){
			resultadoGeneral2 = 1 - resultadoError2;
			contador3 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + resultadoGeneral2 + ' puntos por esta pregunta');
		}
		else if(contador4 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + resultadoGeneral2 + ' puntos por esta pregunta');
		}
	}
};


//q1
var c1_1 = 0;
var c2_1 = 0;
var r1_1 = 0;
var r2_1 = 0;
var q1 =function q1(type){
	console.log(type)
	if(!type){
		c1_1++;
		r1_1 = r1_1 - 0.25;
		if(c1_1 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_1 = 1;
		} else if(c1_1 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_1 = 0.25;
		} else if(c1_1 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_1 = 0.5;
		} else if(c1_1 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_1 = 0.75;
		} else if(c1_1 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_1 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_1 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_1 + ' puntos por esta pregunta');
	} else if(type && c1_1 < 4) {
		c2_1++;
		if(c2_1 == 1){
			r2_1 = 1 - r1_1;
			c1_1 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_1 + ' puntos por esta pregunta');
			$('#optionsRadios2').attr({
				checked: 'true'
			});
		}
		else if(c2_1 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_1 + ' puntos por esta pregunta');
		}
	}
};

//q2
var c1_2 = 0;
var c2_2 = 0;
var r1_2 = 0;
var r2_2 = 0;
var q2 =function q2(type){
	console.log(type)
	if(!type){
		c1_2++;
		r1_2 = r1_2 - 0.25;
		if(c1_2 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_2 = 1;
		} else if(c1_2 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_2 = 0.25;
		} else if(c1_2 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_2 = 0.5;
		} else if(c1_2 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_2 = 0.75;
		} else if(c1_2 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_2 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_2 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_2 + ' puntos por esta pregunta');
	} else if(type && c1_2 < 4) {
		c2_2++;
		if(c2_2 == 1){
			r2_2 = 1 - r1_2;
			c1_2 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_2 + ' puntos por esta pregunta');
			$('#optionsRadios8').attr({
				checked: 'true'
			});
		}
		else if(c2_2 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_2 + ' puntos por esta pregunta');
		}
	}
};

//q3
var c1_3 = 0;
var c2_3 = 0;
var r1_3 = 0;
var r2_3 = 0;
var q3 =function q3(type){
	console.log(type)
	if(!type){
		c1_3++;
		r1_3 = r1_3 - 0.25;
		if(c1_3 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_3 = 1;
		} else if(c1_3 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_3 = 0.25;
		} else if(c1_3 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_3 = 0.5;
		} else if(c1_3 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_3 = 0.75;
		} else if(c1_3 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_3 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_3 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_3 + ' puntos por esta pregunta');
	} else if(type && c1_3 < 4) {
		c2_3++;
		if(c2_3 == 1){
			r2_3 = 1 - r1_3;
			c1_3 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_3 + ' puntos por esta pregunta');
			$('#optionsRadios9').attr({
				checked: 'true'
			});
		}
		else if(c2_3 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_3 + ' puntos por esta pregunta');
		}
	}
};

//q4
var c1_4 = 0;
var c2_4 = 0;
var r1_4 = 0;
var r2_4 = 0;
var q4 =function q4(type){
	console.log(type)
	if(!type){
		c1_4++;
		r1_4 = r1_4 - 0.25;
		if(c1_4 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_4 = 1;
		} else if(c1_4 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_4 = 0.25;
		} else if(c1_4 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_4 = 0.5;
		} else if(c1_4 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_4 = 0.75;
		} else if(c1_4 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_4 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_4 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_4 + ' puntos por esta pregunta');
	} else if(type && c1_4 < 4) {
		c2_4++;
		if(c2_4 == 1){
			r2_4 = 1 - r1_4;
			c1_4 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_4 + ' puntos por esta pregunta');
			$('#optionsRadios13').attr({
				checked: 'true'
			});
		}
		else if(c2_4 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_4 + ' puntos por esta pregunta');
		}
	}
};

//q5
var c1_5 = 0;
var c2_5 = 0;
var r1_5 = 0;
var r2_5 = 0;
var q5 =function q5(type){
	console.log(type)
	if(!type){
		c1_5++;
		r1_5 = r1_5 - 0.25;
		if(c1_5 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_5 = 1;
		} else if(c1_5 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_5 = 0.25;
		} else if(c1_5 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_5 = 0.5;
		} else if(c1_5 >= 4){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_5 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_5 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_5 + ' puntos por esta pregunta');
	} else if(type && c1_5 < 4) {
		c2_5++;
		if(c2_5 == 1){
			r2_5 = 1 - r1_5;
			c1_5 = 4;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_5 + ' puntos por esta pregunta');
			$('#optionsRadios18').attr({
				checked: 'true'
			});
		}
		else if(c2_5 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_5 + ' puntos por esta pregunta');
		}
	}
};

//q6
var c1_6 = 0;
var c2_6 = 0;
var r1_6 = 0;
var r2_6 = 0;
var q6 =function q6(type){
	console.log(type)
	if(!type){
		c1_6++;
		r1_6 = r1_6 - 0.25;
		if(c1_6 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_6 = 1;
		} else if(c1_6 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_6 = 0.25;
		} else if(c1_6 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_6 = 0.5;
		} else if(c1_6 >= 4){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_6 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_6 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_6 + ' puntos por esta pregunta');
	} else if(type && c1_6 < 4) {
		c2_6++;
		if(c2_6 == 1){
			r2_6 = 1 - r1_6;
			c1_6 = 4;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_6 + ' puntos por esta pregunta');
			$('#optionsRadios20').attr({
				checked: 'true'
			});
		}
		else if(c2_6 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_6 + ' puntos por esta pregunta');
		}
	}
};

//q7
var c1_7 = 0;
var c2_7 = 0;
var r1_7 = 0;
var r2_7 = 0;
var q7 =function q7(type){
	console.log(type)
	if(!type){
		c1_7++;
		r1_7 = r1_7 - 0.25;
		if(c1_7 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_7 = 1;
		} else if(c1_7 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_7 = 0.25;
		} else if(c1_7 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_7 = 0.5;
		} else if(c1_7 >= 4){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_7 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_7 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_7 + ' puntos por esta pregunta');
	} else if(type && c1_7 < 4) {
		c2_7++;
		if(c2_7 == 1){
			r2_7 = 1 - r1_7;
			c1_7 = 4;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_7 + ' puntos por esta pregunta');
			$('#optionsRadios25').attr({
				checked: 'true'
			});
		}
		else if(c2_7 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_7 + ' puntos por esta pregunta');
		}
	}
};

//q8
var c1_8 = 0;
var c2_8 = 0;
var r1_8 = 0;
var r2_8 = 0;
var q8 =function q8(type){
	console.log(type)
	if(!type){
		c1_8++;
		r1_8 = r1_8 - 0.25;
		if(c1_8 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_8 = 1;
		} else if(c1_8 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_8 = 0.25;
		} else if(c1_8 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_8 = 0.5;
		} else if(c1_8 >= 4){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_8 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_8 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_8 + ' puntos por esta pregunta');
	} else if(type && c1_8 < 4) {
		c2_8++;
		if(c2_8 == 1){
			r2_8 = 1 - r1_8;
			c1_8 = 4;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_8 + ' puntos por esta pregunta');
			$('#optionsRadios27').attr({
				checked: 'true'
			});
		}
		else if(c2_8 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_8 + ' puntos por esta pregunta');
		}
	}
};

//q9
var c1_9 = 0;
var c2_9 = 0;
var r1_9 = 0;
var r2_9 = 0;
var q9 =function q9(type){
	console.log(type)
	if(!type){
		c1_9++;
		r1_9 = r1_9 - 0.25;
		if(c1_9 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_9 = 1;
		} else if(c1_9 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_9 = 0.25;
		} else if(c1_9 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_9 = 0.5;
		} else if(c1_9 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_9 = 0.75;
		} else if(c1_9 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_9 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_9 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_9 + ' puntos por esta pregunta');
	} else if(type && c1_9 < 4) {
		c2_9++;
		if(c2_9 == 1){
			r2_9 = 1 - r1_9;
			c1_9 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_9 + ' puntos por esta pregunta');
			$('#optionsRadios30').attr({
				checked: 'true'
			});
		}
		else if(c2_9 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_9 + ' puntos por esta pregunta');
		}
	}
};

//q10
var c1_10 = 0;
var c2_10 = 0;
var r1_10 = 0;
var r2_10 = 0;
var q10 =function q10(type){
	console.log(type)
	if(!type){
		c1_10++;
		r1_10 = r1_10 - 0.25;
		if(c1_10 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_10 = 1;
		} else if(c1_10 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_10 = 0.25;
		} else if(c1_10 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_10 = 0.5;
		} else if(c1_10 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_10 = 0.75;
		} else if(c1_10 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_10 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_10 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_10 + ' puntos por esta pregunta');
	} else if(type && c1_10 < 4) {
		c2_10++;
		if(c2_10 == 1){
			r2_10 = 1 - r1_10;
			c1_10 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_10 + ' puntos por esta pregunta');
			$('#optionsRadios34').attr({
				checked: 'true'
			});
		}
		else if(c2_10 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_10 + ' puntos por esta pregunta');
		}
	}
};

//q11
var c1_11 = 0;
var c2_11 = 0;
var r1_11 = 0;
var r2_11 = 0;
var q11 =function q11(type){
	console.log(type)
	if(!type){
		c1_11++;
		r1_11 = r1_11 - 0.25;
		if(c1_11 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_11 = 1;
		} else if(c1_11 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_11 = 0.25;
		} else if(c1_11 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_11 = 0.5;
		} else if(c1_11 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_11 = 0.75;
		} else if(c1_11 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_11 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_11 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_11 + ' puntos por esta pregunta');
	} else if(type && c1_11 < 4) {
		c2_11++;
		if(c2_11 == 1){
			r2_11 = 1 - r1_11;
			c1_11 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_11 + ' puntos por esta pregunta');
			$('#optionsRadios39').attr({
				checked: 'true'
			});
		}
		else if(c2_11 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_11 + ' puntos por esta pregunta');
		}
	}
};

//q12
var c1_12 = 0;
var c2_12 = 0;
var r1_12 = 0;
var r2_12 = 0;
var q12 =function q12(type){
	console.log(type)
	if(!type){
		c1_12++;
		r1_12 = r1_12 - 0.25;
		if(c1_12 == 4){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('No obtuviste puntos en esta pregunta');
			r1_12 = 1;
		} else if(c1_12 == 1){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.75 + ' puntos por esta pregunta');
			r1_12 = 0.25;
		} else if(c1_12 == 2){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.5 + ' puntos por esta pregunta');
			r1_12 = 0.5;
		} else if(c1_12 == 3){
			$('#modal-general').modal();
			$('#modal-label').html('Fallaste');
			$('#modal-text').html('Vuelve a intentar para obtener ' + 0.25 + ' puntos por esta pregunta');
			r1_12 = 0.75;
		} else if(c1_12 >= 5){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_12 + ' puntos por esta pregunta');
		} 
	} else if(type && c1_12 >= 5) {
		$('#modal-general').modal();
		$('#modal-label').html('Resultado');
		$('#modal-text').html('Obtuviste ' + r2_12 + ' puntos por esta pregunta');
	} else if(type && c1_12 < 4) {
		c2_12++;
		if(c2_12 == 1){
			r2_12 = 1 - r1_12;
			c1_12 = 5;
			$('#modal-general').modal();
			$('#modal-label').html('Correcto');
			$('#modal-text').html('Obtuviste ' + r2_12 + ' puntos por esta pregunta');
			$('#optionsRadios41').attr({
				checked: 'true'
			});
		}
		else if(c2_12 >= 2){
			$('#modal-general').modal();
			$('#modal-label').html('Resultado');
			$('#modal-text').html('Obtuviste ' + r2_12 + ' puntos por esta pregunta');
		}
	}
};