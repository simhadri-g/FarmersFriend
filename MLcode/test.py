# -*- coding: utf-8 -*-
"""
Created on Sun Aug 19 01:24:27 2018

@author: Windows 8.1
"""

from flask import Flask
from flask.ext import restful

app = Flask(__name__)
api = restful.Api(app)

class ParseText(restful.Resource):
    def get(self, text):
        output = text.upper()
        return output

api.add_resource(ParseText, '/<string:text>')

if __name__ == '__main__':
    app.run(debug=True) # debug=True is for testing to see if calls are working.