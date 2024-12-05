import FrameComponent3 from "../components/frame-component3";
import Page from "../components/page";
import Header1 from "../components/header1";

const WLight1 = () => {
  return (
    <div className="w-full relative bg-wwwhorizonhobbycom-mine-shaft overflow-y-auto flex flex-col items-start justify-start pt-[184.8px] px-0 pb-[12.6px] box-border gap-[100px] leading-[normal] tracking-[normal] mq450:gap-[25px] mq800:gap-[50px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-27xl text-wwwhorizonhobbycom-mercury1 font-wwwhorizonhobbycom-semantic-heading-3">
        <div className="self-stretch bg-wwwhorizonhobbycom-mine-shaft flex flex-col items-start justify-start shrink-0">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-[19px] px-[60px] pb-2.5 mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
            <div className="w-full flex flex-col items-center justify-start py-0 px-[15px] box-border max-w-[1320px] mq1325:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-item-spacing-1-18">
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[413px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[103px] mq800:pr-[103px] mq800:box-border mq1325:pl-[206px] mq1325:pr-[206px] mq1325:box-border">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[55.2px] uppercase font-normal font-inherit mq450:text-[28px] mq450:leading-[33px] mq800:text-[37px] mq800:leading-[44px]">
                    Get Started Under $200
                  </h1>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[31px] text-base text-wwwhorizonhobbycom-mercury font-wwwhorizonhobbycom-semantic-item">
                  <div className="self-stretch relative leading-[19.2px]">
                    <p className="m-0">
                      Unlike RC toys, hobby-grade RC trucks are built to last.
                      You can repair, upgrade, and modify them to your liking.
                      Our entry-level RC trucks are a great value at under $200
                      to
                    </p>
                    <p className="m-0">
                      introduce you to the hobby or give as a gift. As your
                      experience grows, you can build up your RC truck, too. You
                      can’t do that with an RC toy!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent3 />
      </section>
      <Page />
      <div className="w-full h-[13px] !m-[0] absolute right-[0px] bottom-[-0.4px] left-[0px] bg-wwwhorizonhobbycom-mine-shaft shrink-0" />
      <Header1 />
    </div>
  );
};

export default WLight1;
