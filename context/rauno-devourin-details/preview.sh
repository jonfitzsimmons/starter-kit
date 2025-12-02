#!/bin/bash

# Simple markdown preview using Python HTTP server
# This will serve the file and open it in your browser

PORT=8000
FILE="prototypes/example-resizable-panel.md"

# Check if file exists
if [ ! -f "$FILE" ]; then
    echo "Error: $FILE not found"
    exit 1
fi

echo "Starting preview server on http://localhost:$PORT"
echo "Opening preview in browser..."
echo "Press Ctrl+C to stop the server"

# Start Python server in background
python3 -m http.server $PORT > /dev/null 2>&1 &
SERVER_PID=$!

# Wait a moment for server to start
sleep 1

# Open in browser (macOS)
open "http://localhost:$PORT/$FILE"

# Wait for user to stop
echo ""
read -p "Press Enter to stop the server..."

# Kill the server
kill $SERVER_PID 2>/dev/null
echo "Server stopped"


