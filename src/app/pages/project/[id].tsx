// Next elements
import { GetStaticProps, GetStaticPaths } from "next";

// API URL
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Component
import Layout from "../../components/Layout/Layout";

// Style
import "../../../assets/style/Global.scss";

type Project = {
  id: string;
  title: {
    rendered: string;
  };
  video_url?: {
    guid: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${apiUrl}/posts`);

  const projects: Project[] = await res.json();

  const paths = projects.map((project: Project) => ({
    params: { id: project.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${apiUrl}/posts/${params?.id}`);

    if (!res.ok) {
      return { notFound: true };
    }

    const project: Project = await res.json();

    if (!project) {
      return { notFound: true };
    }

    return { props: { project } };
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return { notFound: true };
  }
};

function Project({ project }: { project: Project }) {
  return (
    <Layout>
      <div className="project-page">
        {project?.video_url?.guid && (
          <video autoPlay muted loop className="project-page__video">
            <source src={project.video_url.guid} type="video/mp4" />
          </video>
        )}
        <div className="project-page__text">
          <h2 className="project-page__text__title">
            {project?.title.rendered}
          </h2>
          <div className="project-page__text__subtitle">Lorem ipsum</div>
          <div className="project-page__text__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Project;
