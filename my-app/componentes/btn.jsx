const BtnBase = ({onClick,text}) => {
  return (
    <>
      <button className="border px-3" onClick={onClick}>{text}</button>
    </>
  );
};

export default BtnBase;
