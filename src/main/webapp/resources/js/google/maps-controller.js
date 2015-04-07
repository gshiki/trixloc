/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var MAP_ZOOM = 13;
var MAP_CENTER = new google.maps.LatLng(-3.7407282, -38.4916115);
var MAP_ICON_SHADOW = '/TrixLoc/resources/images/map-marker-shadow.png';
var MAP_ICON_GREEN = '/TrixLoc/resources/images/map-marker-green.png';

var markers = new Array();
var infoWindows = {};
var geocoder = new google.maps.Geocoder();


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
	refreshMarkers();
}


/* ************************************************************************************************* */
/* 									      ACTION PLOT | WINDOWS										 */
/* ************************************************************************************************* */
/**
 * Mostra a InfoWindow do marcador passado dentro do event.data.
 * @param event
 */
function showInfoWindow(event) {
	var $elementFired = $( event.data.elementPlotter );
	
	if (exists($elementFired)) {
		var id = $elementFired.attr('item-id');
		
		if (id) {
			for (var indexInfoMarks = 0; indexInfoMarks < markers.length; indexInfoMarks++) {
				var infoMark = markers[indexInfoMarks];
				
				if (infoMark.id == id) {
					new google.maps.event.trigger( infoMark.googleOBJ , 'click' );
				}
			}
		}
	}
}

/**
 * Inicializa uma InfoWindow de um marcador.
 * @param marker
 */
function initMakerInfoWindow(marker, markerGoogle) {
	google.maps.event.addListener(markerGoogle, 'click', function() {
		closeAllMarkersWindows();
		
    	var infowindow = new InfoBubble({
			content: buildInfoWindow(marker),
			padding: 0
		});
    	infowindow.open(MAP_MAIN, markerGoogle);
    	
    	infoWindows[marker.id] = infowindow;
    });
}

/**
 * Fecha todas as InfoWindows do mapa.
 */
function closeAllMarkersWindows() {
	var keys = Object.keys(infoWindows);
	
	for (infoKeyIndex in keys ) {
		var infoWindowIndex = keys[infoKeyIndex]; 
		var markerInfoWindow = infoWindows[infoWindowIndex];
		
		markerInfoWindow.close();
	}
}

/**
 * Retorna um array dos marcadores por nome.
 * @param name
 * @returns {Array}
 */
function getMarkers(name) {
	var filteredMarkers = new Array();
	
	if (name.length) {
		var regexp = new RegExp(name, 'i');
		
		for (var indexSearch = 0; indexSearch < markers.length; indexSearch++) {
			var mark = markers[indexSearch];

			if (regexp.test(mark.name)) {
				filteredMarkers.push(mark);
			}
		}
	} else {
		return markers;
	}
	return filteredMarkers;
}


/* ************************************************************************************************* */
/* 											  ACTION SEARCH											 */
/* ************************************************************************************************* */
/**
 * Atualiza a lista de marcadores do popup.
 */
function refreshMarkersPopupList(event) {
	var $elementSearchFired = $( event.data.elementSearch );
	var $elementMapPopupContent = $('#trix-container-map-popup-content');
	
	if (exists($elementSearchFired) && exists($elementMapPopupContent)) {
		var $elementInputSearch = $( $elementSearchFired.parent().children('input[name="param-search"]') );
		
		if (exists($elementInputSearch)) {
			var name = $elementInputSearch.val();
			
			rebuildList(name);
		}
	}
}


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     	   MANIPULACAO											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Recentraliza o mapa para o ponto especificado.
 * @param lat
 * @param lng
 */
function recenterMap(lat, lng) {
	MAP_CENTER = new google.maps.LatLng(lat, lng);
	
	reinitMap();
}

/**
 * Reinicializa o zoom do mapa.
 * @param zoom
 */
function rezoomMap(zoom) {
	MAP_ZOOM = zoom;
	
	reinitMap();
}



/**
 * Atualiza o array de marcadores.
 */
function refreshMarkers() {
	var paramsJSON = '';
	var data = [];
	
	if (exists(name)) {
		data['param-name'] = name;
		
		paramsJSON = 'params-json=' + JSON.stringfy(data);
	}
	
	$.ajax({
		url : '/TrixLoc/marker/list',
		type : 'get',
		data : paramsJSON,
		
		error: function(xhr, errorType, exception) {
			handleError(xhr, errorType, exception);
		},
		fail: function(data) {
			handleFailed(data);
		},
		success : function(data) {
			handleListMarkers(data);
		}
	});
}


/* ************************************************************************************************* */
/* 											  ACTION REGISTER										 */
/* ************************************************************************************************* */
/**
 * Realiza o cadastro de um marcador.
 * @param event
 */
function registerMarker(event) {
	var $elementButtonFired = $(event.data.elementFired);
	
	if (exists($elementButtonFired)) {
		event.preventDefault();
		
		var $type = $elementButtonFired.attr('action');
		var $elementContainerPopup = $elementButtonFired.parent().parent().parent();
		
		if ($type == 'register' && exists($elementContainerPopup)) {
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
					data : 'params-json=' + JSON.stringify(data),
					
					error: function(xhr, errorType, exception) {
						handleError(xhr, errorType, exception);
					},
					fail: function(data) {
						handleFailed(data);
					},
					success : function(data) {
						handleRegisterMarker(data);
					}
				});
			}
		}
	}
}


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		HANDLERS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Gerencia quando ha falha.
 * @param data
 */
function handleFailed(data) {
	var message = new MessagePopup( _t('msg.error.generic'), 'warning');
	var messages = [ message ];
	
	showMessageMapPopup(messages);
	
	console.log(data);
}

/**
 * Gerencia quando ha erro.
 * @param xhr
 * @param errorType
 * @param exception
 */
function handleError(xhr, errorType, exception) {
	var errorMessage = exception || xhr.statusText;
	var message = new MessagePopup( _t('msg.error.generic'), 'warning');
	var messages = [ message ];
	
	showMessageMapPopup(messages);
	
    console.log("error : " + errorMessage);
}

/**
 * Gerencia a resposta do servidor apos cadastro de um novo marcador.
 * @param data
 */
function handleRegisterMarker(data) {
	if (data) {
		var response = data['param-response'];
		var messages = [ ];

		if (response == 'registered') {
			var message = new MessagePopup( _t('msg.success.register'), 'success');
			
			messages.push(message);
		} else {
			var message = new MessagePopup( _t('msg.error.generic'), 'warning');
			
			messages.push(message);
		}
		refreshMarkers();
		
		showMessageMapPopup(messages);
	}
}

/**
 * Gerencia a resposta do servidor apos pedido de listagem dos marcadores.
 * @param data
 */
function handleListMarkers(data) {
	if (data) {
		var response = data['param-response'];
		var messages = [];

		if (response == 'listed') {
			var jsonList = JSON.parse(data['param-list']);
			
			if (jsonList.length) {
				for(var index = 0; index < jsonList.length; index++) {
				    var marker = jsonList[index];
				    
				    var markerOBJ = new Marker(marker.id);
				    markerOBJ.lat = marker.lat;
				    markerOBJ.lng = marker.lng;
				    markerOBJ.icon = CONS_MAP_ICON_GREEN;
				    markerOBJ.name = marker.name;
				    markerOBJ.dateCreated = marker.date;
				    var tags = new Array();
				    var tagsJSON = marker.tags;
				    // INICIALIZA O ENDERECO
				    with({ mkOBJ : markerOBJ }) {
				    	geocoder.geocode( { 'latLng' : new google.maps.LatLng(marker.lat, marker.lng) }, 
				    		function(results, status) {
					    		if (status == google.maps.GeocoderStatus.OK) {
					    			if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
					    				mkOBJ.address = results[1].formatted_address; 
					    			}
					    		}
				    		});
				    }
				    // INICIALIZA AS TAGS
				    for (tagKey in Object.keys(tagsJSON)) {
				    	var tagJSON = tagsJSON[tagKey];
				    	var tag = new Tag(tagJSON.id);
				    	
				    	tag.name = tagJSON.name;
				    	tag.dateCreated = tagJSON.date;
				    	
				    	tags.push(tag);
				    }
				    markerOBJ.tags = tags;
				    
				    markers.push(markerOBJ);
				}
				
				reinitMapMarkers();
			}
		} else {
			var message = new MessagePopup( _t('msg.error.generic'), 'warning');
			
			messages.push(message);
		}
		showMessageMapPopup(messages);
	}
}
