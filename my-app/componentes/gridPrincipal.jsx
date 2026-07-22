import Banner from "../src/assets/banner.jpg";

function GridPrincipal() {
  return (
    <>
      <section className="h-auto flex justify-center items-center flex-col gap-3">
        <div className="banner w-4/5 h-[200px] border mt-6 "></div>
        <div className="w-4/5 h-[200px] border "></div>
        <div className="grid grid-cols-2 w-4/5 gap-x-3">
          <div className="h-[400px] border"></div>
          <div className="grid grid-rows-2 gap-y-3">
            <div className=" border"></div>
            <div className=" border"></div>
          </div>
        </div>
      </section>
    </>
  );
}
export default GridPrincipal;
