import numpy as np

# Read input
n = int(input())  # Matrix size

# Read first matrix
A = np.array([list(map(int, input().split())) for _ in range(n)])

# Read second matrix
B = np.array([list(map(int, input().split())) for _ in range(n)])

# Compute matrix multiplication
result = np.dot(A, B)

# Print the result
print(result)
