import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { action as postAction } from './Routes/NewPost';
import reportWebVitals from './reportWebVitals';
import NewPost from './Routes/NewPost';
import RootLayout from './Routes/RootLayOut';
import PostDetails,{ loader  as postDetailsData} from './Routes/PostDetails';
import Posts,{loader as postLoaderData} from './Routes/Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout/>, 
    children:[
      {
        path: "/", 
        element: <Posts />,
        loader:postLoaderData,
        children:[
          {
            path: "/create-post", 
            element: <NewPost />,
            action:postAction,

          },
          {
            path: "/:id", 
            element: <PostDetails />,
            loader:postDetailsData,
          }
        ]
      },
     
    ]
  },
 
]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
