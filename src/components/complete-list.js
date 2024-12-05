import PropTypes from "prop-types";

const CompleteList = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8.7px] max-w-full text-left text-3xl text-wwwhorizonhobbycom-supernova font-wwwhorizonhobbycom-semantic-item ${className}`}
    >
      <h3 className="m-0 relative text-inherit leading-[26.4px] font-extrabold font-inherit shrink-0 mq450:text-lg mq450:leading-[21px]">
        Needed to Complete
      </h3>
      <div className="w-[544px] flex flex-col items-start justify-start shrink-0 max-w-full text-sm text-wwwhorizonhobbycom-white">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
          <div className="flex-1 relative leading-[21px] inline-block max-w-full">
            <ul className="m-0 font-inherit text-inherit pl-[19px]">
              <li>
                (1) 2S or 3S Hardcase LiPo Battery** with EC5™ or IC5® Connector
              </li>
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
          <div className="flex-1 relative leading-[21px] inline-block max-w-full">
            <ul className="m-0 font-inherit text-inherit pl-[19px]">
              <li>(1) Compatible LiPo Battery Charger</li>
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
          <div className="flex-1 relative leading-[21px] inline-block max-w-full">
            <ul className="m-0 font-inherit text-inherit pl-[19px]">
              <li>(4) AA Transmitter Batteries</li>
            </ul>
          </div>
        </div>
        <div className="relative leading-[21px]">
          <ul className="m-0 font-inherit text-inherit pl-[19px]">
            <li>
              **Maximum battery dimensions 6.5x2.01x1.89 in / 165x51x48mm.
              Minimum battery
            </li>
          </ul>
        </div>
        <div className="relative leading-[21px] z-[1]">specs 5000mAh 50C</div>
      </div>
    </div>
  );
};

CompleteList.propTypes = {
  className: PropTypes.string,
};

export default CompleteList;
