<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<div id="element-container-map-popup-list">
	<div class="trix-map-popup-list col-xs-12 col-sm-12 col-md-12 col-lg-12">
		<div class="trix-map-popup-title row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<span data-i18n="label.container.title.list"></span>
			</div>
		</div>
		<!-- --------------------------------- MENSAGENS ------------------------------------- -->
		<div id="element-container-messages-list" class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<span></span>
		</div>
		<!-- ----------------------------------- BUSCA ----------------------------------- -->
		<div class="trix-map-popup-search col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input type="text" name="param-search" data-i18n="[placeholder]label.placeholder.search;" />
			<button action="search" class="trix-button trix-button-search"
			 data-i18n="[title]tool.tip.search"></button>
		</div>
		<!-- ----------------------------------- LISTA ----------------------------------- -->
		<div id="element-container-list"
		 class="trix-map-popup-container-list col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<script> buildList(); </script>
		</div>
		<!-- ---------------------------------- BUTTONS ------------------------------------ -->
		<div class="trix-container-buttons col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<button class="trix-button" action="refresh"
			 data-i18n="[title]tool.tip.list;label.upper.refresh" ></button>
			<button class="trix-button" action="hide" value="list" 
			 data-i18n="[title]tool.tip.hide;label.upper.hide"></button>
		</div>
	</div>
</div>