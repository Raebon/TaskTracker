import {
  primaryBackgroundColor,
  primaryTextColor,
  secondaryTextColor,
} from "./utils/constants";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContainer from "./layout/PageContainer";

function App() {
  return (
    <div
      className={`${primaryBackgroundColor} min-h-screen text-center ${primaryTextColor} flex flex-col justify-between`}
    >
      <div>
        <Header />
        <PageContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
