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
 * 
 */
function buildMapPopup() {
	
}

/**
 * 
 */
function buildRegister() {
	
}


/**
 * Constroi o container interno da lista.
 */
function buildList() {
	$elementContainerList = $('#element-container-list');

	if(exists($elementContainerList)) {
		$elementContainerList.append( buildListItem(0, 'MARCAODOROOOOOOOOOOOOOO GIGANTEEEEEEEEEEEEEe') );
	}
}

/**
 * Constroi um item da lista.
 */
function buildListItem(id, name) {
	$elementContainerItem = $( document.createElement('div') );
	$elementContainerItemName = $( document.createElement('div') );
	$elementContainerItemButtons = $( document.createElement('div') );

	$elementSpanItemName = $( document.createElement('span') );

	$elementButtonEdit = $( document.createElement('button') );
	$elementButtonDelete = $( document.createElement('button') );
	

	/* ********************************************************************************* */
	/* 									  CONTAINERs									 */
	/* ********************************************************************************* */
	$elementContainerItem.addClass('col-xs-offset-1');
	$elementContainerItem.addClass('trix-container-list-item');
	$elementContainerItem.addClass('col-xs-10 col-sm-10 col-md-10 col-lg-10');

	$elementContainerItemName.addClass('trix-container-item-name');
	$elementContainerItemName.addClass('col-xs-10 col-sm-10 col-md-10 col-lg-10');
	$elementContainerItemName.attr( 'item-id', id);
	$elementContainerItemName.attr( 'action', 'plot');
	initAction($elementContainerItemName);

	$elementContainerItemButtons.addClass('trix-container-item-buttons');
	$elementContainerItemButtons.addClass('col-xs-2 col-sm-2 col-md-2 col-lg-2');


	/* ********************************************************************************* */
	/* 									    TEXTs										 */
	/* ********************************************************************************* */
	$elementSpanItemName.append(name);


	/* ********************************************************************************* */
	/* 								  		BUTTONs										 */
	/* ********************************************************************************* */
	$elementButtonEdit.addClass('trix-button');
	$elementButtonEdit.addClass('trix-button-edit');
	$elementButtonEdit.attr('item-id', id);
	$elementButtonEdit.attr( 'title', _t('tool.tip.edit') );
	$elementButtonEdit.attr( 'action', 'edit' );
	initAction($elementButtonEdit);

	$elementButtonDelete.addClass('trix-button');
	$elementButtonDelete.addClass('trix-button-delete');
	$elementButtonDelete.attr('item-id', id);
	$elementButtonDelete.attr( 'title', _t('tool.tip.delete') );
	$elementButtonDelete.attr( 'action', 'delete' );
	initAction($elementButtonDelete);


	/* ********************************************************************************* */
	/* 									   APPENDs										 */
	/* ********************************************************************************* */
	$elementContainerItemName.append($elementSpanItemName);
	$elementContainerItemButtons.append($elementButtonEdit);
	$elementContainerItemButtons.append($elementButtonDelete);

	$elementContainerItem.append($elementContainerItemName);
	$elementContainerItem.append($elementContainerItemButtons);

	return $elementContainerItem;
}
