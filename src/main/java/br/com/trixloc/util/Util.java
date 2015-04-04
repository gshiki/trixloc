package br.com.trixloc.util;


public class Util {
	
	/**
	 * Valida um parametro.
	 * @param parameter
	 * @return
	 */
	public static boolean validateParam(String parameter) {
		return parameter != null && !parameter.isEmpty();
	}

}
