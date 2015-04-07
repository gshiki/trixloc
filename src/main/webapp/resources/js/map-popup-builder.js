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


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Constroi o popup de mapa de acordo com o tipo.
 */
function buildMapPopup(type) {
	if (type == 'register') {
		buildRegister();
	} else if (type == 'list') {
		buildList();
	}
	
	initValidator();
}

/**
 * Gera a classe de colunas do Bootstrap com o numero passado como parametro. Sem offset.
 * @param number
 */
function generateColClass(extraClasses, number) {
	var classSTR = '';
	classSTR += extraClasses;
	classSTR += ' ';
	classSTR += 'col-xs-';
	classSTR += number;
	classSTR += ' ';
	classSTR += 'col-sm-';
	classSTR += number;
	classSTR += ' ';
	classSTR += 'col-md-';
	classSTR += number;
	classSTR += ' ';
	classSTR += 'col-lg-';
	classSTR += number;
	classSTR += ' ';
	return classSTR;
}

/**
 * Constroi um novo elemento com os parametros passados. Sendo attributes um objeto de atributos.
 * @param tag
 * @param id
 * @param classes
 * @param attributes
 * @returns
 */
function buildElement(tag, id, classes, attributes) {
	var $element = $( document.createElement(tag) );
	
	if (exists($element)) {
		if (id && id.length) {
			$element.attr('id', id);
		}
		
		if (classes && classes.length) {
			$element.addClass(classes);
		}
		
		if (attributes) {
			var attributesKeys = Object.keys(attributes);
			
			if (attributesKeys.length) {
				for (var indexAttrs = attributesKeys.length - 1; indexAttrs >= 0; indexAttrs--) {
					$element.attr(attributesKeys[indexAttrs], attributes[attributesKeys[indexAttrs]]);
				}
			}
		}
	}
	return $element;
}

/**
 * Retorna o elemento com o HTML de uma InfoWindow.
 * @param marker
 * @returns
 */
function buildInfoWindow(marker) {
	var $elementContainerInfoWindow = buildElement('div', 'trix-element-container-info-window', 
													generateColClass('', 12) );
	/* ********************************************************************************* */
	/* 									    TITULO										 */
	/* ********************************************************************************* */
	var $elementRowTitle = buildElement('div', '', 'trix-info-window-title row', null);
	var $elementColTitle = buildElement('div', '', generateColClass('', 12), null);
	var $elementSpanTitle = buildElement('span', '', '', null);
	
	$elementSpanTitle.append(marker.name);
	$elementColTitle.append($elementSpanTitle);
	$elementRowTitle.append($elementColTitle);
	$elementContainerInfoWindow.append($elementRowTitle);
	
	
	/* ********************************************************************************* */
	/* 									   ENDERECO										 */
	/* ********************************************************************************* */
	var $elementRowAddress = buildElement('div', '', 'trix-info-window-address row trix-map-info-window-row', null);
	var $elementColAddress = buildElement('div', '', generateColClass('', 12), null);
	var $elementSpanAddress = buildElement('span', '', '', null);
	
	$elementSpanAddress.append(marker.address);
	$elementColAddress.append($elementSpanAddress);
	$elementRowAddress.append($elementColAddress);
	$elementContainerInfoWindow.append($elementRowAddress);
	
	
	/* ********************************************************************************* */
	/* 									   LAT & LONG									 */
	/* ********************************************************************************* */
	var $elementRowLatLong = buildElement('div', '', 'trix-info-window-lat-lng row trix-map-info-window-row', null);
	
	var $elementColLat = buildElement('div', '', generateColClass('trix-info-window-lat', 6), null);
	var $elementSpanLat = buildElement('span', '', '', null);
	var $elementColLng = buildElement('div', '', generateColClass('trix-info-window-lng', 6), null);
	var $elementSpanLng = buildElement('span', '', '', null);
	
	$elementSpanLat.append( _t('label.upper.lat') + ' : ' + marker.lat );
	$elementColLat.append($elementSpanLat);

	$elementSpanLng.append( _t('label.upper.lng') + ' : ' + marker.lng );
	$elementColLng.append($elementSpanLng);
	
	$elementRowLatLong.append($elementColLat);
	$elementRowLatLong.append($elementColLng);
	
	$elementContainerInfoWindow.append($elementRowLatLong);
	
	
	/* ********************************************************************************* */
	/* 									    TAGS										 */
	/* ********************************************************************************* */
	var $elementRowTags = buildElement('div', '', 'trix-info-window-tags row trix-map-info-window-row', null);
	var $elementColTags = buildElement('div', '', generateColClass('', 12), null);
	var $elementSpanTags = buildElement('span', '', '', null);
	var spanTagsValue = '';
	var tagsLength = Object.keys(marker.tags).length;
	
	spanTagsValue += _t('label.upper.tags');
	spanTagsValue += ' : ';
	for(tagKey in marker.tags) {
		var tag = marker.tags[tagKey];
		
		spanTagsValue += tag.name;
		
		if (tagKey < marker.tags.length - 1) {
			spanTagsValue += ', ';
		}
	}
	$elementSpanTags.append(spanTagsValue);
	$elementColTags.append($elementSpanTags);
	$elementRowTags.append($elementColTags);
	$elementContainerInfoWindow.append($elementRowTags);
	
	return $elementContainerInfoWindow.prop('outerHTML');
}


/**
 * Constroi o popup do mapa de registro de marcador.
 */
function buildRegister() {
	var $elementContainerMapPopup = $('#trix-container-map-popup');
	var $elementContainerRegister = buildElement('div', '', generateColClass('trix-map-popup-register', 12), null);
	var $elementContainerMapPopupContent = buildElement('div', 
														'trix-container-map-popup-content', 
														generateColClass('', 12), 
														null);
	$elementContainerMapPopup.empty();
	
	/* ********************************************************************************* */
	/* 									    TITULO										 */
	/* ********************************************************************************* */
	var $elementRowTitle = buildElement('div', '', 'trix-map-popup-title row', null);
	var $elementColTitle = buildElement('div', '', generateColClass('', 12), null);
	var $elementSpanTitle = buildElement('span', '', '', null);
	
	$elementSpanTitle.append( _t('label.container.title.register') );
	$elementColTitle.append($elementSpanTitle);
	$elementRowTitle.append($elementColTitle);
	$elementContainerRegister.append($elementRowTitle);


	/* ********************************************************************************* */
	/* 									    MENSAGES									 */
	/* ********************************************************************************* */
	var $elementRowMessages = buildElement('div', '', 'row', null);
	var $elementColMessages = buildElement('div', 'trix-container-messages', generateColClass('', 12), null);
	
	$elementRowMessages.append($elementColMessages);
	$elementContainerRegister.append($elementRowMessages);


	/* ********************************************************************************* */
	/* 									      NOME										 */
	/* ********************************************************************************* */
	var $elementRowName = buildElement('div', '', 'trix-map-popup-row row', null);
	var $elementLeftColName = buildElement('div', '', generateColClass('trix-map-popup-col-left', 4), null);
	var $elementRightColName = buildElement('div', '', generateColClass('trix-map-popup-col-right', 8), null);
	var $elementSpanName = buildElement('span', '', '', null);
	var $elementInputName = buildElement('input', '', '', { 
		'type':'text', 
		'name':'param-name', 
		'validator':'text;not-empty', 
		'validator-field': _t('label.upper.name') 
	});
	
	$elementSpanName.append( _t('label.upper.name') + ' : ' );
	$elementLeftColName.append($elementSpanName);
	$elementRightColName.append($elementInputName);
	$elementRowName.append($elementLeftColName);
	$elementRowName.append($elementRightColName);
	$elementContainerMapPopupContent.append($elementRowName);


	/* ********************************************************************************* */
	/* 									    LATITUDE									 */
	/* ********************************************************************************* */
	var $elementRowLat = buildElement('div', '', 'trix-map-popup-row row', null);
	var $elementLeftColLat = buildElement('div', '', generateColClass('trix-map-popup-col-left', 4), null);
	var $elementRightColLat = buildElement('div', '', generateColClass('trix-map-popup-col-right', 8), null);
	var $elementSpanLat = buildElement('span', '', '', null);
	var $elementInputLat = buildElement('input', '', '', { 
		'type':'text', 
		'name':'param-lat',
		'validator':'coord;not-empty', 
		'validator-field': _t('label.upper.latitude') 
	});
	
	$elementSpanLat.append( _t('label.upper.latitude') + ' : ' );
	$elementLeftColLat.append($elementSpanLat);
	$elementRightColLat.append($elementInputLat);
	$elementRowLat.append($elementLeftColLat);
	$elementRowLat.append($elementRightColLat);
	$elementContainerMapPopupContent.append($elementRowLat);
	

	/* ********************************************************************************* */
	/* 									    LONGITUDE									 */
	/* ********************************************************************************* */
	var $elementRowLng = buildElement('div', '', 'trix-map-popup-row row', null);
	var $elementLeftColLng = buildElement('div', '', generateColClass('trix-map-popup-col-left', 4), null);
	var $elementRightColLng = buildElement('div', '', generateColClass('trix-map-popup-col-right', 8), null);
	var $elementSpanLng = buildElement('span', '', '', null);
	var $elementInputLng = buildElement('input', '', '', { 
		'type':'text', 
		'name':'param-lng',
		'validator':'coord;not-empty', 
		'validator-field': _t('label.upper.longitude') 
	});
	
	$elementSpanLng.append( _t('label.upper.longitude') + ' : ' );
	$elementLeftColLng.append($elementSpanLng);
	$elementRightColLng.append($elementInputLng);
	$elementRowLng.append($elementLeftColLng);
	$elementRowLng.append($elementRightColLng);
	$elementContainerMapPopupContent.append($elementRowLng);


	/* ********************************************************************************* */
	/* 									      TAGS										 */
	/* ********************************************************************************* */
	var $elementRowTags = buildElement('div', '', 'trix-map-popup-row row', null);
	var $elementLeftColTags = buildElement('div', '', generateColClass('trix-map-popup-col-left', 4), null);
	var $elementRightColTags = buildElement('div', '', generateColClass('trix-map-popup-col-right', 8), null);
	var $elementSpanTags = buildElement('span', '', '', null);
	var $elementInputTags = buildElement('input', '', '', { 
		'type':'text', 
		'name':'param-tags',
		'validator':'csv;not-empty', 
		'validator-field': _t('label.upper.tags') 
	});
	
	$elementSpanTags.append( _t('label.upper.tags') + ' : ' );
	$elementLeftColTags.append($elementSpanTags);
	$elementRightColTags.append($elementInputTags);
	$elementRowTags.append($elementLeftColTags);
	$elementRowTags.append($elementRightColTags);
	$elementContainerMapPopupContent.append($elementRowTags);
	
	$elementContainerRegister.append($elementContainerMapPopupContent);


	/* ********************************************************************************* */
	/* 									     BOTOES										 */
	/* ********************************************************************************* */
	var $elementRowButtons = buildElement('div', '', 'trix-map-popup-row row', null);
	var $elementColButtons = buildElement('div', '', generateColClass('trix-container-buttons', 12), null);
	var $elementButtonRegister = buildElement('button', '', 'trix-button', { 
		'action':'register',
		'title':_t('tool.tip.new') 
	});
	var $elementButtonHide = buildElement('button', '', 'trix-button', { 
		'action':'hide',
		'title':_t('tool.tip.cancel') 
	});
	
	$elementButtonRegister.append( _t('label.upper.register') );
	$elementButtonHide.append( _t('label.upper.cancel') );
	$elementColButtons.append($elementButtonRegister);
	$elementColButtons.append($elementButtonHide);
	$elementRowButtons.append($elementColButtons);
	$elementContainerRegister.append($elementRowButtons);

	initAction($elementButtonRegister);
	initAction($elementButtonHide);
	

	/* ********************************************************************************* */
	/* 								  CONTAINER MAP POPUP								 */
	/* ********************************************************************************* */
	$elementContainerMapPopup.append($elementContainerRegister);
}


/**
 * Constroi o container interno da lista.
 */
function buildList() {
	var $elementContainerMapPopup = $('#trix-container-map-popup');
	var $elementContainerList = buildElement('div', '', generateColClass('trix-map-popup-list', 12), null);
	var $elementContainerMapPopupContent = buildElement('div', 
														'trix-container-map-popup-content', 
														generateColClass('', 12), 
														null);
	$elementContainerMapPopup.empty();
	
	/* ********************************************************************************* */
	/* 									    TITULO										 */
	/* ********************************************************************************* */
	var $elementRowTitle = buildElement('div', '', 'trix-map-popup-title row', null);
	var $elementColTitle = buildElement('div', '', generateColClass('', 12), null);
	var $elementSpanTitle = buildElement('span', '', '', null);
	
	$elementSpanTitle.append( _t('label.container.title.list') );
	$elementColTitle.append($elementSpanTitle);
	$elementRowTitle.append($elementColTitle);
	$elementContainerList.append($elementRowTitle);


	/* ********************************************************************************* */
	/* 									    MENSAGES									 */
	/* ********************************************************************************* */
	var $elementRowMessages = buildElement('div', '', 'row', null);
	var $elementColMessages = buildElement('div', 'trix-container-messages', generateColClass('', 12), null);
	
	$elementRowMessages.append($elementColMessages);
	$elementContainerList.append($elementRowMessages);

	
	/* ********************************************************************************* */
	/* 									     BUSCAR										 */
	/* ********************************************************************************* */
	var $elementRowSearch = buildElement('div', '', 'row', null);
	var $elementColSearch = buildElement('div', 'trix-container-search', generateColClass('', 12), null);
	var $elementInputSearch = buildElement('input', '', '', { 
		'type':'text', 
		'name':'param-search',
		'placeholder':_t('label.placeholder.search')
	});
	var $elementButtonSearch = buildElement('button', '', 'trix-button trix-button-search', {
		'action':'search',
		'title':_t('tool.tip.search')
	})
	$elementColSearch.append($elementInputSearch);
	$elementColSearch.append($elementButtonSearch);
	$elementRowSearch.append($elementColSearch);
	$elementContainerList.append($elementRowSearch);
	
	initAction($elementButtonSearch);
	
	
	/* ********************************************************************************* */
	/* 								  LISTA DE MARCADORES								 */
	/* ********************************************************************************* */
	for (var indexListMarkers = 0; indexListMarkers < markers.length; indexListMarkers++) {
		var listMarker = markers[indexListMarkers];
		
		$elementContainerMapPopupContent.append( buildListItem(listMarker.id, listMarker.name) );
	}

	$elementContainerList.append($elementContainerMapPopupContent);
	
	
	/* ********************************************************************************* */
	/* 									     BOTOES										 */
	/* ********************************************************************************* */
	var $elementRowButtons = buildElement('div', '', 'trix-map-popup-row row', null);
	var $elementColButtons = buildElement('div', '', generateColClass('trix-container-buttons', 12), null);
	var $elementButtonHide = buildElement('button', '', 'trix-button', { 
		'action':'hide',
		'title':_t('tool.tip.hide') 
	});
	
	$elementButtonHide.append( _t('label.upper.cancel') );
	$elementColButtons.append($elementButtonHide);
	$elementRowButtons.append($elementColButtons);
	$elementContainerList.append($elementRowButtons);

	initAction($elementButtonHide);
	
	
	/* ********************************************************************************* */
	/* 								  CONTAINER MAP POPUP								 */
	/* ********************************************************************************* */
	$elementContainerMapPopup.append($elementContainerList);
}

/**
 * Constroi um item da lista.
 */
function buildListItem(id, name) {
	var $elementContainerItemContent = buildElement('div', '', 
			generateColClass('col-xs-offset-1 trix-container-list-item', 10), null);
	
	
	/* ********************************************************************************* */
	/* 									      NAME										 */
	/* ********************************************************************************* */
	var $elementColName = buildElement('div', '', generateColClass('trix-container-item-name', 10), {
		'item-id':id,
		'action':'plot'
	});
	var $elementSpanName = buildElement('span', '', '', null);
	
	$elementSpanName.append(name);
	$elementColName.append($elementSpanName);
	$elementContainerItemContent.append($elementColName);
	
	initAction($elementColName);
	
	
	/* ********************************************************************************* */
	/* 									     BOTOES										 */
	/* ********************************************************************************* */
	var $elementColButtons = buildElement('div', '', generateColClass('trix-container-item-buttons', 2), null);
	var $elementButtonEdit = buildElement('button', '', 'trix-button trix-button-edit', {
		'item-id':id,
		'action':'edit',
		'title':_t('tool.tip.edit')
	});
	var $elementButtonDelete = buildElement('button', '', 'trix-button trix-button-delete', {
		'item-id':id,
		'action':'delete',
		'title':_t('tool.tip.delete')
	});
	
	$elementColButtons.append($elementButtonEdit);
	$elementColButtons.append($elementButtonDelete);
	$elementContainerItemContent.append($elementColButtons);
	
	initAction($elementButtonEdit);
	initAction($elementButtonDelete);
	

	return $elementContainerItemContent;
}
