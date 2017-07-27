# -*- coding:utf-8 -*-
import time
start = time.clock()

import urllib
import urllib2

import json
import csv

with open ('metro_coord.csv','wb') as csvfile_w:
    with open('metro.csv','rb') as csvfile_r:
        writer = csv.writer(csvfile_w)
        reader = csv.DictReader(csvfile_r)

        index = 0
        line_num = 1
        count = 5000 - line_num + 1
        for row in reader:
            index = index + 1
            if (reader.line_num <= line_num):
                continue
            count = count - 1
            if count < 0:
                break
            url = 'http://api.map.baidu.com/place/v2/search?query=' + row['query'].strip() + '&region=' + row['region'].strip() + '&city_limit=true&output=json&scope=2&ak=Qrc3aHbZdONvHowY7ZHXfQbB'
            req = urllib2.Request(url)
            res_data = urllib2.urlopen(req,timeout=10)
            res = res_data.read()
            result = json.loads(res)
            if not(result['message'] == 'ok'):
                print index,row['query'],result['message']
                continue
            if not(result['results'] and result['results'][0].has_key('location')):
                writer.writerow([row['region'],row['query'],row['id']])
                print index,row['query'],'has no location'
                continue
            writer.writerow([row['region'],row['query'],row['id'],result['results'][0]['location']['lng'],result['results'][0]['location']['lat']])
            print index,row['query']

end = time.clock()
print "run time: %f s" % (end - start)
