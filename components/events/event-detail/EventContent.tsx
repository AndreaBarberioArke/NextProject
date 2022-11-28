import classes from "./event-content.module.css";
interface EventContentProps {
  children?: React.ReactNode;
}
const EventContent = (props: EventContentProps) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
