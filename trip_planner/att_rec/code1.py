from attractions_recc import *
from IPython.display import display
import ipywidgets as w
import pandas as pd
import re

att_df = pd.read_json('etl/attractions.json',orient='records')

uname = 
place = 
budget = ()
start = 
end =  


#category_df = att_df.groupby('category').size().reset_index().sort_values([0],ascending=False)[:20]
#categories = list(category_df.category.values)
cat_rat = dict()
  

user_name = re.sub(' ','_',uname.value.lower())
province = re.sub(' ','_',place.value.lower())
(low,high) = tuple([float(i) for i in budget.value])
begin_date = start.value
end_date = end.value
cat_rating = dict()
for key, value in cat_rat.items():
    cat_rating[key] = float(value.value)
    
#function to get attractions    
filename, user, rbm_att = get_recc(att_df, cat_rating)

with_url = filter_df(filename, user, low, high, province, att_df)


%%capture
final = dict()
final['timeofday'] = []
final['image'] = []
final['name'] = []
final['location'] = []
final['price'] = []
final['rating'] = []
final['category'] = []

for i in range(1,(end_date - begin_date).days+2):
    for j in range(2):
        final['timeofday'].append('Morning')
    for j in range(2):
        final['timeofday'].append('Evening')

for i in range(len(final['timeofday'])): 
    if i%4 == 0: 
        final = top_recc(with_url, final)
    else:
        final = find_closest(with_url, final['location'][-1],final['timeofday'][i], final)
        

days = (end_date - begin_date).days + 1
display(final_output(days,final))