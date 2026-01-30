#!/bin/bash
set -e

if [ ! -f .env ]; then
  echo ".env file not found!"
  exit 1
fi

set -a
source .env
set +a

echo "Building static files..."
npm run build

echo "Creating temporary directory on remote server..."
ssh $REMOTE_USER@$REMOTE_HOST "mkdir -p $REMOTE_TEMP_DIR"

echo "Syncing files to remote temp directory..."
rsync -avz --delete $LOCAL_BUILD_DIR/ $REMOTE_USER@$REMOTE_HOST:$REMOTE_TEMP_DIR/

echo "Moving files to target directory with sudo (you'll be prompted for password)..."
ssh -t $REMOTE_USER@$REMOTE_HOST "
  echo 'Removing old files and moving new files...'
  sudo rm -rf $REMOTE_TARGET_DIR/* && sudo mv $REMOTE_TEMP_DIR/* $REMOTE_TARGET_DIR/ && sudo rmdir $REMOTE_TEMP_DIR
"

echo "Deployment complete!"