import Link from "next/link";

type EventData = {
  title?: string;
  image?: string;
  date?: string | any;
  location?: string | any;
  id?: string;
};

const EventItem = (props: EventData) => {
  const { title, image, date, location, id } = props;

  const humanReadableData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location?.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <>
      <li>
        <img src={`/${image}`} alt="" width="120"/>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{humanReadableData}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <Link href={exploreLink}>Explore Event</Link>
      </li>
    </>
  );
};

export default EventItem;
