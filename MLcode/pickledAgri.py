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
    y2new=str(y2new)
    ReturnList.append(ynew)
    ReturnList.append(y2new)
    print(ReturnList[0][0],",",ReturnList[1])
    return ReturnList    

if __name__ == '__main__':
   Xcall([9.7,2.4971,0.267857,1,89.6])
   
   
