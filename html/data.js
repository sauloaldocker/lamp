		var inadd = "127.0.1.1";
		var fnadd = "127.0.0.1";
		var pradd = "data.aflitos.net";
		var data  = {
			//NAME         PROT           IN    FWD  PROXY                   OPEN     IN PORT   FWD PORT PROXY PORT  OUT PORT  TEST
			//             0               1      2      3                      4           5          6          7        8      9
 			"Admin"     : [ "http://" ,  null,  null,  null,    "admin.aflitos.net",      null,      null,      null,    null, false ],
			"Calendar"  : [ "http://" ,  null,  null,  null, "calendar.aflitos.net",      null,      null,      null,    null, true  ],
			"Docs"      : [ "http://" ,  null,  null,  null,     "docs.aflitos.net",      null,      null,      null,    null, true  ],
			"Drive"     : [ "http://" ,  null,  null,  null,    "drive.aflitos.net",      null,      null,      null,    null, true  ],
			"Home"      : [ "https://",  null,  null,  null,     "home.aflitos.net",      null,      null,      null,    null, true  ],
			"Main"      : [ "http://" ,  null,  null,  null,     "mail.aflitos.net",      null,      null,      null,    null, true  ],
			"Sites"     : [ "https://",  null,  null,  null,    "sites.aflitos.net",      null,      null,      null,    null, true  ],
			"Webmail"   : [ "http://" ,  null,  null,  null,  "webmail.aflitos.net",      null,      null,      null,    null, true  ],
			"Work"      : [ "ftp://"  ,  null,  null,  null,     "work.aflitos.net",      null,      null,      null,   ":21", false ],
			"Www"       : [ "http://" ,  null,  null,  null,      "www.aflitos.net",      null,      null,      null,    null, true  ],
			"WWW2"      : [ "http://" ,  null,  null,  null,     "www2.aflitos.net",      null,      null,      null,    null, true  ],

			"Ajenti"    : [ "http://" , inadd, fnadd, pradd,                   null,  ":8001/",  ":8001/",  ":8001/",    null, true  ],
			"BtSync"    : [ "http://" , inadd, fnadd, pradd,                   null,  ":8888/",  ":8888/",  ":8888/",    null, true  ],
			"Gitlab"    : [ "http://" , inadd, fnadd, pradd,                   null, ":10080/", ":10080/", ":10080/",    null, true  ],
			"Gitlab SSH": [ "ssh://"  , inadd, fnadd, pradd,                   null, ":10022/", ":10022/", ":10022/",    null, false ],
			"GateOne"   : [ "http://" , inadd, fnadd, pradd,                   null,  ":8002/",  ":8002/",  ":8002/",    null, true  ],
			"Nginx"     : [ "http://" , inadd, fnadd, pradd,                   null,    ":80/",    ":80/",    ":80/",    null, true  ],
			"Shipyard"  : [ "http://" , inadd, fnadd, pradd,                   null,  ":8000/",  ":8000/",  ":8000/",    null, true  ],
			"Webmin"    : [ "https://", inadd, fnadd, pradd,                   null, ":10000/", ":10000/", ":10000/",    null, true  ],
			"Wordpress" : [ "http://" , inadd, fnadd, pradd,                   null,  ":8080/",  ":8080/",  ":8080/",    null, true  ]
		};
