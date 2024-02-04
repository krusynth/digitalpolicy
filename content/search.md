---
layout: default
title: Search
permalink: /search/
noindex: true
---

<link href="/assets/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/assets/js/search.js"></script>
<form id="search-form">
	<label for="search">Search</label>
	<input type="text" id="search" name="search">
</form>
<div id="results"></div>

<template id="result-template">
	<article class="search-article">
		<header><h2 id="title"></h2></header>
		<section id="content" class="search-article-excerpt"></section>
		<footer><a id="link" class="btn btn-primary btn-small">Read More</a></footer>
	</article>
</template>