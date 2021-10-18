

(function() {
	if (!localStorage.getItem('cookieconsent')) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(request.responseText);
				var eu_country_codes = ['AL','AD','AM','AT','BY','BE','BA','BG','CH','CY','CZ','DE','DK','EE','ES','FO','FI','FR','GB','GE','GI','GR','HU','HR','IE','IS','IT','LT','LU','LV','MC','MK','MT','NO','NL','PO','PT','RO','RU','SE','SI','SK','SM','TR','UA','VA'];
				if (eu_country_codes.indexOf(data.countryCode) != -1) {
					document.body.innerHTML += '\
					<div class="cookieconsent">\
                    This site uses cookies. By continuing to use this website, you agree to their use. \
                    <a href="#" class="cookie-btn">I Understand</a>\
                    </div>\
					';
					document.querySelector('.cookieconsent a').onclick = function(e) {
						e.preventDefault();
                        document.querySelector('.cookieconsent').style.display = 'none';
						localStorage.setItem('cookieconsent', true);
					};
				}
			}
		};
		request.open('GET', 'http://ip-api.com/json', true);
		request.send();
	}
})();