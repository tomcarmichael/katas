def traffic_count(traffic_count_array):
    result = []

    traffic_per_hour = []

    traffic_per_hour.append(traffic_count_array[0:6])
    traffic_per_hour.append(traffic_count_array[6:12])
    traffic_per_hour.append(traffic_count_array[12:18])
    traffic_per_hour.append(traffic_count_array[18:24])

    for i in range(4):
        hourly_tuple = (f'{i+4}:00pm', max(traffic_per_hour[i]))
        result.append(hourly_tuple)

    return result
