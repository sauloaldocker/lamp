#!/usr/bin/python
# -*- coding: UTF-8 -*-# enable debugging
import cgitb
import os
import sys
import urllib2

cgitb.enable()
print "Content-Type: application/json;charset=utf-8"
print

url = os.environ['QUERY_STRING']
res = 0
try:
	res = urllib2.urlopen(url, None, 3).getcode()
except IOError:
	pass

print """{ "url": "%(url)s", "res": %(res)d }""" % { "url": str(url), "res": res  }
