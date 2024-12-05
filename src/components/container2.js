import CompleteList from "./complete-list";
import PropTypes from "prop-types";

const Container2 = ({ className = "" }) => {
  return (
    <section
      className={`h-[986px] flex-1 flex flex-col items-start justify-start pt-[340px] px-0 pb-0 box-border max-w-[1320px] text-left text-13xl text-wwwhorizonhobbycom-supernova font-wwwhorizonhobbycom-semantic-heading-3 mq800:h-auto mq800:pt-36 mq800:box-border mq1125:pt-[221px] mq1125:box-border mq1325:max-w-full ${className}`}
    >
      <div className="w-full flex flex-row items-start justify-start max-w-[1320px] shrink-0 mq1325:max-w-full">
        <div className="flex-1 bg-wwwhorizonhobbycom-mine-shaft flex flex-row items-end justify-center flex-wrap content-end pt-[42px] px-12 pb-12 box-border gap-0 max-w-full mq800:pt-[27px] mq800:pb-[31px] mq800:box-border mq1325:pl-6 mq1325:pr-6 mq1325:box-border">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[76.4px] pl-[15px] pr-1.5 box-border gap-[25.7px] min-w-[335px] max-w-[660px] mq800:pb-[50px] mq800:box-border mq800:max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[38.4px] font-normal font-inherit mq450:text-lgi mq450:leading-[23px] mq800:text-7xl mq800:leading-[31px]">
              Product Details
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start gap-[18px] max-w-full text-sm text-wwwhorizonhobbycom-white font-wwwhorizonhobbycom-semantic-item mq800:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[248.8px]">
                <img
                  className="w-[29px] h-[31px] relative"
                  loading="lazy"
                  alt=""
                  src="/image--iconbox.svg"
                />
                <img
                  className="w-[29px] h-[29px] relative"
                  loading="lazy"
                  alt=""
                  src="/image--iconhowto.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[354px] max-w-full mq800:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[22.7px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7.6px]">
                    <h3 className="m-0 relative text-3xl leading-[26.4px] font-extrabold font-inherit text-wwwhorizonhobbycom-supernova inline-block min-w-[106px] mq450:text-lg mq450:leading-[21px]">
                      In The Box
                    </h3>
                    <div className="self-stretch flex flex-col items-start justify-start shrink-0">
                      <div className="self-stretch h-8 relative text-mini leading-[18px] flex items-center shrink-0">
                        1/7 INFRACTION 6S BLX V2 All-Road Truck RTR, Silver
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[7px]">
                        <div className="relative leading-[21px]">
                          Resto-Mod Truck
                        </div>
                        <div className="self-stretch relative leading-[21px]">
                          <ul className="m-0 font-inherit text-inherit pl-[19px]">
                            <li>
                              (1) Spektrum™ Firma™ 100A Smart Waterproof* ESC
                            </li>
                          </ul>
                        </div>
                        <div className="self-stretch relative leading-[21px]">
                          <ul className="m-0 font-inherit text-inherit pl-[19px]">
                            <li>
                              (1) Spektrum™ Firma™ 3660 3900Kv Brushless Motor
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                        <div className="self-stretch relative leading-[21px]">
                          <ul className="m-0 font-inherit text-inherit pl-[19px]">
                            <li>
                              (1) Spektrum™ 2.4GHz DX3 Smart DSMR® 3-Channel
                              Transmitter
                            </li>
                          </ul>
                        </div>
                        <div className="self-stretch relative leading-[21px]">
                          <ul className="m-0 font-inherit text-inherit pl-[19px]">
                            <li>(1) Spektrum™ SR6200A AVC® Receiver</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[21px]">
                      <ul className="m-0 font-inherit text-inherit pl-[19px]">
                        <li>
                          (1) Spektrum™ SPMS651 7kg Waterproof* Metal-Geared
                          Digital Servo
                        </li>
                      </ul>
                    </div>
                    <div className="self-stretch relative leading-[21px]">
                      <ul className="m-0 font-inherit text-inherit pl-[19px]">
                        <li>(1) 1/8 INFRACTION 4X4 3S BLX 4WD Manual</li>
                      </ul>
                    </div>
                  </div>
                  <CompleteList />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.9848] flex flex-row items-start justify-start py-0 px-[15px] box-border min-w-[335px] max-w-[660px] mq450:flex-1 mq800:max-w-full">
            <img
              className="h-[582px] flex-1 relative max-w-[612px] overflow-hidden object-cover mq800:max-w-full"
              loading="lazy"
              alt=""
              src="/ara4315v3t1-a12-f5rnjwu8jpg@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
