import PropTypes from "prop-types";

const Tabpanelmargin = ({
  className = "",
  categoryTileCarsTrucksByType,
  rTRVehicles,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-center pt-0 px-0 pb-4 box-border min-w-[172px] max-w-[425px] text-center text-13xl text-color-grey-39 font-wwwhorizonhobbycom-semantic-item mq450:max-w-full ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start py-0 px-[7px] box-border max-w-[424.67px] mq450:max-w-full">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start relative max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <img
              className="h-[261.7px] flex-1 relative max-w-[410.66px] overflow-hidden object-cover mq450:max-w-full"
              loading="lazy"
              alt=""
              src={categoryTileCarsTrucksByType}
            />
          </div>
          <div className="w-[410.7px] !m-[0] absolute bottom-[20px] left-[0px] flex flex-col items-center justify-start py-0 px-28 box-border z-[1]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[19px] mq800:text-7xl mq800:leading-[26px]">
              {rTRVehicles}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Tabpanelmargin.propTypes = {
  className: PropTypes.string,
  categoryTileCarsTrucksByType: PropTypes.string,
  rTRVehicles: PropTypes.string,
};

export default Tabpanelmargin;
