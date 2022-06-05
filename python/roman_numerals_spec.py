from roman_numerals import to_roman

print(to_roman(1) == 'I')
print(to_roman(3) == 'III')
print(to_roman(4) == 'IV')

# add tests to cover different edge cases

print(to_roman(99) == 'XCIX')
print(to_roman(949) == 'CMXLIX')
print(to_roman(888) == 'DCCCLXXXVIII')

# output:
# True
# True
# True
# True
# True
# True