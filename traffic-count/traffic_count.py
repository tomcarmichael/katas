def traffic_count(traffic_count_array):
    result = []

    traffic_per_hour = []

    for i in range(0, len(traffic_count_array), 6):
        traffic_per_hour.append(traffic_count_array[i:i+6])

    for i in range(4):
        hourly_tuple = (f'{i+4}:00pm', max(traffic_per_hour[i]))
        result.append(hourly_tuple)

    return result
