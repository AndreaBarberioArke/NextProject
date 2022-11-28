import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../dummy-data";
import EventSummary from "../../components/events/event-detail/EventSummary";
import EventLogistics from "../../components/events/event-detail/EventLogistics";
import EventContent from "../../components/events/event-detail/EventContent";
import { getFeaturedEvents } from "../dummy-data";
export const EventDetail = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.address} image={event.image} imageAlt="" />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetail;
