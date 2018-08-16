#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Aug 12 13:50:49 2018

@author: piggy
"""

# Decision Tree Classification

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('crops.csv')
def rep(item):
    if type(item) is str:
        if ',' in item:
            item=item.replace(',','')            
    
    if item == '#DIV/0!':
        item = 1
    return(item)
    #print(item)








X = dataset.iloc[:, 7:]
X = X.applymap(rep)
X = X.astype(float).fillna(0.0)


#Removing those damn 0 columns
lists=['YieldUnitWeight(lb)_set',
 'YieldUnitWeight(lb)_Bau',
 'YieldUnitWeight(lb)_Joh',
 'YieldUnitWeight(lb)_Roberts',
 'YieldUnitWeight(lb)_WEEP',
 'YieldUnitWeight(lb)_Men',
 'YieldUnitWeight(lb)_Guy',
 'YieldUnitWeight(lb)_Mc',
 'YieldUnitWeight(lb)_Mah',
 'YieldUnitWeight(lb)_Sha',
 'YieldUnitWeight(lb)_Sch',
 'YieldUnitWeight(lb)_Atu',
 'YieldUnitWeight(lb)_Zim',
 'YieldUnitWeight(lb)_Scu',
 'YieldUnitWeight(lb)_John',
 'YieldUnitWeight(lb)_Arc',]
X.drop(columns=lists,inplace=True)
list(X)
droplist=[]
count=0
counter=0
for column in X:
    #print(X[column])
    for i in X[column]:
        if i == 0.0:
          counter=counter+1
    if(counter>(len(X[column]*0.8))):
        droplist.append(column)
    #print(column)
    #count=count+1
#print(droplist)
X.drop(columns=droplist,inplace=True)
Y=X.iloc[:,0]
X=X.iloc[:,1:]
#for i in X['N%(dry)_B788']:
#    if i == 0.0:
#        counter=counter+1
#print(len(X['N%(dry)_B788']))



    


y = dataset.iloc[:, 0]






# Splitting the dataset into the Training set and Test set
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.01, random_state = 0)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

# Fitting Decision Tree Classification to the Training set
from sklearn.tree import DecisionTreeClassifier
classifier = DecisionTreeClassifier(criterion = 'entropy', random_state = 0)
classifier.fit(X_train, y_train)

# Predicting the Test set results
#y_pred = classifier.predict(X_test)
#print(y_pred)


#Predicting yield per hectare
# Splitting the dataset into the Training set and Test set
#from sklearn.cross_validation import train_test_split
X2_train, X2_test, y2_train, y2_test = train_test_split(X, Y, test_size = 0.01, random_state = 0)

# Feature Scaling
#from sklearn.preprocessing import StandardScaler
#sc = StandardScaler()
X2_train = sc.fit_transform(X2_train)
X2_test = sc.transform(X2_test)

# Fitting Decision Tree Classification to the Training set
from sklearn.tree import DecisionTreeRegressor
regressor = DecisionTreeRegressor(random_state = 0)
regressor.fit(X2_train, y2_train)

# Predicting the Test set results
y2_pred = regressor.predict(X2_test)
#print(y2_pred)

#print(X_test)
ReturnList=[]
def Xcall(Xnew=[]):
    

    
    Xnew=np.array(Xnew)
    Xnew=Xnew.reshape(1,-1)
    Xnew=sc.transform(Xnew)
    ynew=regressor.predict(Xnew)
    y2new=classifier.predict(Xnew)
    y2new=str(y2new)
    ReturnList.append(ynew)
    ReturnList.append(y2new)
    print(ReturnList)
    return ReturnList    

from flask import Flask, request, render_template,jsonify
from flask.ext import restful
app = Flask(__name__)
api = restful.Api(app)



@app.route('/')
class ParseText(restful.Resoutce):
def gg():
    return render_template('predictedCrop.html',data=ReturnList)

if __name__ == '__main__':
   Xcall([9.7,2.4971,0.267857,1,89.6])
   app.run()




