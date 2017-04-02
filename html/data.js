		var inadd = "127.0.1.1";
		var fnadd = "127.0.0.1";
		var pradd = "data.aflitos.net";
		var data  = {
			//NAME         PROT           IN    FWD  PROXY                   OPEN     IN PORT   FWD PORT PROXY PORT  OUT PORT  TEST
			//             0               1      2      3                      4           5          6          7        8      9
			//"Calendar"  : [ "http://" ,  null,  null,  null,      "calendar.aflitos.net",      null,      null,      null,    null, true  ],
			//"Docs"      : [ "http://" ,  null,  null,  null,          "docs.aflitos.net",      null,      null,      null,    null, true  ],
			//"Drive"     : [ "http://" ,  null,  null,  null,         "drive.aflitos.net",      null,      null,      null,    null, true  ],
			//"Main"      : [ "http://" ,  null,  null,  null,          "mail.aflitos.net",      null,      null,      null,    null, true  ],
			//"Sites"     : [ "https://",  null,  null,  null,         "sites.aflitos.net",      null,      null,      null,    null, true  ],
			//"Webmail"   : [ "http://" ,  null,  null,  null,       "webmail.aflitos.net",      null,      null,      null,    null, true  ],
			//"Www"       : [ "http://" ,  null,  null,  null,           "www.aflitos.net",      null,      null,      null,    null, true  ],
			//"WWW2"      : [ "http://" ,  null,  null,  null,          "www2.aflitos.net",      null,      null,      null,    null, true  ],

                        "Admin"     : [ "http://" ,  null,  null,  null,          "admin.aflitos.net",      null,      null,      null,    null, false ],
			"Home"      : [ "https://",  null,  null,  null,           "home.aflitos.net",      null,      null,      null,    null, true  ],
			"Work"      : [ "ftp://"  ,  null,  null,  null,           "work.aflitos.net",      null,      null,      null,   ":21", false ],

			"Ajenti"    : [ "http://" , inadd, fnadd, pradd,    "ajenti.data.aflitos.net",  ":8001/",  ":8001/",  ":8001/",    null, true  ],
			"BtSync"    : [ "http://" , inadd, fnadd, pradd,    "btsync.data.aflitos.net",  ":8888/",  ":8888/",  ":8888/",    null, true  ],
			"Codebox"   : [ "http://" , inadd, fnadd, pradd,   "codebox.data.aflitos.net",  ":8003/",  ":8003/",  ":8003/",    null, true  ],
			"Docker UI" : [ "http://" , inadd, fnadd, pradd,  "dockerui.data.aflitos.net",  ":9000/",  ":9000/",  ":9000/",    null, true  ],
			"Jekyll"    : [ "http://" , inadd, fnadd, pradd,    "jekyll.data.aflitos.net",  ":4000/",  ":4000/",  ":4000/",    null, true  ],
			"Gitlab"    : [ "http://" , inadd, fnadd, pradd,    "gitlab.data.aflitos.net", ":10080/", ":10080/", ":10080/",    null, true  ],
			"Gitlab SSH": [ "ssh://"  , inadd, fnadd, pradd,                         null, ":10022/", ":10022/", ":10022/",    null, false ],
			"Nginx"     : [ "http://" , inadd, fnadd, pradd,                         null,    ":80/",    ":80/",    ":80/",    null, false ],
			"OwnCloud"  : [ "http://" , inadd, fnadd, pradd,  "owncloud.data.aflitos.net",  ":7000/",  ":7000/",  ":7000/",    null, true  ],
			"RainLoop"  : [ "http://" , inadd, fnadd, pradd,  "rainloop.data.aflitos.net",  ":9900/",  ":9900/",  ":9900/",    null, true  ],
			"Webmin"    : [ "https://", inadd, fnadd, pradd,    "webmin.data.aflitos.net", ":10000/", ":10000/", ":10000/",    null, true  ],
			"Wordpress" : [ "http://" , inadd, fnadd, pradd, "wordpress.data.aflitos.net",  ":8080/",  ":8088/",  ":8088/",    null, true  ],
			//"GateOne"   : [ "http://" , inadd, fnadd, pradd,   "gateone.data.aflitos.net",  ":8002/",  ":8002/",  ":8002/",    null, true  ],
			//"Shipyard"  : [ "http://" , inadd, fnadd, pradd,                         null,  ":8000/",  ":8000/",  ":8000/",    null, true  ],
			//"OnlyOffice": [ "http://" , inadd, fnadd, pradd,    "office.data.aflitos.net",  ":8888/",  ":8888/",  ":8888/",    null, true  ]
		};

