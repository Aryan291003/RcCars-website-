import PropTypes from "prop-types";

const Header1 = ({ className = "" }) => {
  return (
    <header
      className={`w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-wwwhorizonhobbycom-supernova flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full text-center text-5xl text-color-azure-29 font-wwwhorizonhobbycom-semantic-heading-3 mq800:pl-[30px] mq800:pr-[30px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start max-w-[1320px] mq1325:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between pt-[19px] pb-0 pl-[485px] pr-3.5 box-border max-w-[1320px] gap-5 mq450:pl-5 mq450:box-border mq800:pl-[121px] mq800:box-border mq1325:pl-[242px] mq1325:box-border mq1325:max-w-full">
            <div className="w-[281.9px] flex flex-row items-start justify-start py-0 pl-[15px] pr-3.5 box-border max-w-[1320px] mq1325:max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start">
                <div className="flex-1 flex flex-row items-start justify-between pt-[17.6px] pb-[27px] pl-4 pr-[13px] box-border relative max-w-[252px] gap-5 mq800:hidden">
                  <a className="[text-decoration:none] relative leading-[32px] uppercase text-[inherit]">
                    Shop
                  </a>
                  <div className="h-1 w-[47px] absolute !m-[0] bottom-[0px] left-[16px] bg-color-azure-29" />
                  <a className="[text-decoration:none] relative leading-[32px] uppercase text-[inherit]">
                    Learn
                  </a>
                  <a className="[text-decoration:none] relative leading-[32px] uppercase text-[inherit]">
                    Enjoy
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[76.6px] w-[374px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border max-w-full text-3xs text-wwwhorizonhobbycom-mine-shaft font-wwwhorizonhobbycom-semantic-item">
              <div className="self-stretch flex flex-col items-end justify-start gap-[38px] mq450:gap-[19px]">
                <div className="self-stretch flex flex-row items-end justify-start">
                  <div className="h-[42.5px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.5px] box-border text-xs text-wwwhorizonhobbycom-dusty-gray">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start shrink-0">
                      <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                        <div className="self-stretch flex-1 rounded border-wwwhorizonhobbycom-mercury border-[1px] border-solid flex flex-row items-start justify-center py-[11px] px-4 gap-item-spacing-xxs">
                          <div className="flex flex-row items-start justify-start">
                            <img
                              className="h-[13px] w-3 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/icon-6.svg"
                            />
                          </div>
                          <div className="flex-1 relative leading-[14px]">
                            {" "}
                            Search Name or Part Number
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start pt-0 pb-px pl-[25px] pr-0 shrink-0">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-[0.5px] gap-item-spacing-1-5">
                      <div className="flex flex-col items-center justify-start py-0 px-1.5">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/icon-7.svg"
                          />
                        </div>
                      </div>
                      <a className="[text-decoration:none] relative leading-[16px] capitalize text-[inherit]">
                        Support
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start pt-0 pb-px pl-[25px] pr-0 shrink-0">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-[0.5px] gap-item-spacing-1-5">
                      <div className="flex flex-col items-center justify-start py-0 px-[3px]">
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/icon-8.svg"
                          />
                        </div>
                      </div>
                      <a className="[text-decoration:none] relative leading-[16px] capitalize text-[inherit]">
                        Sign In
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pl-[25px] pr-0 shrink-0 text-wwwhorizonhobbycom-tundora font-wwwhorizonhobbycom-semantic-heading-3">
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
                      <a className="[text-decoration:none] relative leading-[16px] capitalize font-wwwhorizonhobbycom-semantic-item text-wwwhorizonhobbycom-mine-shaft">
                        Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-[200px] overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[7px] box-border text-right text-wwwhorizonhobbycom-black">
                  <div className="flex flex-row items-start justify-center pt-px px-0 pb-0">
                    <div className="flex flex-row items-start justify-end gap-item-spacing-5-48">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-3 w-[8.3px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/icon-9.svg"
                        />
                      </div>
                      <div className="relative leading-[14px]">
                        Select A Store
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[42px] w-full !m-[0] absolute right-[0px] bottom-[-42px] left-[0px] bg-wwwhorizonhobbycom-tundora border-wwwhorizonhobbycom-mercury border-b-[1px] border-solid box-border flex flex-row items-start justify-center min-w-[160px] max-w-full">
        <div className="w-[1032px] flex flex-row items-start justify-center max-w-[1056px] mq1125:max-w-full">
          <div className="w-[768.8px] flex flex-row items-start justify-start max-w-[768.81px] mq800:max-w-full">
            <div className="h-[41px] w-[113.2px] relative" />
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="h-[41px] flex-1 relative" />
              <div className="h-[41px] w-[70.3px] relative z-[1] ml-[-0.1px]" />
            </div>
            <div className="h-[41px] w-[58.9px] relative" />
            <div className="h-[41px] w-[66.1px] relative" />
            <div className="h-[41px] w-[158.5px] relative" />
            <div className="h-[41px] w-14 relative" />
            <div className="w-[143.2px] flex flex-row items-start justify-start">
              <div className="h-[41px] flex-1 relative shrink-0" />
              <div className="h-[41px] w-[49.1px] relative shrink-0 z-[1] ml-[-0.1px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
