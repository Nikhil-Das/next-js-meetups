import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
// import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  //   const router = useRouter();
  //   const meetupId = router.query.meetupId;
  //   console.log(`meetupId : ${meetupId}`);

  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://gnikhildas98:8uYTJgrUzjAIDyxa@cluster0.gidmgfr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),

    // paths: [
    //   {
    //     params: {
    //       meetupId: "64a6c708a4e9fbab54b983b5",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;
  // console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://gnikhildas98:8uYTJgrUzjAIDyxa@cluster0.gidmgfr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  // console.log(meetup);

  client.close();

  return {
    props: {
      meetupData: {
        image: meetup.image,
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetails;
