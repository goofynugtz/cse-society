import Head from 'next/head'
import Faculty from '../../components/Faculty';
import Layout from '../../components/Layout';

export default function Home({details}:any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CSE Society &#x2223; Members</title>
      </Head>
      <Layout>
        <Faculty details={details}/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const details = [
    {
      "name": "Anupam Basu",
      "post": "Professor",
      "picture": "/assets/profile_photos/prof11.png",
      "email": "director@admin.nitdgp.ac.in",
      "phone": "+91-3432546397"
    },
    {
      "name": "Abhijit Sharma",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/IMG_20190903_130729_1.jpg",
      "email": "abhijit.sharma@cse.nitdgp.ac.in",
      "phone": "+91-9434789008"
    },
    {
      "name": "Animesh Dutta",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/Animesh_photo.jpg",
      "email": "animesh@cse.nitdgp.ac.in",
      "phone": "+91-9434788180"
    },
    {
      "name": "Anirban Sarkar",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/a_sarkar.jpg",
      "email": "anirban.sarkar@cse.nitdgp.ac.in",
      "phone": "+91-9434002205"
    },
    {
      "name": "Baisakhi Chakraborty",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/baishakhi.jpg",
      "email": "baisakhi.chakraborty@cse.nitdgp.ac.in",
      "phone": "+91-9434788065"
    },
    {
      "name": "Bibhash Sen",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/20191109_220716.jpg",
      "email": "bibhash.sen@cse.nitdgp.ac.in",
      "phone": "+91-9434788161"
    },
    {
      "name": "Dakshina Ranjan Kisku",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/3a3437774af51cc68da217f5a715d59c.jpg",
      "email": "drkisku@cse.nitdgp.ac.in",
      "phone": "+91-9434788044"
    },
    {
      "name": "Debashis Nandi",
      "post": "Professor",
      "picture": "/assets/profile_photos/Debashis_Nandi.jpg",
      "email": "debashis@cse.nitdgp.ac.in",
      "phone": "+91-9434788026"
    },
    {
      "name": "Debasis Mitra",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/Debasis_Mitra.jpg",
      "email": "debasis@cse.nitdgp.ac.in",
      "phone": "+91-9434789012"
    },
    {
      "name": "Deepanwita Das",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/deepantita.jpg",
      "email": "deepanwita@cse.nitdgp.ac.in",
      "phone": "+91-9434788179"
    },
    {
      "name": "Goutam Sarker",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/55257d0b283ab137c708ff6ab0c27844.jpg",
      "email": "goutam.sarker@cse.nitdgp.ac.in",
      "phone": "+91-9434788025"
    },
    {
      "name": "Jaydeep Howlader",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/7fef36bf258bd6d366d169f96230badd.jpg",
      "email": "jaydeep@cse.nitdgp.ac.in",
      "phone": "+91-9434788178"
    },
    {
      "name": "Mamata Dalui Chakraborty",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/b6d3a9ac24d1b8797f9962b20ff019c0.jpg",
      "email": "mamata.dalui@cse.nitdgp.ac.in",
      "phone": "+91-9434789011"
    },
    {
      "name": "Mousumi Saha",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/m_saha.jpg",
      "email": "mousumi.saha@cse.nitdgp.ac.in",
      "phone": "+91-9434788194"
    },
    {
      "name": "Nanda Dulal Jana",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/Nanda_Dulal_Jana.jpg",
      "email": "nandadulal@cse.nitdgp.ac.in",
      "phone": "+91-9434788181"
    },
    {
      "name": "Parag Kumar Guhathakurta",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/parag.jpg",
      "email": "paragkumar.guhathakurta@cse.nitdgp.ac.in",
      "phone": "+91-9434788159"
    },
    {
      "name": "Prasenjit Choudhury",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/0e6ab1e2592a4e4a35d988ac1c6def4e.jpeg",
      "email": "prasenjit0007@yahoo.co.in",
      "phone": "+91-9434788196"
    },
    {
      "name": "Rajib Kumar Chatterjee",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/rajib.jpg",
      "email": "rajib.chatterjee@cc.nitdgp.ac.in",
      "phone": "+91-9474051285"
    },
    {
      "name": "Sajal Mukhopadhyay",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/Sajal_Mukhopadhyay.jpg",
      "email": "sajal@cse.nitdgp.ac.in",
      "phone": "+91-9434788177"
    },
    {
      "name": "Sandip Karmakar",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/Sandip_Karmakar.jpg",
      "email": "sandip.karmakar@cse.nitdgp.ac.in",
      "phone": "+91-9434789035"
    },
    {
      "name": "Sanghita Bhattacharjee",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/sanghita.jpg",
      "email": "anghita.bhattacharjee@cse.nitdgp.ac.in",
      "phone": "+91-9434789010"
    },
    {
      "name": "Sanjib Sadhu",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/s_sadhu.jpg",
      "email": "sanjib.sadhu@cse.nitdgp.ac.in",
      "phone": "+91-9434788160"
    },
    {
      "name": "Saravanan Chandran",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/a266d596be294c5e82415ad0e3dbba98.jpg",
      "email": "cs@cse.nitdgp.ac.in",
      "phone": "+91-9434788036"
    },
    {
      "name": "Subhankar Majhi",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/Subhankar_Majhi1.jpg",
      "email": "subhankar@cse.nitdgp.ac.in",
      "phone": "+91-3432755302"
    },
    {
      "name": "Subhrabrata Choudhury",
      "post": "Professor",
      "picture": "/assets/profile_photos/330954a48bd563c508c967ae86307b46.jpg",
      "email": "subhrabrata@cse.nitdgp.ac.in",
      "phone": "+91-9434788133"
    },
    {
      "name": "Subrata Nandi",
      "post": "Professor",
      "picture": "/assets/profile_photos/abd4fd9036f1223038b2c9643dad0f18.jpeg",
      "email": "subrata.nandi@cse.nitdgp.ac.in",
      "phone": "+91-9434788158"
    },
    {
      "name": "Suchismita Roy",
      "post": "Professor",
      "picture": "/assets/profile_photos/s_roy_uiwVOgh.jpg",
      "email": "suchismita.roy@cse.nitdgp.ac.in",
      "phone": "+91-9434788122"
    },
    {
      "name": "Sujoy Saha",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/ss1.jpg",
      "email": "sujoy.saha@cse.nitdgp.ac.in",
      "phone": "+91-9434789009"
    },
    {
      "name": "Suvamoy Changder",
      "post": "Associate Professor & Associate Dean (SW)",
      "picture": "/assets/profile_photos/41a49eb1a8aa71689d846c6f196993ce.jpg",
      "email": "suvamoy.changder@cse.nitdgp.ac.in",
      "phone": "+91-9434788094"
    },
    {
      "name": "Suvrojit Das",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/suvrojit.jpg",
      "email": "suvrojit.das@cse.nitdgp.ac.in",
      "phone": "+91-9434788197"
    },
    {
      "name": "Tandra Pal",
      "post": "Professor",
      "picture": "/assets/profile_photos/t_dey2.jpg",
      "email": "tandra.pal@cse.nitdgp.ac.in",
      "phone": "+91-9434788121"
    },
    {
      "name": "Tanmay De",
      "post": "Professor",
      "picture": "/assets/profile_photos/tanmoy_dey.jpg",
      "email": "tanmay.de@cse.nitdgp.ac.in",
      "phone": "+91-9434788123"
    },
    {
      "name": "Monalisa Mandal",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/de2f8ecf0e917bacce25cc3e6bbc1b53.jpg",
      "email": "monalisa.mandal@cse.nitdgp.ac.in",
      "phone": "+91-9337112670"
    },
    {
      "name": "Narayan Murmu",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/69a66561071264281dce4a08347d5c69.jpg",
      "email": "narayan@cse.nitdgp.ac.in",
      "phone": "+91-9434788096"
    },
    {
      "name": "Shyantani Maiti",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/6469e7240d4d47e87a5acb360de62b3d.jpg",
      "email": "shyantani.maiti@cse.nitdgp.ac.in",
      "phone": ""
    },
    {
      "name": "Subhas Chandra Sahana",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/a2967e753bbedd35e93bbd19e6575b73.jpg",
      "email": "subhaschandra.sahana@cse.nitdgp.ac.in",
      "phone": "+91-9402135453"
    },
    {
      "name": "Sujan Kumar Saha",
      "post": "Associate Professor",
      "picture": "/assets/profile_photos/48b7334591df3e9200c034da826b488a.jpg",
      "email": "sujankumar.saha@cse.nitdgp.ac.in",
      "phone": ""
    },
    {
      "name": "Suvadip Batabyal",
      "post": "Assistant Professor",
      "picture": "/assets/profile_photos/dd7ae39c22626d33369c6e4c1d1f7780.jpg",
      "email": "suvadip.batabyal@cse.nitdgp.ac.in",
      "phone": "+91-9477484204"
    }
  ]
  return {props: {details}}
}