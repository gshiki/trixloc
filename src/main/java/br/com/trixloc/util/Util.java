package br.com.trixloc.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Classe de metodos de ultilizacao em toda a aplicacao.
 * @author Shiki
 *
 */
public class Util {
	
	private static final SimpleDateFormat FORMATTER_SIMPLE_DATE = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	
	/**
	 * Valida um parametro.
	 * @param parameter
	 * @return
	 */
	public static boolean validateParam(String ...parameter) {
		for (String param : parameter) {
			if (param == null || param.isEmpty()) {
				return false;
			}
		}
		return true;
	}
	
	/**
	 * Formata uma data para o formato simples. DD/MM/YYYY HH:mm:SS
	 * @param date
	 * @return
	 */
	public static String formatToSimpleDate(Date date) {
		return FORMATTER_SIMPLE_DATE.format(date);
	}

}
