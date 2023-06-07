# Connect your vite app with supabase, the firebase alternative database tool

- Here is the some step to connect your app with supabase as db tools
  - Sign in to supabase and inside the dashboard create a new project by hitting th `New Project` button.
    > it will take some time to creating your whole project (e.g `api url`, `anon public api key` etc)
  - Then copy those two things(`anon public key` & `public url`) for connect your app, and paste those into the .env file
    > for accessing .env file variable in `vite+react` app, we have to follow something different from vanilla react app. inside the .env variable we have to write those variable with VITE_REACT prefix. Retrieve those variable from .env file in vite we will have no longer access those variable with `process.env.ENV_KEY`. Instead we will have to use `import.meta.env.VITE_ENV_KEY`
  - After that, when supabase will done with creating your project, inside of the project dashboard we will have an sidebar option called api. In this api option we will have some code to connect with supabaseClient simply copy those code and paste it into your `src/config/supabaseclient.js` app. One more thing we have to default export the supabase client from to the file
    ↩️
  ***
  ```js
  import { createClient } from "@supabase/supabase-js";
  const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_PBULIC_URL;
  const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_PUBLIC_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  export default supabase;
  ```
