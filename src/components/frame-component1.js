import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMarginContainerClick = useCallback(() => {
    navigate("/1440w-light");
  }, [navigate]);

  const onMarginContainerClick1 = useCallback(() => {
    // Please sync "RC CARS" to the project
  }, []);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full text-center text-25xl text-wwwhorizonhobbycom-white font-wwwhorizonhobbycom-semantic-item mq800:pl-[30px] mq800:pr-[30px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-56 pb-[25px] box-border gap-4 max-w-[1320px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-14 mq800:pr-14 mq800:box-border mq1325:pl-28 mq1325:pr-28 mq1325:box-border mq1325:max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[149px] box-border max-w-full font-wwwhorizonhobbycom-semantic-heading-3 mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[74px] mq1125:pr-[74px] mq1125:box-border">
          <h1 className="m-0 flex-1 relative text-inherit leading-[52.8px] uppercase font-normal font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[32px] mq800:text-16xl mq800:leading-[42px]">
            FIND YOUR NEXT RC CAR OR TRUCK
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[120px] text-sm mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[60px] mq1125:pr-[60px] mq1125:box-border">
          <div className="w-[632px] relative leading-[18px] flex items-center">
            <span className="w-full">
              <p className="m-0">
                Shop our selection of RC cars, trucks, and motorcycles by making
                your selection below. We’ve got fast
              </p>
              <p className="m-0">
                RC cars for radio control racing, RC monster trucks for stunts
                and backyard bashing, plus a great
              </p>
              <p className="m-0">
                selection of other remote control vehicles like RC rock
                crawlers, RC dirt bikes, and mini RC vehicles for
              </p>
              <p className="m-0">indoor and outdoor adventures.</p>
            </span>
          </div>
        </div>
        <div className="h-[270px] flex flex-row items-start justify-start relative text-base">
          <div
            className="self-stretch flex-1 flex flex-col items-start justify-center py-0 pl-[7px] pr-2 box-border min-w-[255px] cursor-pointer"
            onClick={onMarginContainerClick}
          >
            <div className="self-stretch flex-1 bg-color-grey-39 flex flex-col items-start justify-center min-w-[240px]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start p-2.5 relative gap-item-spacing-10">
                <img
                  className="w-[220px] h-[220px] relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/visualnav-minirccrawlers360x360png@2x.png"
                />
                <div className="!m-[0] absolute w-[calc(100%_-_20px)] top-[219.3px] right-[10px] left-[10px] flex flex-col items-center justify-start py-0 px-[55px] box-border z-[1]">
                  <b className="h-10 relative leading-[20px] flex items-center justify-center">
                    RC Under $200
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-full w-full !m-[0] absolute top-[0px] bottom-[0px] left-[658px] flex flex-col items-start justify-center py-0 pl-[7px] pr-2 box-border min-w-[255px] cursor-pointer"
            onClick={onMarginContainerClick1}
          >
            <div className="self-stretch flex-1 bg-color-grey-39 flex flex-col items-start justify-center min-w-[240px]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start p-2.5 relative gap-item-spacing-10">
                <img
                  className="w-[220px] h-[220px] relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/visualnav-20los1122412-minirccar-360x360png@2x.png"
                />
                <div className="!m-[0] absolute w-[calc(100%_-_20px)] top-[222.3px] right-[10px] left-[10px] flex flex-col items-center justify-start py-0 px-[81px] box-border z-[1]">
                  <b className="h-10 relative leading-[20px] flex items-center justify-center">
                    RC Cars
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
