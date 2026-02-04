# Instructions for deploying on Vercel

## 3 Key modifications

1. vite.config.js
- need to add a 'build' to scripts
    (the npm install is for the client folder dependencies)

2. EITHER:

a) server.js
- guesss production versions need to 'build' the app (or the react part)?
- need a 'public' or 'dist' folder, along with some extra packages to get it to work

Then, on Vercel need to add:
    - npm run build
    - client/dist (public didn't work)
    - npm install (this is for the root)

b) vercel.json
- need to create a new file
    (which has a lot of JSON have never seen before)