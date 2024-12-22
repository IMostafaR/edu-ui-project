import { Helmet } from "react-helmet";
import { images } from "../../assets/imgs/index.js";
import NotFoundComponent from "../../components/NotFoundComponent/NotFoundComponent.jsx";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found!</title>
      </Helmet>
      <NotFoundComponent/>
    </>
  );
};

export default NotFound;
