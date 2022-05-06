
import Head from 'next/head'
import Header from '../components/header'
import Link from "next/link";
import { sanityClient } from '../sanity'
import imageUrlBuilder from '@sanity/image-url'
import { Project } from '../typings';


interface Props {
  projects: [Project]
}

const ClientsProjects = ( { projects }: Props) => {
  
  return (
    <div>
      <Head>
        <title>Clients / Projects - nikkoparin.work</title>
        <meta name="description" content="Portfolio - Next.js Learning" />
        <link rel="icon" href="/nikko-parin-work-favicon.png" />
      </Head>
      <div className="w-full min-h-screen bg-dark-blue">

        <Header />
        <main className="py-5 px-8 mx-auto max-w-7xl">
          <div className="mb-10 mt-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-700 text-center">Clients / Projects</h2>
          </div>
          <div className="flex flex-wrap items-center flex-auto justify-center md:justify-between flex-col sm:flex-row">
            {projects.map(project => (
              <Link key={project._id} href={`/project/${project.slug}`}>
                <div className="mb-12 text-center w-full md:w-1/2 xl:w-1/3 min-h-max">
                  <div className="m-4 mb-3 align-middle flex items-center justify-center rounded-md cursor-pointer bg-gray-900 border-2 border-gray-900 hover:bg-dark-blue hover:border-emerald-900 ease-in duration-300 aspect-square">
                      <img className="w-1/2 object-contain align-middle" src={urlFor(project.projCover).url()} alt="" />
                  </div>
                  <h3 className="text-2xl text-gray-300 font-bold cursor-pointer hover:text-emerald-500 ease-in-out duration-300">{project.projTitle}</h3>
                  <p className="text-sm text-gray-600 cursor-pointer mt-1">{project.projIndustry}</p> 
                </div>
              </Link>

            ))}
          </div>
        </main>


      </div>
    </div>
    )
  }

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source: any) {
    return builder.image(source)
  }


  export const getServerSideProps = async () => {

    const query = `*[_type == "projects"]{
      _id,
      _createdAt,
      projTitle,
      projIndustry,
      projCover,
      slug
    }`;

    const projects = await sanityClient.fetch(query);
    return {
      props: { projects }
    }
  }

  export default ClientsProjects;
