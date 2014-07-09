        //http://stackoverflow.com/questions/3922989/how-to-check-if-page-exists-using-javascript
        function returnStatus(address, ref, req, status) {
            console.log("address", address, "return ", req );
	    console.log("removing frame");
            req.src = "";
            req.parentNode.removeChild( req );
	    console.log("frame removed");

            if ( typeof( ref ) !== 'null' ) {
                ref( status );
            }
        }

        function fetchStatus(address, ref) {
            	console.log( "requesting ", address );
		var iframe              = document.createElement( 'iframe');
		iframe.onload           = function () { returnStatus(address, ref, iframe, 200); };
		iframe.onabort          = function () { returnStatus(address, ref, iframe,  -1); };
		iframe.onerror          = function () { returnStatus(address, ref, iframe,   0); };
		iframe.style.visibility = 'hidden';
		iframe.src              = address;
		document.body.appendChild(iframe);
		return;
        }


        function getStatus( ihtml, req_id ) {
            var ref = function ( status ) {
                console.log( "got status ", status, " for request ", ihtml, " id ", req_id );

                var el = document.getElementById( req_id );

                console.log( el );
                if ( status == 404 ) {
                    el.innerHTML = "UP";
                    el.className = "up";

		} else if ( status == 0 ) {
                    el.innerHTML = "ERROR";
                    el.className = "err";

		} else if ( status == 200 ) {
                    el.innerHTML = "UP";
                    el.className = "up";

                } else {
                    el.innerHTML = "UNKNOWN";
                    el.className = "unk";
                }
            };

            fetchStatus( ihtml, ref );
        }

	function url2id( url ) {
		return url.replace(/\//g, "_").replace(/\:/g, "_").replace(/\./g, "_").replace(/\~/g, "_").replace(/\#/g, "_").replace(/\%/g, "_").replace(/\_+/g, "_");
	}



		function load() {
			console.log( data );
			var bdy       = document.getElementsByTagName("body")[0];
			var tbl       = document.createElement("table");

			var he1       = document.createElement("tr");

			var c11       = document.createElement("th");
			var c12       = document.createElement("th");

			c11.innerHTML = "Service";
			c11.rowSpan   = "2";

			c12.innerHTML = "Address";
			c12.colSpan   = "8";

			he1.appendChild( c11 );
			he1.appendChild( c12 );
			tbl.appendChild( he1 );

			var he2       = document.createElement("tr");

			var c21       = document.createElement("th");
			var c22       = document.createElement("th");
			var c23       = document.createElement("th");
			var c24       = document.createElement("th");

			c21.innerHTML = "Internal";
			c21.colSpan   = "2";
			c22.innerHTML = "Forward";
			c22.colSpan   = "2";
			c23.innerHTML = "Proxy";
			c23.colSpan   = "2";
			c24.innerHTML = "Open";
			c24.colSpan   = "2";

			he2.appendChild( c21 );
			he2.appendChild( c22 );
			he2.appendChild( c23 );
			he2.appendChild( c24 );

			tbl.appendChild( he2 );

			var reqs = [];

			for ( var ser in data ) {
				var pro        = data [ ser ][0];

				var adi        = data [ ser ][1];
				var adf        = data [ ser ][2];
				var adp        = data [ ser ][3];
				var ado        = data [ ser ][4];

				var poi        = data [ ser ][5];
				var pof        = data [ ser ][6];
				var pop        = data [ ser ][7];
				var poo        = data [ ser ][8];

				var tst        = data [ ser ][9];

				var pit        = "";
				var pft        = "";
				var ppt        = "";
				var pot        = "";

				if ( poi ) { pit = poi; }
				if ( pof ) { pft = pof; }
				if ( pop ) { ppt = pop; }
				if ( poo ) { pot = poo; }
			
				console.log( pro, adi, adf, adp, ado, poi, pof, pop, poo );

				var alt        = "<b>"+ser+"</b>";
				var ali        = document.createElement("a");
				var alf        = document.createElement("a");
				var alp        = document.createElement("a");
				var alo        = document.createElement("a");

				ali.innerHTML  = pro + adi + pit;
				ali.href       = pro + adi + pit;
				ali.target     = '_blank';

				alf.innerHTML  = pro + adf + pft;
				alf.href       = pro + adf + pft;
				alf.target     = '_blank';

				alp.innerHTML  = pro + adp + ppt;
				alp.href       = pro + adp + ppt;
				alp.target     = '_blank';

				alo.innerHTML  = pro + ado + pot;
				alo.href       = pro + ado + pot;
				alo.target     = '_blank';

				var row        = document.createElement("tr");

				var ce11       = document.createElement("td");

				var ce21       = document.createElement("td");
				var ce22       = document.createElement("td");

				var ce31       = document.createElement("td");
				var ce32       = document.createElement("td");

				var ce41       = document.createElement("td");
				var ce42       = document.createElement("td");

				var ce51       = document.createElement("td");
				var ce52       = document.createElement("td");

				ce22.id        = url2id( "i_" + ali.href );
				ce32.id        = url2id( "f_" + alf.href );
				ce42.id        = url2id( "p_" + alp.href );
				ce52.id        = url2id( "o_" + alo.href );

				ce11.innerHTML = alt;

				if (( adi ) || ( poi )) { ce21.appendChild( ali ); }
				if (( adf ) || ( pof )) { ce31.appendChild( alf ); }
				if (( adp ) || ( pop )) { ce41.appendChild( alp ); }
				if (( ado ) || ( poo )) { ce51.appendChild( alo ); }

				row.appendChild( ce11 );

				row.appendChild( ce21 );
				row.appendChild( ce22 );

				row.appendChild( ce31 );
				row.appendChild( ce32 );

				row.appendChild( ce41 );
				row.appendChild( ce42 );

				row.appendChild( ce51 );
				row.appendChild( ce52 );

				tbl.appendChild( row );

				if ( (( adi ) || ( poi )) && tst ) { reqs.push( [ ali.href, ce22.id ] ); }
				if ( (( adf ) || ( pof )) && tst ) { reqs.push( [ alf.href, ce32.id ] ); }
				if ( (( adp ) || ( pop )) && tst ) { reqs.push( [ alp.href, ce42.id ] ); }
				if ( (( ado ) || ( poo )) && tst ) { reqs.push( [ alo.href, ce52.id ] ); }
			}

			bdy.appendChild( tbl );

			for ( var reqn in reqs ) {
				var req = reqs[ reqn ];
				console.log( req );
				//getStatus( req[0] + 'favicon.ico', req[1] );
				getStatus( req[0], req[1] );
			}

			console.log( reqs );
		};

		window.onload = load;
