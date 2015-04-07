package br.com.trixloc.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Locale;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.context.i18n.LocaleContextHolder;

/**
 * Classe de mensagens Json via Java.
 * @author Shiki
 *
 */
public class MessagerUtil {
	
	private static File FILE_TRANSLATION;
	
	/**
	 * Carrega o arquivo de traducao.
	 */
	private static void loadJsonFile() {
		String folderName = "";
		Locale locale = LocaleContextHolder.getLocale();

		folderName += locale.getLanguage();
		folderName += "-";
		folderName += locale.getCountry();
		
		if (!folderName.isEmpty()) {
			File translationFolder = new File("src/main/webapp/resources/locales/" + folderName);
			
			if (translationFolder.exists()) {
				File translationFile = new File(translationFolder.getAbsolutePath() + "/translation.json");
				
				if (translationFile.exists()) {
					FILE_TRANSLATION = translationFile;
				}
			}
		}
	}
	
	/**
	 * Procura o valor de traducao com a chave passada.
	 * @param key
	 * @return
	 */
	public static String translate(String key) {
		String value = key;
		
		if (FILE_TRANSLATION == null) {
			loadJsonFile();
		}
		
		if (FILE_TRANSLATION != null) {
			try {
				int keyPartsCounter = 0;
				String[] keyParts = key.split("\\.");
				
				JSONParser jsonParser = new JSONParser();
				JSONObject jsonObject = (JSONObject) jsonParser.parse(new FileReader(FILE_TRANSLATION));

				do {
					String keyPart = keyParts[keyPartsCounter++];
					
					if (jsonObject.containsKey(keyPart)) {
						if (keyPartsCounter < keyParts.length) {
							jsonObject = (JSONObject) jsonObject.get(keyPart);
						} else {
							value = (String) jsonObject.get(keyPart);
						}
					}
				} while (keyPartsCounter < keyParts.length);
				
				return value;
			} catch (FileNotFoundException e) {
				e.printStackTrace();
				
				return value;
			} catch (IOException e) {
				e.printStackTrace();
				
				return value;
			} catch (ParseException e) {
				e.printStackTrace();
				
				return value;
			}
		}
		return value;
	}

}
