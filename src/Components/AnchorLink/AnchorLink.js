import './AnchorLink.css';

export default function AnchorLink({ children, link }) {
  return (
    <a href={`#${link}`} className={"anchor-link"}>{children}</a>
  );
}
