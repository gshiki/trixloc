<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	
	<jsp:include page="css.jsp"/>
	
	<title data-i18n="app.title"></title>
</head>
<body>
	<div id="element-container-header" class="row">
		<div class="trix-container-top col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<div id="element-container-logo-menu" class="row">
				<div class="trix-container-logo hidden-xs hidden-sm col-md-3 col-lg-3">
					<div class="trix-container-logo-img col-md-3 col-lg-3">
						<a class="trix-logo-img" href="" data-i18n="[title]tool.tip.home">
							<img data-i18n="[alt]img.alt.logo"
							 src="/TrixLoc/resources/images/map-icon.png" />
						</a>
					</div>
					<div class="trix-container-logo-lnk col-md-9 col-lg-9">
						<a class="trix-logo-lnk" href="" data-i18n="[title]tool.tip.home;app.name"></a>
					</div>
				</div>
				<div class="col-md-9 col-lg-9">
					<jsp:include page="menu.jsp" />
				</div>
			</div>
		</div>
	</div>
