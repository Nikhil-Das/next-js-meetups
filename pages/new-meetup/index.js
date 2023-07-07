import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();

  async function meetupAddHandler(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Add a new meetup to the list"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={meetupAddHandler} />
    </>
  );
};

export default NewMeetup;
