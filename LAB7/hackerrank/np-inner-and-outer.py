import numpy as np

# Read input arrays
A = np.array(list(map(int, input().split())))
B = np.array(list(map(int, input().split())))

# Compute inner and outer product
inner_product = np.inner(A, B)
outer_product = np.outer(A, B)

# Print results
print(inner_product)
print(outer_product)
