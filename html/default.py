#!/usr/bin/python
# -*- coding: UTF-8 -*-# enable debugging
import cgitb
import os
import sys

cgitb.enable()
print "Content-Type: text/html;charset=utf-8"
print


print "<h1>argv</h1>"
print "<table>"
for k in sys.argv:
	print "<tr><td>%s</td></tr>" % (k)
print "</table>"


print "<h1>environ</h1>"
print "<table>"
for k in os.environ:
	print "<tr><td><b>%s</b></td><td>%s</td></tr>" % (k, os.environ[k])
print "</table>"


print "<h1>path</h1>"
print "<table>"
for k in sys.path:
	print "<tr><td>%s</td></tr>" % (k)
print "</table>"
