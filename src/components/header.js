import { useCallback } from "react";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const onItemContainerClick = useCallback(() => {
    // Please sync "RC CARS LESS THAN 200$" to the project
  }, []);

  return (
    <header
      className={`w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-wwwhorizonhobbycom-lightning-yellow flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full z-[2] text-left text-sm text-color-grey-39 font-wwwhorizonhobbycom-semantic-item mq800:pl-[30px] mq800:pr-[30px] mq800:box-border ${className}`}
    >
      <div className="!m-[0] absolute top-[-58.8px] left-[0px] flex flex-row items-start justify-start">
        <div className="!m-[0] absolute h-full top-[0px] bottom-[0px] left-[0px] bg-wwwhorizonhobbycom-white overflow-hidden flex flex-row items-start justify-start py-3.5 pl-[21px] pr-5 box-border whitespace-nowrap">
          <h3 className="m-0 relative text-inherit [text-decoration:underline] leading-[21px] font-normal font-inherit">
            Skip to main content
          </h3>
        </div>
        <div className="bg-wwwhorizonhobbycom-white overflow-hidden flex flex-row items-start justify-start py-3.5 pl-[21px] pr-5 z-[1]">
          <h3 className="m-0 relative text-inherit [text-decoration:underline] leading-[21px] font-normal font-inherit">
            Skip to footer content
          </h3>
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start max-w-[1320px] text-center text-5xl text-color-azure-29 font-wwwhorizonhobbycom-semantic-heading-3 mq1325:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between pt-[19px] px-[15px] pb-[1.8px] box-border max-w-[1320px] gap-5 mq1325:max-w-full">
            <div className="h-[58px] w-[305px]" />
            <div className="w-[253px] flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0 box-border">
              <div className="self-stretch h-[73px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <div className="ml-[-14.5px] w-[281.9px] flex flex-row items-start justify-start py-0 pl-[15px] pr-3.5 box-border max-w-[1320px] shrink-0 mq1325:max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start">
                    <div className="flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-[13px] box-border gap-4 max-w-[252px] mq1125:hidden">
                      <div
                        className="flex-[0.746] flex flex-row items-start justify-start pt-[17.6px] px-4 pb-[27px] relative cursor-pointer"
                        onClick={onItemContainerClick}
                      >
                        <a className="[text-decoration:none] relative leading-[32px] uppercase text-[inherit]">
                          Shop
                        </a>
                        <div className="h-1 w-[47px] absolute !m-[0] bottom-[0px] left-[16px] bg-color-azure-29" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[17.6px] pb-0 pl-0 pr-4">
                        <a className="[text-decoration:none] relative leading-[32px] uppercase text-[inherit]">
                          Learn
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[17.6px] px-0 pb-0">
                        <a className="[text-decoration:none] relative leading-[32px] uppercase text-[inherit]">
                          Enjoy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start pt-1.5 pb-0 px-0 box-border max-w-full text-3xs text-wwwhorizonhobbycom-white font-wwwhorizonhobbycom-semantic-item">
              <div className="h-10 flex-1 flex flex-col items-start justify-start text-xs">
                <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                  <div className="self-stretch flex-1 rounded border-wwwhorizonhobbycom-mercury border-[1px] border-solid flex flex-row items-start justify-center py-[11px] px-4 gap-item-spacing-xxs mq800:hidden">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-[13px] w-3 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[14px] mq450:hidden">
                      {" "}
                      Search Name or Part Number
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-0 pb-px pl-[25px] pr-0 text-wwwhorizonhobbycom-milano-red">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-[0.5px] gap-item-spacing-1-5">
                  <div className="flex flex-col items-center justify-start py-0 px-1.5">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon-11.svg"
                      />
                    </div>
                  </div>
                  <a className="[text-decoration:none] relative leading-[16px] capitalize text-[inherit]">
                    Support
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-0 pb-px pl-[25px] pr-0 text-wwwhorizonhobbycom-milano-red">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-[0.5px] gap-item-spacing-1-5">
                  <div className="flex flex-col items-center justify-start py-0 px-[3px]">
                    <div className="flex flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon-11.svg"
                      />
                    </div>
                  </div>
                  <a className="[text-decoration:none] relative leading-[16px] capitalize text-[inherit]">
                    Sign In
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-[25px] pr-0 font-wwwhorizonhobbycom-semantic-heading-3">
                <div className="flex flex-col items-center justify-start pt-0.5 px-0 pb-[0.5px] gap-item-spacing-1-5">
                  <div className="flex flex-col items-start justify-start relative">
                    <div className="overflow-hidden flex flex-col items-start justify-start max-w-[22px]">
                      <div className="overflow-hidden flex flex-col items-center justify-center">
                        <img
                          className="w-[22px] h-[25.1px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/newcarticonsvg.svg"
                        />
                      </div>
                    </div>
                    <div className="!m-[0] absolute w-[22.27%] top-[12px] right-[39.09%] left-[38.64%] rounded-9xs-7 flex flex-col items-center justify-start py-0 px-0 box-border z-[1]">
                      <a className="[text-decoration:none] relative leading-[10px] capitalize text-[inherit]">
                        0
                      </a>
                    </div>
                  </div>
                  <a className="[text-decoration:none] relative leading-[16px] capitalize font-wwwhorizonhobbycom-semantic-item text-wwwhorizonhobbycom-milano-red">
                    Cart
                  </a>
                </div>
              </div>
              <div className="w-px relative">
                <div className="absolute right-[1px] bottom-[-62px] w-[200px] h-[22px] overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
