#!/bin/bash

# Load environment variables
source .env

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Uploading uploads directory to server...${NC}"

# Define paths
LOCAL_DIR="tech-stack-studio-website/public/uploads"
REMOTE_DIR="${DESTINATION_PATH}/source/tech-stack-studio-website/public/uploads"

# Check if local directory exists
if [ ! -d "$LOCAL_DIR" ]; then
    echo -e "${RED}Error: Local directory '$LOCAL_DIR' does not exist${NC}"
    exit 1
fi

# Create remote directory
echo -e "${YELLOW}Creating remote directory...${NC}"
ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "mkdir -p ${REMOTE_DIR}"

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to create remote directory${NC}"
    exit 1
fi

# Verify remote directory was created
echo -e "${YELLOW}Verifying remote directory exists...${NC}"
ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "ls -la ${REMOTE_DIR%/*}"

# Upload the entire uploads directory
echo -e "${YELLOW}Uploading files...${NC}"
scp -r "$LOCAL_DIR"/* "${SSH_USERNAME}@${SSH_HOSTMACHINE}:${REMOTE_DIR}/"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Upload completed successfully!${NC}"
    
    # Show what was uploaded
    echo -e "${YELLOW}Files on server:${NC}"
    ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "find '${REMOTE_DIR}' -type f | wc -l | xargs echo 'Total files:'"
else
    echo -e "${RED}❌ Upload failed${NC}"
    exit 1
fi