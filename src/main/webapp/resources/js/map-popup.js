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

		if (action == 'submit') {
			$elementAction.click( { elementFired : $elementAction }, registerMarker );
		} else if (action == 'hide') {
			var typePopup = $elementAction.val();
			
			$elementAction.click( function() { hideMapPopup(typePopup); } );
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
	var $elementContainerMap = $('#element-container-map');
	
	if (exists($elementFired) && exists($elementContainerMap)) {
		var typePopup = $elementFired.attr('open-popup');
		var $elementContainerMapPopup = $('#element-container-map-popup-' + typePopup);
		
		if (exists($elementContainerMapPopup)) {
			var containerMapOffset = $elementContainerMap.offset();
			var containerMapWidth = $elementContainerMap.width();
			var containerMapHeight = $elementContainerMap.height();
			
			if (containerMapOffset && containerMapWidth && containerMapHeight) {
				var popupOuterWidth = $elementContainerMapPopup.outerWidth() - $elementContainerMapPopup.width();
				var popupWidth = containerMapWidth * 0.4;
				var popupHeihgt = containerMapHeight * 0.8;
				var popupTop = (containerMapOffset.top + containerMapOffset.top * 0.6);
				var popupLeft = containerMapWidth - popupWidth - popupOuterWidth;
				
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
}

/**
 * Faz o evento de esconder o popup.
 */
function hideMapPopup(type) {
	var $elementContainerMap = $('#element-container-map');
	var $elementContainerMapPopup = $('#element-container-map-popup-' + type);
	
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
