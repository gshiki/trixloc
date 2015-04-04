<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<div id="element-container-map-popup-register">
	<div class="trix-map-popup-register col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<div class="trix-map-popup-title row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<span data-i18n="label.container.title.register"></span>
			</div>
		</div>
		<!-- --------------------------------- MENSAGENS -------------------------------- -->
		<div id="element-container-messages-register" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<span></span>
		</div>
		<!-- ----------------------------------- NAME ----------------------------------- -->
		<div class="trix-map-popup-row row">
			<div class="trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<span data-i18n="label.upper.name"></span> : 
			</div>
			<div class="trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8">
				<input type="text" name="param-name" value="" />
			</div>
		</div>
		<!-- ----------------------------------- LAT ------------------------------------- -->
		<div class="trix-map-popup-row row">
			<div class="trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<span data-i18n="label.upper.latitude"></span> : 
			</div>
			<div class="trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8">
				<input type="text" name="param-lat" value="" />
			</div>
		</div>
		<!-- ---------------------------------- LONG ------------------------------------ -->
		<div class="trix-map-popup-row row">
			<div class="trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<span data-i18n="label.upper.longitude"></span> : 
			</div>
			<div class="trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8">
				<input type="text" name="param-lng" value="" />
			</div>
		</div>
		<!-- ---------------------------------- TAGS ------------------------------------ -->
		<div class="trix-map-popup-row row">
			<div class="trix-map-popup-col-left col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<span data-i18n="label.upper.tags"></span> : 
			</div>
			<div
				class="trix-map-popup-col-right col-xs-8 col-sm-8 col-md-8 col-lg-8">
				<input type="text" name="param-tags">
			</div>
		</div>
		<!-- -------------------------------- BUTTONS ----------------------------------- -->
		<div class="trix-container-buttons col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<button action="submit" class="trix-button"
			 data-i18n="[title]tool.tip.new;label.upper.register;"></button>
			<button action="hide" value="register" class="trix-button" 
			 data-i18n="[title]tool.tip.cancel;label.upper.cancel;"></button>
		</div>
	</div>
</div>