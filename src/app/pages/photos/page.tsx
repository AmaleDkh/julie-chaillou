"use client";

// Components
import Layout from "../../components/Layout/Layout";
import PhotosList from "../../components/PhotosList/PhotosList";

// Style
import "../../../../assets/style/Global.scss";

function Photos() {
  return (
    <Layout>
      <PhotosList />
    </Layout>
  );
}

export default Photos;
