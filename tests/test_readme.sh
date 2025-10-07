#!/bin/bash

# This script checks if the README file ends with a blank line (two newlines).

# The script should be run from the root of the repository.
README_FILE="README"

if [ ! -f "$README_FILE" ]; then
    echo "Error: README file not found at $README_FILE"
    exit 1
fi

# File must exist and have at least 2 characters for this check to be valid in this form.
# A file with just '\n' is 1 byte. A file with '\n\n' is 2 bytes.
if [ $(stat -c%s "$README_FILE") -lt 2 ]; then
  # This handles files that are too small to possibly have two newlines.
  # It also handles the case of an empty file.
  echo "Error: README does not end with a blank line."
  exit 1
fi

# Get the last two characters of the file, preserving any trailing newlines.
# The `echo x` and `${...%x}` trick is a reliable way to capture trailing newlines
# that would otherwise be stripped by command substitution.
last_two_chars=$(tail -c 2 "$README_FILE"; echo x)
last_two_chars=${last_two_chars%x}

# Check if the last two characters are both newlines.
# The `$'...'` syntax is a bash extension for C-style escapes.
if [ "$last_two_chars" = $'\n\n' ]; then
  echo "Success: README ends with a blank line."
  exit 0
else
  echo "Error: README does not end with a blank line."
  exit 1
fi