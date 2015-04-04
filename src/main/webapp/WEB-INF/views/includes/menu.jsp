<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<nav class="navbar navbar-default pull-right">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu-to-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="hidden-md hidden-lg navbar-brand" href="" 
			 data-i18n="app.name"></a>
		</div>
		<div id="nav-menu-to-collapse" class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li open-popup="register" class="border-round-4 active">
					<a href="" data-i18n="[title]tool.tip.register">
						<img src="/TrixLoc/resources/images/add-small-icon.png"
						 data-i18n="[alt]img.alt.add.location" />
					</a>
				</li>
				<li open-popup="list" class="border-round-4">
					<a href="" data-i18n="[title]tool.tip.list">
						<img src="/TrixLoc/resources/images/list-small-icon.png"
						 data-i18n="[alt]img.alt.list.locations" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
