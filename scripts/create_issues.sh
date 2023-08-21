#!/bin/sh

# Define el nombre de tu repositorio de GitHub
repository="fabian-martinez/community-saver-web"

# Itera a través de los pasos y crea un milestone para cada uno
for issue in "$@"
do
  echo "Creating issue: $issue"
  gh issue create --title "$issue" --repo "$repository"
done

echo "Milestones created successfully!"

