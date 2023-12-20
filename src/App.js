import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./features/Home/Home";
import NotFound from "./util/404Error/components/NotFound";
import Device from "./features/Devices/components/Device";
import Header from "./util/header/components/Header";
import Footer from "./util/footer/components/Footer";
import Devices from "./features/Devices/components/Devices";
import Upload from "./features/Devices/components/Upload/Upload";

function App() {
  return (
    <BrowserRouter >
      <div className="bg-light dark:bg-dark duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/devices/upload" element={<Upload />} />
          <Route path="/devices/:postId" element={<Device />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
