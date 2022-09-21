
ALL_FILES = find . -type f -name "*temple*"
for file in ALL_FILES
do
  echo mv "$file" "${file/MP4./}"
  echo "ok"
done