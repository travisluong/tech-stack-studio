#!/bin/bash

# Load environment variables
source .env

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting upload of public directory to server...${NC}"

# Define local and remote paths
LOCAL_PUBLIC_DIR="tech-stack-studio-website/public"
REMOTE_PUBLIC_DIR="${DESTINATION_PATH}/source/tech-stack-studio-website/public"

# Check if local public directory exists
if [ ! -d "$LOCAL_PUBLIC_DIR" ]; then
    echo -e "${RED}Error: Local public directory '$LOCAL_PUBLIC_DIR' does not exist${NC}"
    exit 1
fi

# Check if there are files to upload
file_count=$(find "$LOCAL_PUBLIC_DIR" -type f | wc -l)
if [ "$file_count" -eq 0 ]; then
    echo -e "${YELLOW}No files found in $LOCAL_PUBLIC_DIR${NC}"
    exit 0
fi

echo -e "${GREEN}Found $file_count files to upload${NC}"

# Create remote directory if it doesn't exist
echo -e "${YELLOW}Creating remote directory structure...${NC}"
ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "mkdir -p ${REMOTE_PUBLIC_DIR}"

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to create remote directory${NC}"
    exit 1
fi

# Upload files using SCP with progress and preserve timestamps
echo -e "${YELLOW}Checking for existing files on server...${NC}"

# Function to get relative path from public directory
get_relative_path() {
    local full_path="$1"
    echo "${full_path#$LOCAL_PUBLIC_DIR/}"
}

# Function to create directory structure on remote server
create_remote_dir() {
    local relative_dir="$1"
    local remote_dir="${REMOTE_PUBLIC_DIR}/${relative_dir}"
    ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "mkdir -p '${remote_dir}'"
}

# Function to check if file exists on server
file_exists_on_server() {
    local relative_path="$1"
    local remote_file="${REMOTE_PUBLIC_DIR}/${relative_path}"
    ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "test -f '${remote_file}'"
}

uploaded_count=0
skipped_count=0
failed_count=0

# Process each file recursively
while IFS= read -r -d '' file; do
    if [ -f "$file" ]; then
        relative_path=$(get_relative_path "$file")
        filename=$(basename "$file")
        dir_path=$(dirname "$relative_path")
        
        # Create directory structure on server if needed
        if [ "$dir_path" != "." ]; then
            create_remote_dir "$dir_path"
        fi
        
        # Check if file already exists on server
        if file_exists_on_server "$relative_path"; then
            echo -e "${YELLOW}⏭️  Skipping $relative_path (already exists on server)${NC}"
            ((skipped_count++))
        else
            echo -e "${GREEN}📤 Uploading $relative_path...${NC}"
            
            # Upload the individual file
            remote_file="${REMOTE_PUBLIC_DIR}/${relative_path}"
            if scp -p "$file" "${SSH_USERNAME}@${SSH_HOSTMACHINE}:'${remote_file}'"; then
                echo -e "${GREEN}✅ Successfully uploaded $relative_path${NC}"
                ((uploaded_count++))
            else
                echo -e "${RED}❌ Failed to upload $relative_path${NC}"
                ((failed_count++))
            fi
        fi
    fi
done < <(find "$LOCAL_PUBLIC_DIR" -type f -print0)

# Summary
echo -e "\n${YELLOW}=== Upload Summary ===${NC}"
echo -e "${GREEN}Uploaded: $uploaded_count files${NC}"
echo -e "${YELLOW}Skipped: $skipped_count files${NC}"
if [ $failed_count -gt 0 ]; then
    echo -e "${RED}Failed: $failed_count files${NC}"
fi

if [ $uploaded_count -gt 0 ] || [ $skipped_count -gt 0 ]; then
    echo -e "${GREEN}✅ Process completed successfully${NC}"
    
    # Show directory structure on server
    echo -e "${YELLOW}Current directory structure on server:${NC}"
    ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "find ${REMOTE_PUBLIC_DIR} -type f | head -20"
    
    total_remote_files=$(ssh "${SSH_USERNAME}@${SSH_HOSTMACHINE}" "find ${REMOTE_PUBLIC_DIR} -type f | wc -l")
    echo -e "${GREEN}Total files on server: $total_remote_files${NC}"
else
    if [ $failed_count -gt 0 ]; then
        echo -e "${RED}❌ Upload process completed with errors${NC}"
        exit 1
    else
        echo -e "${YELLOW}No files needed to be uploaded${NC}"
    fi
fi

echo -e "${GREEN}Upload process completed!${NC}"