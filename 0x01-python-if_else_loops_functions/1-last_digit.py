#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
first_string = "Last digit of"
last_digit = number % 10
if last_digit > 5:
	rem = "and is greater than 5"
elif last_digit == 0:
	rem = "and is 0"
else:
	rem = "and is less than 6 and not 0"
print(f"{first_string} {number:d} is {last_digit:d} {rem}")
