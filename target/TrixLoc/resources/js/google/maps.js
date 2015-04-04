/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var CONS_MAP_CENTER = new google.maps.LatLng(-3.7407282, -38.4916115);
var CONS_MAP_ICON_SHADOW = '/TrixLoc/resources/images/map-marker-shadow.png';
var CONS_MAP_ICON_GREEN = '/TrixLoc/resources/images/map-marker-green.png';


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		CHAMADAS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
$(document).ready( function() {
	initMap();
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
	var mapProp = {
		center : CONS_MAP_CENTER,
		zoom : 13,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var markerGreen = new google.maps.Marker({
		position : CONS_MAP_CENTER,
		icon : CONS_MAP_ICON_GREEN,
//		animation:google.maps.Animation.BOUNCE,
		draggable:true,
	    title:"Drag me!"
	});
	var markerShadow = new google.maps.Marker({
		position : CONS_MAP_CENTER,
		icon : CONS_MAP_ICON_SHADOW
	});
	
	var $elementContainerMap = $('#element-container-map');
	var $elementContainerHeader = $('#trix-elmt-container-header');
	
	if (exists($elementContainerMap)) {
		var map = new google.maps.Map(document.getElementById('element-container-map'), mapProp);
		var windowHeight = $(window).height();
		var headerHeight= $elementContainerHeader.height();
		
		$elementContainerMap.height(windowHeight - headerHeight);
		
		markerGreen.setMap(map);
		markerShadow.setMap(map);
		
//		google.maps.event.addListener(map, 'center_changed', function() {
//			// 3 seconds after the center of the map has changed, pan back to the
//			// marker.
//			window.setTimeout(function() {
//				map.panTo(markerGreen.getPosition());
//			}, 3000);
//		});
//		google.maps.event.addListener(markerGreen, 'click', function() {
//			map.setZoom(8);
//			map.setCenter(markerGreen.getPosition());
//		});
//		google.maps.event.addListener(map, 'mouseup', function(event) {
//			alert(event.latLng);
//		});
//		setTimeout(function() {
//	      google.maps.event.trigger(markerGreen, "click");
//	    }, 2000);
	}
}
