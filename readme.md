# Tindev
Simple Tinder example for developers.

## Modules
This project is a mono repo consisting in 3 projects:  

**Backend**: The "main" logic behind matchs, likes, dislikes, and how to show users.  
**Frontend**: A React application to use the backend API through the browser. It's using react hooks and was created using `create react-app`.  
**Mobile**: A React native app to use the backend API through smartphones. It can support Android and IOS, but I only tested on Android.  

## How to run
You can run `docker-compose up` to execute the main dockers from the backend and the frontend.  
The backend will run, by default, on port 3333.  
The frontend will run, by default, on port 3000.  

### Manually running
**Backend**: `cd backend && yarn dev`  
**Frontend**: `cd frontend && yarn start`  
**Mobile**: **TBD**