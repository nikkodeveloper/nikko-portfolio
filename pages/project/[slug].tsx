import { GetStaticProps } from 'next'
import Head  from 'next/head'
import Header from '../../components/header'
import { sanityClient } from '../../sanity'
import imageUrlBuilder from '@sanity/image-url'
import { Project } from '../../typings';

  interface Props {
    project: [Project]
  }

function Project({ project }: Props) {
    return (
        <>
        <div>
            <Head>
                <title>{project[0].projTitle} - nikkoparin.work</title>
                <meta name="description" content="Portfolio - Next.js Learning" />
                <link rel="icon" href="/nikko-parin-work-favicon.png" />
            </Head>
            <div className="w-full min-h-screen bg-dark-blue relative">
                <Header />
                <main className="py-5 px-8 mx-auto max-w-7xl">
                    <div className="mb-10 mt-6 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-700 text-center">Clients / Projects</h2>
                    </div>
                    <div className="w-full flex flex-wrap mb-0 md:mb-16">
                        <div className="w-full md:w-1/2 mb-16 md:mb-0 p-0 md:p-4">
                            <h1 className="text-emerald-500 text-3xl font-medium mb-5">{project[0].projTitle}</h1>
                            <p className="text-gray-300 text-xl mb-8">{project[0].projDescription.children.text}</p>
                            <p className="text-gray-400 text-xl">{project[0].date}</p>
                            <img className="w-44 object-contain mt-10" src={urlFor(project[0].projCover).url()} alt="" />
                        </div>

                        <div className="w-full md:w-1/2 mb-10 md:mb-0 p-0 md:p-4">
                            <h2 className="text-emerald-500 text-2xl font-medium mb-5">Tasks / Duties ( {project[0].position} )</h2>
                            <ul className="list-disc list-inside">
                            {project[0].taskDuties.map((taskDuty: any) => (
                                <li key={taskDuty} className="text-gray-300 text-xl mb-3">{taskDuty}</li>
                            ))};
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-0 md:p-4">
                        <h2 className="text-emerald-500 text-2xl font-medium mb-0 sm:mb-5">Work Output</h2>
                        <span className="block text-md text-gray-400 sm:hidden mb-5">(Tap to open images in new tab)</span>
                        <div className="flex flex-wrap justify-between">
                            {project[0].projOutput.map((projOutput: any) => (
                                <div key={projOutput._key} className="w-1/2 p-1 md:p-2 mb-7">
                                    <a href={urlFor(projOutput.outputImage).url()} target="_blank" rel="noreferrer">
                                        <img className="object-contain border border-gray-900 rounded-md cursor-pointer" src={urlFor(projOutput.outputImage).url()} alt="" />
                                    </a>
                                    {projOutput.outputTitle != false && <h4 className="text-sm text-gray-300 mt-3 block">{projOutput.outputTitle}</h4>}
                                    {projOutput.outputLink != false && <a href={projOutput.outputLink} target="_blank" rel="noreferrer" className="text-sm text-gray-300 block">{projOutput.outputLink}</a>}

                                </div>
                            ))}
                        </div>
                    </div>

                
                
                </main>
                
            </div>
        </div>
        </>
    );
}


export default Project;

const builder = imageUrlBuilder(sanityClient)

  function urlFor(source:any) {
    return builder.image(source)
  }

export const getStaticPaths = async () => {
    const query = `*[_type == "projects"]{
        _id,
        slug
      }`;

      const projects = await sanityClient.fetch(query);
      const paths = projects.map((project: Project) => ({
        params: {
            slug: project.slug
        }
      }));

      return {
          paths,
          fallback: "blocking"
      }
}

export const getStaticProps: GetStaticProps = async ({ params}) => {
    const query = `*[_type == "projects" && slug == $slug]{
        _id,
        _createdAt,
        projTitle,
        projIndustry,
        date,
        position,
        projCover,
        projDescription[0]{children[0]{text}},
        taskDuties[],
        projOutput[]
    }`;



    
  

  const project = await sanityClient.fetch(query,{
      slug: params?.slug
  });

  if(!project) {
      return {
          notFound: true
      }
  }

  return {
      props: {
          project
      },
      revalidate: 60
  };
}