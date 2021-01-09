export default function DoBlock({ icon, header, list }) {
  return (
    <div className={'do-block'}>
      <span className={`img-icon icon-${icon}`}/>
      <h3 className={'title'}>{header}</h3>
      <ul>
        {
          list.map(it => (<li className={'body-text'}>{it}</li>))
        }
      </ul>
    </div>
  );
}
