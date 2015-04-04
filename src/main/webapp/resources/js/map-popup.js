/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var CONS_MAP_POPUP_TOP_MULTIPLIER = 0.06;
var CONS_MAP_POPUP_WIDTH_MULTIPLIER = 0.44;
var CONS_MAP_POPUP_HEIGHT_MULTIPLIER = 0.88;


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		CHAMADAS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
$(document).ready( function() {
	var $elementsActions = $('button[action]');
	
	if (exists($elementsActions)) {
		for (var indexAction = 0; indexAction < $elementsActions.length; indexAction++) {
			var $elementAction = $($elementsActions[indexAction]);
			
			initAction($elementAction);
		}
	}
});

/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Inicializa as acoes do elemento.
 */
function initAction($elementAction) {
	if (exists($elementAction)) {
		var action = $elementAction.attr('action');

		if (action == 'register') {
			$elementAction.click( { elementFired : $elementAction }, registerMarker );
		} else if (action == 'hide') {
			$elementAction.click( function() { hideMapPopup(); } );
		} else if (action == 'refresh') {
			$elementAction.click( function() { alert('ATUALIZAR') } );
		} else if (action == 'search') {
			$elementAction.click( function() { alert('BUSCAR') } );
		} else if (action == 'plot') {
			$elementAction.click( function() { alert('PLOTAR') } );
		} else if (action == 'edit') {
			$elementAction.click( function() { alert('EDITAR') } );
		} else if (action == 'delete') {
			$elementAction.click( function() { alert('EXCLUIR') } );
		}
	}
}

/**
 * Mostra uma mensagem no popup.
 * @param message
 */
function showMessageMapPopup(message, popup, type) {
	var $elementContainerMessages = $('#element-container-messages-' + popup);
	
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
 * Faz a amostragem do popup baseado no tamanho da tela do mapa.
 * @param event
 */
function showMapPopup(event) {
	var $elementFired = event.data.element;
	var $elementContainerMap = $('#trix-container-map');
	
	if (exists($elementFired) && exists($elementContainerMap)) {
		var typePopup = $elementFired.attr('open-popup');
		var $elementContainerMapPopup = $('#trix-container-map-popup');
		
		if (exists($elementContainerMapPopup)) {
			var containerMapOffset = $elementContainerMap.offset();
			var containerMapWidth = $elementContainerMap.width();
			var containerMapHeight = $elementContainerMap.height();
			
			if (containerMapOffset && containerMapWidth && containerMapHeight) {
				var popupOuterWidth = $elementContainerMapPopup.outerWidth() - $elementContainerMapPopup.width();
				var popupWidth = containerMapWidth * CONS_MAP_POPUP_WIDTH_MULTIPLIER;
				var popupHeihgt = containerMapHeight * CONS_MAP_POPUP_HEIGHT_MULTIPLIER;
				var popupTop = (containerMapOffset.top + containerMapHeight * CONS_MAP_POPUP_TOP_MULTIPLIER);
				var popupLeft = containerMapWidth - popupWidth - popupOuterWidth;
				
				$elementContainerMapPopup.width(0);
				$elementContainerMapPopup.height(popupHeihgt);
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
}

/**
 * Faz o evento de esconder o popup.
 */
function hideMapPopup() {
	var $elementContainerMap = $('#trix-container-map');
	var $elementContainerMapPopup = $('#trix-container-map-popup');
	
	if (exists($elementContainerMap) && exists($elementContainerMapPopup)) {
		var containerMapWidth = $elementContainerMap.width();
		
		$elementContainerMapPopup.animate({
				left : containerMapWidth + 'px',
				width : '0px'
			},
			'fast',
			function() {
				$elementContainerMapPopup.remove();
				
				$elementContainerMapPopup.css({
					display: 'none',
					top: '0px',
					left : '0px'
				});
		});
	}
}
