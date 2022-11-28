
import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";

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
      <li className={classes.item}>
        <img src={`/${image}`} alt="" width="120" />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
          </div>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableData}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              
                
            
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};

export default EventItem;
