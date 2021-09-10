
// if (localStorage.getItem('cookieSeen') != 'shown') {
//     $('.cookie-banner').delay(2000).fadeIn();
//     localStorage.setItem('cookieSeen','shown')
// };

// $('.close').click(function() {
//     $('.cookie-banner').fadeOut();
//   })

(function() {
	if (!localStorage.getItem('cookieconsent')) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(request.responseText);
				var eu_country_codes = ['AL','AD','AM','AT','BY','BE','BA','BG','CH','CY','CZ','DE','DK','EE','ES','FO','FI','FR','GB','GE','GI','GR','HU','HR','IE','IS','IT','LT','LU','LV','MC','MK','MT','NO','NL','PO','PT','RO','RU','SE','SI','SK','SM','TR','UA','VA'];
				if (eu_country_codes.indexOf(data.countryCode) != -1) {
					document.body.innerHTML += '\
					<div class="cookieconsent" style="position:fixed;padding:20px;left:10%;bottom:5%;background-color:white;color:#333645;text-align:center;width:80%;z-index:99999; border: 1px solid #999aa2; border-radius: 3px; box-shadow: 0 5px 35px rgba(0,0,0,.1);">\
                    This site uses cookies. By continuing to use this website, you agree to their use. \
                    <a href="#" style="color:white; background-color: #2ecc71; margin-left: 10px; padding: 10px 15px; text-decoration: none; border-radius: 3px;">I Understand</a>\
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