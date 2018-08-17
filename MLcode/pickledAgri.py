# -*- coding: utf-8 -*-
"""
Created on Wed Aug 15 16:03:29 2018

@author: simha
"""

from sklearn.externals import joblib
import numpy as np
from sklearn.preprocessing import StandardScaler 
i
sc = StandardScaler()

cropClf = joblib.load('crop.pkl') 
yieldReg = joblib.load('yield.pkl') 

ReturnList=[]
def Xcall(Xnew=[]):
    Xnew=np.array(Xnew)
    Xnew=Xnew.reshape(1,-1)
    Xnew=sc.fit_transform(Xnew)
    ynew=yieldReg.predict(Xnew)
    y2new=cropClf.predict(Xnew)
    y2new=str(y2new)
    ReturnList.append(ynew)
    ReturnList.append(y2new)
    print(ReturnList[0][0],",",ReturnList[1])
    return ReturnList    

from flask import Flask, request, render_template,jsonify
from flask_restful
app = Flask(__name__)
api = restful.Api(app)


class ParseText(restful.Resource):
   def gg():
    return render_template('predictedCrop.html',data=ReturnList)

api.add_resource(ParseText, '/<string:text>')
    
#@app.route('/')



if __name__ == '__main__':
   Xcall([9.7,2.4971,0.267857,1,89.6])
   app.run(debug=False)
   parse=ParseText()















   
   
