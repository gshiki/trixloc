/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var MAP_MAIN;


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		CHAMADAS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
$(document).ready( function() {
	initMap(false);
});


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Inicializa o mapa do Google.
 */
function initMap() {
	var mapProperties = {
		center : MAP_CENTER,
		zoom : MAP_ZOOM,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	
	var $elementContainerMap = $('#trix-container-map');
	var $elementContainerHeader = $('#trix-elmt-container-header');
	
	if (exists($elementContainerMap)) {
		MAP_MAIN = new google.maps.Map(document.getElementById('trix-container-map'), mapProperties);
		var windowHeight = $(window).height();
		var headerHeight= $elementContainerHeader.height();
		
		$elementContainerMap.height(windowHeight - headerHeight);
		
		initMapMarkers();
	}
}

/**
 * Seta os marcadores no mapa.
 */
function initMapMarkers() {
	for (var indexMarker = 0; indexMarker < markers.length; indexMarker++) {
		var marker = markers[indexMarker];
		
		var markerGreen = new google.maps.Marker({
			position : new google.maps.LatLng(marker.lat, marker.lng),
			icon : marker.icon,
		    title: marker.name,
		    draggable: marker.draggable
		    
		});
		var markerShadow = new google.maps.Marker({
			position : new google.maps.LatLng(marker.lat, marker.lng),
			icon : CONS_MAP_ICON_SHADOW
		});
		
		markerGreen.setMap(MAP_MAIN);
		markerGreen.setAnimation(google.maps.Animation.DROP);
		markerShadow.setMap(MAP_MAIN);
		
		with ({ mark : marker, mkGreen : markerGreen }) {
			initMakerInfoWindow(mark, mkGreen);
			
			mark.googleOBJ = mkGreen;
		}
	}
}

/**
 * Reinicia o mapa.
 */
function reinitMap() {
	initMap();
	
	hideMapPopup();
}

/**
 * Reinicia os marcadores no mapa.
 */
function reinitMapMarkers() {
	initMapMarkers();
}
