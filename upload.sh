#!/bin/bash

# Load environment variables
source .env

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting upload of files to server...${NC}"

# Define local and remote paths
LOCAL_UPLOADS_DIR="tech-stack-studio-website/public/uploads"
REMOTE_UPLOADS_DIR="${DESTINATION_PATH}/source/tech-stack-studio-website/public/uploads"

# Check if local uploads directory exists
if [ ! -d "$LOCAL_UPLOADS_DIR" ]; then
    echo -e "${RED}Error: Local uploads directory '$LOCAL_UPLOADS_DIR' does not exist${NC}"
    exit 1
fi

# Check if there are files to upload
file_count=$(find "$LOCAL_UPLOADS_DIR" -type f | wc -l)
if [ "$file_count" -eq 0 ]; then
    echo -e "${YELLOW}No files found in $LOCAL_UPLOADS_DIR${NC}"
    exit 0
fi

echo -e "${GREEN}Found $file_count files to upload${NC}"

# Create remote directory if it doesn't exist
echo -e "${YELLOW}Creating remote directory structure...${NC}"
ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "mkdir -p ${REMOTE_UPLOADS_DIR}"

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to create remote directory${NC}"
    exit 1
fi

# Upload files using SCP with progress and preserve timestamps
echo -e "${YELLOW}Checking for existing files on server...${NC}"

# Get list of existing files on server
existing_files=$(ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "find ${REMOTE_UPLOADS_DIR} -type f -printf '%f\n' 2>/dev/null || true")

uploaded_count=0
skipped_count=0
failed_count=0

# Process each file individually
for file in "${LOCAL_UPLOADS_DIR}"/*; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        
        # Check if file already exists on server
        if echo "$existing_files" | grep -q "^${filename}$"; then
            echo -e "${YELLOW}⏭️  Skipping $filename (already exists on server)${NC}"
            ((skipped_count++))
        else
            echo -e "${GREEN}📤 Uploading $filename...${NC}"
            
            # Upload the individual file
            if scp -p "$file" "${SSH_USERNAME}@${SSH_HOSTMACHINE}:${REMOTE_UPLOADS_DIR}/"; then
                echo -e "${GREEN}✅ Successfully uploaded $filename${NC}"
                ((uploaded_count++))
            else
                echo -e "${RED}❌ Failed to upload $filename${NC}"
                ((failed_count++))
            fi
        fi
    fi
done

# Summary
echo -e "\n${YELLOW}=== Upload Summary ===${NC}"
echo -e "${GREEN}Uploaded: $uploaded_count files${NC}"
echo -e "${YELLOW}Skipped: $skipped_count files${NC}"
if [ $failed_count -gt 0 ]; then
    echo -e "${RED}Failed: $failed_count files${NC}"
fi

if [ $uploaded_count -gt 0 ] || [ $skipped_count -gt 0 ]; then
    echo -e "${GREEN}✅ Process completed successfully${NC}"
    
    # Show uploaded files
    echo -e "${YELLOW}Current files on server:${NC}"
    ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "ls -la ${REMOTE_UPLOADS_DIR}"
else
    if [ $failed_count -gt 0 ]; then
        echo -e "${RED}❌ Upload process completed with errors${NC}"
        exit 1
    else
        echo -e "${YELLOW}No files needed to be uploaded${NC}"
    fi
fi

echo -e "${GREEN}Upload process completed!${NC}"