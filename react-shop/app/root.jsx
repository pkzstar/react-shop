import "../react-shop/app/tailwind.css"
import "../react-shop/app/global.css"
import { Nav } from "./routes/nav";
import { SoilPage } from './routes/soilPage';  // Your Soil Page component


export default function App() {
  return(
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
    <Nav />
    <SoilPage />
    <div className="itemContainerList">
    </div>
    </body>
  </html>
  );
}

