/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     VARIAVEIS E CONSTANTES										 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
var REGEX_TEXT = /^[\w\ ]*/;
var REGEX_NUMBERS = /^\d*/;
var REGEX_COORDINATES = /^-?\d*[[,\.]\d+]?/;
var REGEX_CSV = /^\w*\ *[\ *\,{1}[\w]+\ *]*/;


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		CHAMADAS											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
$(document).ready( function() {
	initValidator();
});


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 FUNCOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Inicializa os campos com validacao.
 */
function initValidator() {
	var $elementsToValidate = $('[validator]');
	
	if (exists($elementsToValidate)) {
		for (var indexValidate = $elementsToValidate.length - 1; indexValidate >= 0; indexValidate--) {
			$elementToValidate = $( $elementsToValidate[indexValidate] );
			
			if (exists($elementToValidate)) {
				$elementToValidate.blur( { elementToVal : $elementToValidate }, validateBlur );
				$elementToValidate.focus( { elementClean : $elementToValidate }, cleanField );
			}
		}
	}
}

/**
 * Valida os campos de um elemento.
 * @param $element
 * @returns {Array}
 */
function validateFields($element) {
	var messages = [];
	var $elementsToValidate = $element.find('[validator]');
	
	if (exists($elementsToValidate)) {
		for (var indexValidate = $elementsToValidate.length - 1; indexValidate >= 0; indexValidate--) {
			$elementToValidate = $( $elementsToValidate[indexValidate] );
			
			if (exists($elementToValidate)) {
				var fieldValidtionMessages = validateField($elementToValidate);
				
				for (var indexMessages = 0; indexMessages < fieldValidtionMessages.length; indexMessages++) {
					messages.push(fieldValidtionMessages[indexMessages]);
				}
			}
		}
	}
	return messages;
}

/**
 * Valida os campos pelo evento Blur.
 * @param event
 */
function validateBlur(event) {
	var $elementToValidate = $( event.data.elementToVal );
	
	if (exists($elementToValidate)) {
		showMessageMapPopup(validateField($elementToValidate));
	}
}

/**
 * Limpa o campo dos erros.
 * @param event
 */
function cleanField(event) {
	var $elementToClean = $( event.data.elementClean );
	
	if (exists($elementToClean)) {
		$elementToClean.removeClass();
	}
}

/**
 * Valida um campo pelo seu valor.
 * @param $field
 * @returns {Array}
 */
function validateField($field) {
	var validationMessages = [];
	
	if (exists($field)) {
		var validatorAttr = $field.attr('validator');
		
		if (exists(validatorAttr)) {
			var validators = validatorAttr.split(';');
			
			for (var indexValidator = validators.length - 1; indexValidator >= 0; indexValidator--) {
				var value = $field.val();
				var validator = validators[indexValidator];
				var fieldName = $field.attr('validator-field');
				
				if (value.length == 0) {
					if (validator == 'not-empty') {
						var mp = new MessagePopup( _t('validator.required', { field : fieldName }), 'error');
						
						validationMessages.push(mp);
						
						$field.addClass('error');
					}
				} else if (validator == 'text') {
					if (!validateText(value)) {
						var mp = new MessagePopup( _t('validator.type.text', { field : fieldName }), 'error');
						
						validationMessages.push(mp);
						
						$field.addClass('error');
					}
					
					$field.val(extractText(value));
					
				} else if (validator == 'number') {
					if (!validateNumber(value)) {
						var mp = new MessagePopup( _t('validator.type.number', { field : fieldName }), 'error');
						
						validationMessages.push(mp);
						
						$field.addClass('error');
					}
					
					$field.val(extractNumber(value));
				
				} else if (validator == 'coord') {
					if (!validateCoordinates(value)) {
						var mp = new MessagePopup( _t('validator.type.coord', { field : fieldName }), 'error');
						
						validationMessages.push(mp);
						
						$field.addClass('error');
					}
					
					$field.val(extractCoord(value));
				
				} else if (validator == 'csv') {
					if (!validateCSV(value)) {
						var mp = new MessagePopup( _t('validator.type.csv', { field : fieldName }), 'error');
						
						validationMessages.push(mp);
						
						$field.addClass('error');
					}
					
					$field.val(extractCSV(value));
				}
			}
		}
	}
	return validationMessages;
}


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 VALIDACOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Verifica se o parametro value passado eh um texto.
 * @param value
 */
function validateText(value) {
	var result = REGEX_TEXT.exec(value);
	return result != null && exists(result[0]);
}


/**
 * Verifica se o parametro value passado eh um numero.
 * @param value
 */
function validateNumber(value) {
	var result = REGEX_NUMBERS.exec(value);
	return result != null && exists(result[0]);
}

/**
 * Verifica se o parametro value passado eh uma coordenada.
 * @param value
 */
function validateCoordinates(value) {
	var result = REGEX_COORDINATES.exec(value);
	return result != null && exists(result[0]);
}

/**
 * Verifica se o parametro value passado eh um texto separado por virgulas.
 * @param value
 */
function validateCSV(value) {
	var result = REGEX_CSV.exec(value);
	return result != null && exists(result[0]);
}


/* ************************************************************************************************* */
/* ************************************************************************************************* */
/* 									     		 EXTRACOES											 */
/* ************************************************************************************************* */
/* ************************************************************************************************* */
/**
 * Extrai todo o texto do value.
 * @param value
 */
function extractText(value) {
	var result = REGEX_TEXT.exec(value);
	if (result == null) {
		return '';
	}
	return result[0];
}

/**
 * Extrai todo o numero do value.
 * @param value
 */
function extractNumber(value) {
	var result = REGEX_NUMBERS.exec(value);
	if (result == null) {
		return '';
	}
	return result[0];
}

/**
 * Extrai toda a coordenada do value.
 * @param value
 */
function extractCoord(value) {
	var result = REGEX_COORDINATES.exec(value);
	if (result == null) {
		return '';
	}
	return result[0];
}

/**
 * Extrai todo o csv do value.
 * @param value
 */
function extractCSV(value) {
	var result = REGEX_CSV.exec(value);
	if (result == null) {
		return '';
	}
	return result[0];
}
