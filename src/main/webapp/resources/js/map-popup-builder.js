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
 * Inicializa as acoes dos botoes.
 */
function initButtonsAction(elementButton) {
	if (exists(elementButton)) {
		var action = $(elementButton).attr('action');
		
		if (action == 'submit') {
			elementButton.click( hideMapPopup );
		} else if (action == 'hide') {
			elementButton.click( hideMapPopup );
		}
	}
}

/**
 * Constroi o conteudo do popup para cadastro de Marcadores.
 */
function buildRegister() {
	$elementContainerPopup = $('#element-container-map-popup');
	
	if (exists($elementContainerPopup)) {
		var $rowTitle;
		var $rowName;
		var $rowDesc;
		var $rowLat;
		var $rowLng;
		var $rowTags;

		var $elementContainerRegister = $( document.createElement('div') );
		var $elementContainerMessages = $( document.createElement('div') );
		var $elementContainerButtons = $( document.createElement('div') );
		
		var $elementSpanTitle = $( document.createElement('span') );
		var $elementSpanMessages = $( document.createElement('span') );
		var $elementSpanLat = $( document.createElement('span') );
		var $elementSpanLng = $( document.createElement('span') );
		var $elementSpanName = $( document.createElement('span') );
		var $elementSpanDesc = $( document.createElement('span') );
		var $elementSpanTags = $( document.createElement('span') );
		
		var $elementFieldLat = $( document.createElement('input') );
		var $elementFieldLng = $( document.createElement('input') );
		var $elementFieldName = $( document.createElement('input') );
		var $elementFieldDesc= $( document.createElement('textarea') );
		var $elementFieldTags = $( document.createElement('input') );

		var $elementButtonSubmit = $( document.createElement('button') );
		var $elementButtonCancel = $( document.createElement('button') );
		
		
		/* ********************************************************************************* */
		/* 									  CONTAINERs									 */
		/* ********************************************************************************* */
		$elementContainerRegister.addClass('trix-map-popup-register');
		$elementContainerRegister.addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');

		$elementContainerMessages.attr('id', 'element-container-messages');
		$elementContainerMessages.addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');

		$elementContainerButtons.addClass('trix-container-buttons');
		$elementContainerButtons.addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');
		
		
		/* ********************************************************************************* */
		/* 									    TEXTs										 */
		/* ********************************************************************************* */
		$elementSpanTitle.append( _t('label.container.title.register') );
		
		$elementSpanLat.append( _t('label.upper.latitude') + ' : ' );
		$elementSpanLng.append( _t('label.upper.longitude') + ' : ' );
		$elementSpanName.append( _t('label.upper.name') + ' : ' );
		$elementSpanDesc.append( _t('label.upper.description') + ' : ' );
		$elementSpanTags.append( _t('label.upper.tags') + ' : ' );
		
		
		/* ********************************************************************************* */
		/* 								  INTPUTs | TEXTAREAs								 */
		/* ********************************************************************************* */
		$elementFieldLat.attr('type', 'text');
		$elementFieldLng.attr('type', 'text');
		$elementFieldName.attr('type', 'text');
		$elementFieldDesc.attr('rows', '4');
		$elementFieldTags.attr('type', 'text');
		
		$elementFieldLat.attr('name', 'param-lat');
		$elementFieldLng.attr('name', 'param-lng');
		$elementFieldName.attr('name', 'param-name');
		$elementFieldDesc.attr('name', 'param-desc');
		$elementFieldTags.attr('name', 'param-tags');


		/* ********************************************************************************* */
		/* 								  		BUTTONs										 */
		/* ********************************************************************************* */
		$elementButtonSubmit.attr( 'title', _t('tool.tip.new') );
		$elementButtonSubmit.attr( 'action', 'submit' );
		$elementButtonSubmit.addClass('trix-button');
		$elementButtonSubmit.append( _t('label.upper.register') );
		initButtonsAction($elementButtonSubmit);

		$elementButtonCancel.attr( 'action', 'hide' );
		$elementButtonCancel.attr( 'title', _t('tool.tip.cancel') );
		$elementButtonCancel.addClass('trix-button');
		$elementButtonCancel.append( _t('label.upper.cancel') );
		initButtonsAction($elementButtonCancel);

		
		/* LINHA TITLE */
		$rowTitle = buildRow($elementSpanTitle, 'trix-map-popup-title', 'col-xs-12 col-sm-12 col-md-12 col-lg-12');
		/* LINHA NAME */
		$rowName = buildRowDoubleColumn($elementSpanName, $elementFieldName, 'trix-map-popup-row', 
				'trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4', 
				'trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8');
		/* LINHA DESC */
		$rowDesc = buildRowDoubleColumn($elementSpanDesc, $elementFieldDesc, 'trix-map-popup-row', 
				'trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4', 
				'trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8');
		/* LINHA LAT */
		$rowLat = buildRowDoubleColumn($elementSpanLat, $elementFieldLat, 'trix-map-popup-row', 
				'trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4', 
				'trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8');
		/* LINHA LNG */
		$rowLng = buildRowDoubleColumn($elementSpanLng, $elementFieldLng, 'trix-map-popup-row', 
				'trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4', 
				'trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8');
		/* LINHA TAGS */
		$rowTags = buildRowDoubleColumn($elementSpanTags, $elementFieldTags, 'trix-map-popup-row', 
				'trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4', 
				'trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8');

		
		/* ********************************************************************************* */
		/* 									   APPENDs										 */
		/* ********************************************************************************* */
		$elementContainerMessages.append($elementSpanMessages);
		$elementContainerButtons.append($elementButtonSubmit);
		$elementContainerButtons.append($elementButtonCancel);
		
		$elementContainerRegister.append($rowTitle);
		$elementContainerRegister.append($elementContainerMessages);
		$elementContainerRegister.append($rowName);
		$elementContainerRegister.append($rowDesc);
		$elementContainerRegister.append($rowLat);
		$elementContainerRegister.append($rowLng);
		$elementContainerRegister.append($rowTags);
		$elementContainerRegister.append($elementContainerButtons);

		
		$elementContainerPopup.empty();
		$elementContainerPopup.append($elementContainerRegister);
	}
}

/**
 * Cria um elemento com uma linha e colunas especificadas como parametro.
 * @param element
 * @param rowClass
 * @param columnsClass
 */
function buildRow(element, rowClass, columnsClass) {
	var $elementRow = $( document.createElement('div') );
	var $elementCols = $( document.createElement('div') );
	
	$elementRow.addClass(rowClass);
	$elementRow.addClass('row');
	$elementCols.addClass(columnsClass);
	
	$elementCols.append(element);
	$elementRow.append($elementCols);
	
	return $elementRow;
}

/**
 * Cria um elemento com uma linha e duas colunas especificadas como parametro.
 * @param firstElement
 * @param secondElement
 * @param rowClass
 * @param firstColumnClass
 * @param secondColumnClass
 */
function buildRowDoubleColumn(firstElement, secondElement, rowClass, firstColunmClass, secondColumnClass) {
	var $elementRow = $( document.createElement('div') );
	var $elementFirst = $( document.createElement('div') );
	var $elementSecond = $( document.createElement('div') );
	
	$elementRow.addClass(rowClass);
	$elementRow.addClass('row');
	$elementFirst.addClass(firstColunmClass);
	$elementSecond.addClass(secondColumnClass);
	
	$elementFirst.append(firstElement);
	$elementSecond.append(secondElement);
	$elementRow.append($elementFirst);
	$elementRow.append($elementSecond);
	
	return $elementRow;
}


/**
 * Constroi o conteudo do popup para listagem dos Marcadores.
 */
function buildList() {
	$elementContainerPopup = $('#element-container-map-popup');
	
	if (exists($elementContainerPopup)) {
		var $rowTitle;
		
		var $elementContainerList = $( document.createElement('div') );
		var $elementContainerMessages = $( document.createElement('div') );
		var $elementContainerButtons = $( document.createElement('div') );
		
		var $elementSpanTitle = $( document.createElement('span') );
		var $elementSpanMessages = $( document.createElement('span') );
		
		var $elementButtonRefresh = $( document.createElement('button') );
		var $elementButtonHide = $( document.createElement('button') );
		
		/* ********************************************************************************* */
		/* 									  CONTAINERs									 */
		/* ********************************************************************************* */
		$elementContainerList.addClass('trix-map-popup-list');
		$elementContainerList.addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');

		$elementContainerMessages.attr('id', 'element-container-messages');
		$elementContainerMessages.addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');

		$elementContainerButtons.addClass('trix-container-buttons');
		$elementContainerButtons.addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');
		
		
		/* ********************************************************************************* */
		/* 									    TEXTs										 */
		/* ********************************************************************************* */
		$elementSpanTitle.append( _t('label.container.title.list') );
		$elementSpanMessages.append( _t('validator.msg.required') );
		
		
		/* ********************************************************************************* */
		/* 								  		BUTTONs										 */
		/* ********************************************************************************* */
		$elementButtonRefresh.attr( 'title', _t('tool.tip.list') );
		$elementButtonRefresh.attr( 'action', 'refresh' );
		$elementButtonRefresh.addClass('trix-button');
		$elementButtonRefresh.append( _t('label.upper.refresh') );
		initButtonsAction($elementButtonRefresh);

		$elementButtonHide.attr( 'action', 'hide' );
		$elementButtonHide.attr( 'title', _t('tool.tip.hide') );
		$elementButtonHide.addClass('trix-button');
		$elementButtonHide.append( _t('label.upper.hide') );
		initButtonsAction($elementButtonHide);
		
		
		/* LINHA TITLE */
		$rowTitle = buildRow($elementSpanTitle, 'trix-map-popup-title', 'col-xs-12 col-sm-12 col-md-12 col-lg-12');
		
		
		/* ********************************************************************************* */
		/* 									   APPENDs										 */
		/* ********************************************************************************* */
		$elementContainerMessages.append($elementSpanMessages);
		$elementContainerButtons.append($elementButtonRefresh);
		$elementContainerButtons.append($elementButtonHide);
		
		$elementContainerList.append($rowTitle);
		$elementContainerList.append($elementContainerMessages);
		$elementContainerList.append($elementContainerButtons);

		$elementContainerPopup.empty();
		$elementContainerPopup.append($elementContainerList);
	}
}
