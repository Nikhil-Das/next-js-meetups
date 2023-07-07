// import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetUpList from "../components/meetups/MeetupList";

// const list = [
//   {
//     id: "1",
//     image: "https://picsum.photos/id/10/1280/960",
//     title: "Meetup 1",
//     address: "Address 1",
//     description: "First Meetup!",
//   },
//   {
//     id: "2",
//     image: "https://picsum.photos/id/16/1280/960",
//     title: "Meetup 2",
//     address: "Address 2",
//     description: "Second Meetup!",
//   },
// ];

const Home = (props) => {
  //   const [meetups, setMeetups] = useState([]);
  //   useEffect(() => {
  //     setMeetups(list);
  //   }, []);

  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Browse the meetups"></meta>
      </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  //Fetch the data during pre rendering of the application on server side
  const client = await MongoClient.connect(
    "mongodb+srv://gnikhildas98:8uYTJgrUzjAIDyxa@cluster0.gidmgfr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupsList = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetupsList.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // number of seconds to reload the page
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //Fetch the data during pre rendering of the application on server side
//   return {
//     props: {
//       meetups: list,
//     },
//   };
// }

export default Home;
