
async function init() {

	const pagefind = await import('/assets/pagefind/pagefind.js');
	const template = document.getElementById('result-template');

  const urlParams = new URLSearchParams(window.location.search);
  const searchText = urlParams.get('search');

	const form = document.getElementById('search-form');
	form.querySelector('#search').value = searchText;
  const resultContainer = document.getElementById('results');

	pagefind.init();

	form.addEventListener('submit', event => {
		event.preventDefault();
		search(form.querySelector('#search').value);
	});

  // If we already have info in the search box.
  if(form.querySelector('#search').value.length) {
    search(form.querySelector('#search').value);
  }

	function search(terms) {
		if (history.pushState) {
		  const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?search=' + encodeURIComponent(terms);
		  window.history.pushState({path:newurl},'',newurl);
		}

		pagefind.search(terms).then(results => {
			resultContainer.innerHTML = 'Working...';

			if(results.results.length) {
			  const promiseMap = results.results.slice(0, 50).map(async result => {
					const data = await result.data();
					console.log(result.id, data);

					let row = template.content.cloneNode(true);

          // Remove the /assets/ prefix from the link.
          //const token = data.raw_url.split('/')[1];
          // console.log('url', data.raw_url, data.url);
          // const url = data.raw_url.replace('/assets/', '/');

					console.log(result);

					row.querySelector('#title').innerHTML = data.meta.title;
					row.querySelector('#content').innerHTML = data.excerpt;
					row.querySelector('#link').href = data.raw_url;

					return row;
				});

        Promise.all(promiseMap).then(rows => {
          resultContainer.innerHTML = '';
          rows.forEach(row => {
            resultContainer.append(row);
          });
        })
			}

			else {
				resultContainer.innerHTML = 'No results found.';
			}
		});
	}


};


window.addEventListener('DOMContentLoaded', init);