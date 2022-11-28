import Link from "next/link";
import classes from "../../styles/Home.module.css";
interface ButtonProps {
  children?: React.ReactNode;
  link?: any;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <Link className={classes.btn} href={props.link}>
        Explore Event
      </Link>
    </>
  );
};
export default Button;
