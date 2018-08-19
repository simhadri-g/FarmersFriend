# -*- coding: utf-8 -*-
"""
Created on Wed Aug 15 16:03:29 2018

@author: simha
"""

from sklearn.externals import joblib
import numpy as np
from sklearn.preprocessing import StandardScaler 

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
    print(cropClf.predict_proba(Xnew))
    y2new=str(y2new)
    ReturnList.append(ynew)
    ReturnList.append(y2new)
    print(ReturnList[0][0],",",ReturnList[1])
    return ReturnList    



import flask
from flask import Flask, request, render_template,jsonify, redirect,url_for
app = Flask(__name__)
app2=Flask(__name__)

arr =[]

@app.route('/', methods=['GET'])
def gg():
    #print(params)
    #print(params)
    arr = []
    AvMo = request.args.get('parameters[AvMoisture]')
    AvDry = request.args.get('parameters[AvDryMatter]')
    AvN = request.args.get('parameters[nitrogen]')
    AvK = request.args.get('parameters[potassium]')
    AvP = request.args.get('parameters[phosphorus]')
    
   # print(type(language))
    print('AV Moisture = ',AvMo,'Av Dry =' ,AvDry,'Av Nitro =',AvN )
    
    print(AvK)
    print(AvP)
    arr = [AvMo,AvN,AvP,AvK,AvDry]
    if  AvK!=None:
        print("X called")
        ReturnList = Xcall(arr)
      
        print (ReturnList)
        #return flask.redirect(flask.url_for('result'))
        return render_template('predictedCrop.html',data=ReturnList)
    else:    
        print("print something")
        return ("hello")
    
    
    
@app.route('/result')
def result():
    print("in welcome")
    return "welcome"

if __name__ == '__main__':
   
   print(arr)
   app.run()
#   print("Xcall not running",arr)
#   Xcall(arr)
#   















   
   
