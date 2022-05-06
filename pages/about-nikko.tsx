import Head from 'next/head'
import Header from '../components/header'
import { sanityClient } from '../sanity'
import imageUrlBuilder from '@sanity/image-url'
import { AboutNikko } from '../typings';


interface Props {
  aboutnikko: [AboutNikko]
}

const AboutNikko = ( { aboutnikko }: Props) => {
  return (
    <div>
      <Head>
        <title>About Nikko - nikkoparin.work</title>
        <meta name="description" content="Portfolio - Next.js Learning" />
        <link rel="icon" href="/nikko-parin-work-favicon.png" />
      </Head>
      <div className="w-full min-h-screen bg-dark-blue">

        <Header />
        <main className="py-5 px-8 mx-auto max-w-7xl">
          <div className="mb-10 mt-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-700 text-center">About Nikko</h2>
          </div>
          <div className="flex flex-wrap items-center flex-auto justify-center md:justify-between flex-col sm:flex-row mb-20">
            <div className="w-full flex flex-wrap items-center mt-10">
              <img className="w-full md:w-2/5 xl:w-1/4 object-contain inline-flex md:mr-20 rounded-md mb-10 md:mb-0" src={urlFor(aboutnikko[0].avatar).url()} alt="" />
              <div className="w-full md:w-2/5 xl:w-2/4">
                <h1 className="text-5xl font-bold text-emerald-500 mb-4">{aboutnikko[0].name}</h1>
                <div className="flex flex-wrap mb-10 divide-none sm:divide-solid md:divide-none xl:divide-solid divide-x divide-gray-800">
                  <h4 className="text-xl font-medium text-gray-400 pr-0 sm:pr-3 md:pr-0 xl:pr-3 w-full sm:w-fit md:w-full xl:w-fit">{aboutnikko[0].email}</h4>
                  <h4 className="text-xl font-medium text-gray-400 pl-0 sm:pl-3 md:pl-0 xl:pl-3 w-full sm:w-fit md:w-full xl:w-fit">{aboutnikko[0].location}</h4>
                </div>
                <p className="text-xl text-gray-700">{aboutnikko[0].aboutIntro.children.text}</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-emerald-500 text-3xl font-medium mb-10">Services</h2>
            <div className="flex flex-wrap justify-between">
              {aboutnikko[0].services.map((service: any) => (
                <div key={service._key} className="w-full md:w-1/2 pr-5 border-2 border-dark-blue hover:bg-zinc-900 hover:border-emerald-900 ease-in duration-300 p-10" key={service._key}>
                    <img className="aspect-square w-12 mb-5" src={urlFor(service.serviceImage).url()} alt="" />
                    <h4 className="text-gray-300 text-2xl mb-3">{service.serviceTitle}</h4>
                    <ul>
                    {service.serviceTools.map((serviceTools: any) => (
                      <li key={serviceTools} className="text-gray-700 text-md rounded-md">{serviceTools}</li>
                    ))}
                    </ul>
                </div>
              ))}
            </div>
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

    const query = `*[_type == "aboutNikko"]{
            _id,
            name,
            email,
            location,
            aboutIntro[0]{children[0]{text}},
            services,
            avatar }`
    ;

    const aboutnikko = await sanityClient.fetch(query);
    return {
      props: { aboutnikko }
    }
  }

  export default AboutNikko;
