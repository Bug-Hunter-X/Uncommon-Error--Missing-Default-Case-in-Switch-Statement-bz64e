# Uncommon JavaScript Error: Missing Default Case in Switch Statement

This repository demonstrates a common yet easily overlooked error in JavaScript: the absence of a `default` case in a `switch` statement.  This can lead to unexpected behavior or crashes if the input value doesn't match any of the `case` values.  The provided code showcases this issue and offers a solution.

## The Bug

The `calculate` function uses a `switch` statement to perform arithmetic operations based on the provided `operation` parameter. However, it lacks a `default` case to handle situations where the `operation` is invalid. This results in an error when an unsupported operation is passed.