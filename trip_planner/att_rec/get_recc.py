import json
import pickle
import pandas as pd
import re
import sys
from .attractions_recc import *

class getRecom:
    def __init__(self):
        self.dataRecomOutput1 = {}
        self.dataRecomOutput2 = {}
        self.dataRecomOutput3 = {}
        self.flag = 0
        self.att_df = pd.DataFrame()
        print("hello from constructor")

    def readData(self):
        att_df = pd.read_json('G:/ITRS/etl/attractions.json',orient='records')
        return att_df

    def attractionReco(self,ruName,rdestinationCity,rminBudget,rmaxBudget,rstartDate,rendDate,rcategory1,rcat1Rating,rcategory2,rcat2Rating,rcategory3,rcat3Rating,rcategory4,rcat4Rating,rcategory5,rcat5Rating):

        #ruName,rdestinationCity,rminBudget,rmaxBudget,rstartDate,rendDate,rcategory1,rcat1Rating,rcategory2,rcat2Rating,rcategory3,rcat3Rating,rcategory4,rcat4Rating,rcategory5,rcat5Rating
        print("\n\nattrec 1----------------------------------------------------------------")
        
        if(self.flag == 0):
            self.flag = 1
            self.att_df = self.readData()

        print("\n\nattrec 2-----------------------------------------------------------")

        uname = ruName
        place = rdestinationCity
        budget = (rminBudget,rmaxBudget)
        start = rstartDate
        end = rendDate

        print("\n\nattrec 3-----------------------------------------------------------------------")

        print(uname)
        print(place)
        print(start)
        print(end)
        print(budget)

        category_df = self.att_df.groupby('category').size().reset_index().sort_values([0],ascending=False)[:20]
        categories = list(category_df.category.values)
        cat_rat = dict()
        cat_rat = {
            rcategory1: rcat1Rating, 
            rcategory2: rcat2Rating, 
            rcategory3: rcat3Rating, 
            rcategory4: rcat4Rating, 
            rcategory5: rcat5Rating
        }

        print(categories)
        print(cat_rat)

        user_name = re.sub(' ','_',uname.lower())
        province = re.sub(' ','_',place.lower())
        (low,high) = tuple([float(i) for i in budget])
        begin_date = start
        end_date = end
        cat_rating = dict()
        for key, value in cat_rat.items():
            cat_rating[key] = float(value)

        print(user_name)
        print(province)
        print(begin_date)
        print(end_date)
        print(cat_rating)

        print("attrec 4------------------------------------------------------------------")

        filename, user, rbm_att = get_recc(self.att_df, cat_rating)

        with_url = filter_df(filename, user, low, high, province, self.att_df)
        

        print("attrec 5------------------------------------------------------------------")

        final = dict()
        final['timeofday'] = []
        final['image'] = []
        final['name'] = []
        final['location'] = []
        final['price'] = []
        final['rating'] = []
        final['category'] = []

        for i in range(1,4):
            for j in range(2):
                final['timeofday'].append('Morning')
            for j in range(2):
                final['timeofday'].append('Evening')

        for i in range(len(final['timeofday'])): 
            if i%4 == 0: 
                final = top_recc(with_url, final)
            else:
                final = find_closest(with_url, final['location'][-1],final['timeofday'][i], final)

        json_object = json.dumps(final, indent = 4) 
        print(json_object)
    
        print("\n\n1\tretrning output to funcion")

        return json_object