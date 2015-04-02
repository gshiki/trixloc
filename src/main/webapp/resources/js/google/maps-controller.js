/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var markers = new Array();

/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		CHAMADAS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
$(document).ready( function() {
	initMarkers();
});


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Inicializa o array de marcadores.
 */
function initMarkers() {
	
}

/**
 * Atualiza o array de marcadores.
 */
function refreshMarkers() {
	
}

/**
 * Realiza o cadastro de um marcador.
 * @param event
 */
function registerMarker(event) {
	var $elementButtonFired = $(event.data.elementFired);
	
	if (exists($elementButtonFired)) {
		event.preventDefault();
		
		var $type = $elementButtonFired.attr('action');
		var $elementContainerPopup = $elementButtonFired.parent().parent();
		
		if ($type == 'submit' && exists($elementContainerPopup)) {
			var data = {};
			var $elementsParams = $elementContainerPopup.find('[name]');
			
			for(var indexParams = 0; indexParams < $elementsParams.length; indexParams++) {
				var $elementParam = $($elementsParams[indexParams]);
				var value = $elementParam.val();
				var param = $elementParam.attr('name');
				
				data[param] = value;
			}
			
			if (data) {
				$.ajax({
					url : '/TrixLoc/marker/register',
					type : 'post',
					data : "params-json=" + JSON.stringify(data),
					
					error: function(xhr, errorType, exception) {
						var errorMessage = exception || xhr.statusText;
						
		                console.log("error : " + errorMessage);
					},
					
					fail: function(data) {
						console.log(data);
					},
					
					success : function(data) {
						alert(data);
					}
				});
			}
		}
	}
}
