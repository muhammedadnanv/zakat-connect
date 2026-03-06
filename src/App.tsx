import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./lib/i18n";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <I18nProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </I18nProvider>
);

export default App;
