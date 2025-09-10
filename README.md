Docker Setup Steps for Exposure Service

Prerequisites:
Copy docker_env_variables.env file to the project root directory

Steps:

1. Build Docker Image
docker build -t exposureservice:latest .

2. Run Docker Container
docker run -it --env-file .\\docker_env_variables.env -v .\\exposureservice:/home/devpod/exposureservice -m exposureservice:latest /bin/bash

3. Activate Python Virtual Environment
source venv/bin/activate

4. Run the Exposure Service Application
python -m exposureservice.main
