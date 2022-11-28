import { getFeaturedEvents } from "./dummy-data";
import EventItem from "../components/events/EventItem";
import classes from '../components/events/event-item.module.css'
export const HomePage = () => {
  const items = getFeaturedEvents() || [];

  return (
    <div>
      <ul className={classes.list}>
        {items.map((item: string | any) => (
          <EventItem {...item} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
