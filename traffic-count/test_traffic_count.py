from traffic_count import traffic_count
import pytest

def test_traffic_count_a1():
	a1 = [23,24,34,45,43,23,57,34,65,12,19,45, 54,65,54,43,89,48,42,55,22,69,23,93]
	r1 = [('4:00pm', 45), ('5:00pm', 65), ('6:00pm', 89), ('7:00pm', 93)]
	assert traffic_count(a1) == r1

def test_traffic_count_a2():
	a2 = [22, 31, 70, 22, 49, 62, 38, 26, 44, 43, 67, 30, 76, 77, 18, 47, 42, 57, 30, 38, 87, 94, 7, 18]
	r2 = [('4:00pm', 70), ('5:00pm', 67), ('6:00pm', 77), ('7:00pm', 94)]
	assert traffic_count(a2) == r2
