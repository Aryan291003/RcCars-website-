import FrameComponent1 from "../components/frame-component1";
import Container1 from "../components/container1";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";
import Header from "../components/header";

const WLight = () => {
  return (
    <div className="w-full relative bg-wwwhorizonhobbycom-mine-shaft overflow-y-auto flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-col items-start justify-start pt-[194.8px] px-0 pb-[17.6px] box-border gap-[92px] max-w-full mq450:gap-[23px] mq800:gap-[46px] mq800:pt-[54px] mq800:box-border mq1325:pt-[83px] mq1325:pb-5 mq1325:box-border">
        <FrameComponent1 />
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[60px] pb-2 box-border max-w-full mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
          <Container1 />
        </section>
        <section className="self-stretch flex flex-col items-start justify-start max-w-full">
          <FrameComponent />
          <FrameComponent2 />
        </section>
      </main>
      <Header />
    </div>
  );
};

export default WLight;
