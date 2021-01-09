import './AnchorButton.css';

export default function AnchorButton({ children, mailTo }) {
  return (
    <a target={"_blank"} rel={"noreferrer"} href={mailTo} className={"anchor-button"}>{children}</a>
  );
}
