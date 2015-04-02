/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var _t;

/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		CHAMADAS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
$(document).ready( function() {
	initTranslations();
});


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Verifica se um elemento JQuery existe no documento.
 */
function exists(element) {
	return element.length;
}

/**
 * Inicializa a traducao das labels.
 */
function initTranslations() {
	i18n.init( {
		resGetPath: '/TrixLoc/resources/locales/__lng__/__ns__.json',
		resPostPath: '/TrixLoc/resources/locales/add/__lng__/__ns__'
	}, function(t) {
		_t = t;
		translateAll(t);
	});
}

/**
 * Traduz todos os elementos com o atributos de traducao.
 * @param t
 */
function translateAll(t) {
	var $elementsToTranslate = $('[data-i18n]');
	
	if (exists($elementsToTranslate)) {
		for(var indexTranslate = 0; indexTranslate < $elementsToTranslate.length; indexTranslate++) {
			var $elementToTranslate = $($elementsToTranslate[indexTranslate]);
			
			if (exists($elementToTranslate)) {
				$elementToTranslate.i18n();
			}
		}
	}
}
