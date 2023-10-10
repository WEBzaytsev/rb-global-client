import ReactDOM from 'react-dom/client'
import './index.scss';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { store } from './redux/store';

import HomePage from './pages/home.tsx';
import FoundersPage from './pages/founders.tsx';
import ChannelPage from './pages/channel.tsx';
import SubscribePage from './pages/subscribe.tsx';
import RoadMapPage from './pages/roadmap.tsx';
import RelocationMapPage from './pages/relocationMap.tsx';
import AboutPage from './pages/about.tsx';
import ErrorPage from './pages/errorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/founders/",
    element: <FoundersPage />,
  },
  {
    path: "/channel/",
    element: <ChannelPage />,
  },
  {
    path: "/subscribe/",
    element: <SubscribePage />,
  },
  {
    path: "/roadmap/",
    element: <RoadMapPage />,
  },
  {
    path: "/relocationmap/",
    element: <RelocationMapPage />,
  },
  {
    path: "/about/",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
)
