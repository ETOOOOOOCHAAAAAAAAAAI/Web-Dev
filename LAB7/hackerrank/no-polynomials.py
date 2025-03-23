import numpy as np

# Read polynomial coefficients
coefficients = list(map(float, input().split()))

# Read the value of x
x = float(input())

# Evaluate the polynomial at x
result = np.polyval(coefficients, x)

# Print the result
print(result)
