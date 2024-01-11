# Netflix GPT
 - Create React App
 - Configured Tailwind CSS
 - Header
 - Routing of App
 - Login Form
 - Sign Up Form
 - Form Validation
 - useRef hook
 - Firebase has integrated 
 - User Sign Up with firebase ✅
 - User Sign In with firebase ✅
 - Deployed the app into firebase ✅
 - App gets redirected on successful auth
 - Redux store has been created 
 - updated profile
 - Two bug fixes 
    - when user is signed in , then only allow the user to browse page
    - when user is signed in , don't allow the user to navigate to login page
        - For the above purposes we have moved the useEffect logic to header component which was previously in body component. Also navigation happens only through this useEffect logic
 - Unsubscribed the onAuthStateChanged callback on useEffect clean up function
 - Added constant file and values for user avatar and netflix logo 
 - TMDB sign up and register for API key and access token
 - Integrate TMDB api in browse page to fetch movies data
 - store the movies data inside the redux store
 - Appended movie detail
 - Made a new API call to fetch all video details of a movie based on the movie id
 - Custom hook for Now Playing movies 
 - Create movieSlice
 - Update store with movies data
 - Showing trailer video data by embedding the youtube video 
 - Added tailwind classes to look containers good

 <Delete it tomorrow --> 1:47:00 done


# Features
- Login/Sign Up (for authentication) 
    - Sign In /Sign Up form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in background
        - Title & Description
        - Movie Suggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions