/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		CHAMADAS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
$(document).ready( function() {
	initMapPopup();
}); 


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Mostra uma mensagem no popup.
 * @param message
 */
function showMessageMapPopup(message, type) {
	var $elementContainerMessages = $('#element-container-messages');
	
	if (exists($elementContainerMessages)) {
		var $elementSpanMessages = $( $elementContainerMessages.find('span')[0] );
		
		if (exists($elementSpanMessages)) {
			$elementSpanMessages.removeClass();
			
			$elementSpanMessages.addClass(type);
			
			$elementSpanMessages.append(message);
		}
	}
}

/**
 * Inicia o mapa.
 */
function initMapPopup() {
	var $elementContainerMapPopup = $( document.createElement('div') );
	
	if (exists($elementContainerMapPopup)) {
		$elementContainerMapPopup.attr('id', 'element-container-map-popup');
		
		$(document.body).append($elementContainerMapPopup);
	}
}

/**
 * Faz a amostragem do popup baseado no tamanho da tela do mapa.
 * @param event
 */
function showMapPopup(event) {
	var $elementFired = event.data.element;
	var $elementContainerMap = $('#element-container-map');
	var $elementContainerMapPopup = $('#element-container-map-popup');
	
	if (exists($elementFired) && exists($elementContainerMap) && exists($elementContainerMapPopup)) {
		var typePopup = $elementFired.attr('open-popup');
		var containerMapOffset = $elementContainerMap.offset();
		var containerMapWidth = $elementContainerMap.width();
		var containerMapHeight = $elementContainerMap.height();
		
		if (containerMapOffset && containerMapWidth && containerMapHeight) {
			var popupOuterWidth = $elementContainerMapPopup.outerWidth() - $elementContainerMapPopup.width();
			var popupWidth = containerMapWidth * 0.4;
			var popupHeihgt = containerMapHeight * 0.8;
			var popupTop = (containerMapOffset.top + containerMapOffset.top * 0.6);
			var popupLeft = containerMapWidth - popupWidth - popupOuterWidth;
			
			if (typePopup == 'register') {
				buildRegister();
			} else if (typePopup == 'list') {
				buildList();
			}
			
			$elementContainerMapPopup.width(0);
			$elementContainerMapPopup.height(containerMapHeight * 0.8);
			$elementContainerMapPopup.css({
				display: 'block',
				position : 'absolute',
				top : popupTop + 'px',
				left : containerMapWidth + 'px'
			});
			
			$elementContainerMapPopup.animate({
				left : popupLeft + 'px',
				width : popupWidth + 'px'
			}, 'fast');
		}
	}
}

/**
 * Faz o evento de esconder o popup.
 */
function hideMapPopup() {
	var $elementContainerMap = $('#element-container-map');
	var $elementContainerMapPopup = $('#element-container-map-popup');
	
	if (exists($elementContainerMap) && exists($elementContainerMapPopup)) {
		var containerMapWidth = $elementContainerMap.width();
		
		$elementContainerMapPopup.animate({
				left : containerMapWidth + 'px',
				width : '0px'
			},
			
			'fast',
			
			function() {
				$elementContainerMapPopup.css({
					display: 'none',
					top: '0px',
					left : '0px'
				});
		});
	}
}
