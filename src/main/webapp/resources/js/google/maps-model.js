/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var CONS_MAP_CENTER_LAT = -3.7407282;
var CONS_MAP_CENTER_LNG = -38.4916115;
var CONS_MAP_ICON_SHADOW = '/TrixLoc/resources/images/map-marker-shadow.png';
var CONS_MAP_ICON_GREEN = '/TrixLoc/resources/images/map-marker-green.png';

/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Representa uma mensagem para o MapPopup.
 */
function MessagePopup(message, type) {
	this.message = message;
	this.type = type;
}

/**
 * Representa um objeto Marcador.
 */
function Marker(id) {
	// DADOS DO OBJETO
	this.id = id;
	this.lat = CONS_MAP_CENTER_LAT;
	this.lng = CONS_MAP_CENTER_LNG;
	this.icon = CONS_MAP_ICON_GREEN;
	this.name = _t('label.upper.marker');
	this.dateCreated = '00/00/0000';
	this.tags = new Array();
	this.address = '';
	this.info = '';
	this.googleOBJ = null;
}

/**
 * Representa um objeto Tag.
 */
function Tag(id) {
	this.id = id;
	this.name = _t('label.upper.tag');
	this.dateCreated = '00/00/0000';
}
