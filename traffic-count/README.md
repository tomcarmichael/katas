## The Problem

You work for a company that analyzes traffic count at a particular intersection during the peak hours of 4:00 PM to 8:00 PM. Each day, you are given a list that contains the number of vehicles that pass through the intersection every 10 minutes from 4:00 to 8:00 PM.

You are expected to return a list of tuples that each contain the hour and the maximum amount of traffic for each hour.

For example:

``` python
a1 = [23,24,34,45,43,23,57,34,65,12,19,45, 54,65,54,43,89,48,42,55,22,69,23,93]
```



`traffic_count(a1) ==> [('4:00pm', 45), ('5:00pm', 65), ('6:00pm', 89), ('7:00pm', 93)]`

> All values in the given list are integers.

#### Input 

=> a list of integers, each one representing the number of cars that passed in 10 minutes

4pm - 8pm total duration = 4 Hours or 240 minutes
Therefore, input list should contain 24 integers 

#### Output 

=> a list of tuples, each tuple contains an hour (that we start counting 1 hour's duration from),
and the greatest number of traffic observed in one of the 10 min periods for that hour

I.E. => for the first 6 items in input list, return the greatest value as the 2nd item in the first tuple. An integer.

First item in each tuple should be a string formatted 'H:00pm'

H will start at 4, and increment until 7. 

There will be 4 tuples within the returned list of tuples.

#### Algorithm

- Intialise `result` - an empty list that will contain 4 tuples which each contain one of the 4 hours.
- Initialise `traffic_per_hour` - an empty list.
- Divide the given input list into 4 lists, each of six items, pushing each to `traffic_per_hour` in order.
- Iterate over each list using a for a loop and the counter `i`
- Create a tuple containg the the string `'#{i+4}:00pm'` and the largest int in the list
- Append the tuple to `result`
- Return `result`.


#### Edge cases

- If given arg is not a list?
- If given arg is a list but does not contain 24 items?
- If given arg is a list containing items that are not integers?
  