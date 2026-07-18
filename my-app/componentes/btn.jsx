const BtnBase = ({onClick,text}) => {
  return (
    <>
      <button className="border px-6" onClick={onClick}>{text}</button>
    </>
  );
};

export default BtnBase;
