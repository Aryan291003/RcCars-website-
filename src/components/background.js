import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Background = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkCarsClick = useCallback(() => {
    navigate("/1440w-light1");
  }, [navigate]);

  return (
    <section
      className={`w-full !m-[0] absolute top-[253px] right-[0px] left-[0px] bg-wwwhorizonhobbycom-mine-shaft flex flex-row items-start justify-start pt-0 px-[60px] pb-8 box-border max-w-full z-[2] text-left text-xs text-wwwhorizonhobbycom-dusty-gray font-wwwhorizonhobbycom-semantic-item mq800:pl-[30px] mq800:pr-[30px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border relative max-w-[1320px] mq1325:max-w-full">
        <div className="!m-[0] absolute top-[1px] left-[-1px] flex flex-row items-start justify-start max-w-full w-full">
          <div className="h-full w-full !m-[0] absolute top-[-1px] right-[-1px]" />
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[15px] box-border max-w-[1320px] z-[1] mq1325:max-w-full">
            <div className="rounded bg-wwwhorizonhobbycom-mine-shaft flex flex-row items-start justify-start flex-wrap content-start py-3 pl-4 pr-[1221px] gap-0 mq450:pr-5 mq450:box-border mq800:pr-[305px] mq800:box-border mq1325:pr-[610px] mq1325:box-border">
              <div className="flex flex-row items-start justify-start py-0 pl-2 pr-0 gap-item-spacing-10-98">
                <div className="relative leading-[18px]">|</div>
                <a
                  className="[text-decoration:none] relative leading-[18px] text-[inherit] cursor-pointer"
                  onClick={onLinkCarsClick}
                >
                  HOME
                </a>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-2 pr-0">
                <div className="relative leading-[18px]">|</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-0 max-w-full z-[2] text-sm text-wwwhorizonhobbycom-black">
          <div className="h-[893px] flex-1 flex flex-col items-start justify-start py-0 px-[15px] box-border min-w-[352px] max-w-[880px] mq1125:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start relative max-w-full">
              <div className="w-full flex-1 border-wwwhorizonhobbycom-matisse border-[1px] border-solid box-border flex flex-col items-start justify-start relative max-w-[850px] min-h-[537px] mq1125:max-w-full">
                <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start max-w-full">
                  <div className="w-[14416px] flex-1 flex flex-col items-start justify-center max-w-[1700%]">
                    <div className="w-[848px] flex-1 flex flex-col items-start justify-center min-h-[1px] max-w-full">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                          <img
                            className="w-full flex-1 relative max-w-[848px] overflow-hidden max-h-full object-cover mq1125:max-w-full"
                            alt=""
                            src="/ara4315v3t1-a7-f5rnjwu8jpg@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[50px] h-[50px] !m-[0] absolute top-[calc(50%_-_25px)] right-[51px] rounded-31xl bg-wwwhorizonhobbycom-supernova overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3.5 box-border z-[1]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="overflow-hidden flex flex-col items-end justify-center py-0 pl-[3px] pr-0">
                      <img
                        className="w-[18.8px] h-[30px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/iconarrownewsvg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[11.09%] h-[42px] !m-[0] absolute right-[5.88%] bottom-[100px] left-[83.02%] bg-wwwhorizonhobbycom-white border-wwwhorizonhobbycom-wild-sand border-[1px] border-solid box-border flex flex-col items-start justify-start py-1 pl-3.5 pr-5 min-h-[32px] z-[2]">
                <b className="relative leading-[30px]">1/17</b>
                <div className="!m-[0] absolute top-[calc(50%_-_11px)] right-[13px] flex flex-col items-start justify-start">
                  <div className="overflow-hidden flex flex-col items-end justify-center py-0 pl-px pr-0">
                    <img
                      className="w-[13.8px] h-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/iconarrownewsvg-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-[15px] pb-3.5 box-border max-w-[440px] text-5xl text-wwwhorizonhobbycom-white font-wwwhorizonhobbycom-semantic-heading-3 mq450:max-w-full">
            <div className="w-[410px] bg-wwwhorizonhobbycom-mine-shaft flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border gap-[148px] max-w-full mq450:gap-[74px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[21px] relative gap-1.5">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h2 className="m-0 relative text-inherit leading-[32px] font-normal font-inherit whitespace-pre-wrap mq450:text-lgi mq450:leading-[26px]">{`1/7 FELONY 6S MUSCLE CAR RTR  `}</h2>
                  <div className="w-0 h-[18px]" />
                  <div className="self-stretch flex flex-row items-center justify-between pt-[5px] pb-0 px-0 gap-item-spacing-188-54 text-mini font-wwwhorizonhobbycom-semantic-item mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[20px]">
                        ARRMA - ARA4315V3T1
                      </div>
                    </div>
                    <button className="cursor-pointer border-wwwhorizonhobbycom-lightning-yellow border-[1px] border-solid p-0 bg-[transparent] rounded flex flex-col items-start justify-start">
                      <div className="flex flex-row items-start justify-start pt-[9px] px-[11px] pb-[7px] gap-item-spacing-3">
                        <b className="relative text-xs leading-[14px] font-wwwhorizonhobbycom-semantic-item text-wwwhorizonhobbycom-lochmara text-left">
                          4.9 
                        </b>
                        <div className="flex flex-row items-start justify-start">
                          <img
                            className="h-[13px] w-[13.5px] relative overflow-hidden shrink-0"
                            alt=""
                            src="/icon1.svg"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <b className="relative text-lg leading-[27px] font-wwwhorizonhobbycom-semantic-item">
                  $649.99
                </b>
                <div className="w-0 h-[21px] !m-[0] absolute bottom-[0px] left-[0px]" />
              </div>
              <div className="ml-[-15px] flex flex-col items-start justify-start gap-5 max-w-[108%] text-xs text-wwwhorizonhobbycom-mine-shaft font-wwwhorizonhobbycom-semantic-item">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
                  <div className="flex-1 border-wwwhorizonhobbycom-white border-b-[1px] border-solid flex flex-row items-start justify-start">
                    <div className="flex-1 border-wwwhorizonhobbycom-white border-t-[1px] border-solid box-border flex flex-col items-start justify-start pt-3.5 px-0 pb-[15px] gap-[13px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full mq800:flex-wrap">
                        <b className="relative leading-[18px] inline-block shrink-0 max-w-full">{`This Product May Require a Compatible Battery and Charger. `}</b>
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-0.3px] mq450:ml-0">
                          <b className="relative [text-decoration:underline] leading-[18px] shrink-0">
                            Why SMART?
                          </b>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-3xs text-wwwhorizonhobbycom-white">
                        <div className="self-stretch bg-wwwhorizonhobbycom-mine-shaft overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-h-[396px] max-w-full">
                          <div className="flex-1 border-wwwhorizonhobbycom-white border-[1px] border-solid box-border flex flex-row items-start justify-start py-[9px] px-2.5 gap-[15px] min-h-[121px] max-w-full mq450:flex-wrap">
                            <div className="flex-1 flex flex-row items-start justify-start min-w-[197px] [row-gap:20px] mq450:flex-wrap">
                              <div className="flex flex-row items-start justify-start py-0 pl-0 pr-2.5 box-border max-w-[75px]">
                                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[34px] box-border max-w-[65px]">
                                  <img
                                    className="h-[65px] w-[65px] relative overflow-hidden shrink-0 object-cover max-w-[65px]"
                                    loading="lazy"
                                    alt=""
                                    src="/spmx50003s100h5-a0-7x2nnl86jpg@2x.png"
                                  />
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[148px]">
                                <div className="relative leading-[14px] text-wwwhorizonhobbycom-lightning-yellow">
                                  Sale
                                </div>
                                <div className="relative text-2xs leading-[14px] font-wwwhorizonhobbycom-semantic-heading-3">
                                  <p className="m-0">
                                    11.1V 5000mAh 3S 100C Smart Hardcase LiPo
                                    Battery:
                                  </p>
                                  <p className="m-0">IC5</p>
                                </div>
                                <div className="relative leading-[14px]">
                                  SPMX50003S100H5
                                </div>
                                <b className="w-[41px] relative leading-[14px] flex items-center">
                                  $79.99
                                </b>
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-start gap-item-spacing-42">
                              <div className="self-stretch flex flex-col items-start justify-center pt-[2.6px] px-0 pb-px">
                                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-center">
                                    <img
                                      className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
                                      loading="lazy"
                                      alt=""
                                      src="/smartlogosvg.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button className="cursor-pointer border-color-azure-29 border-[1px] border-solid py-2.5 px-[22px] bg-color-azure-29 self-stretch h-9 rounded box-border flex flex-col items-center justify-center hover:bg-steelblue hover:border-steelblue hover:border-[1px] hover:border-solid hover:box-border">
                                <div className="relative text-xs leading-[12px] uppercase font-medium font-wwwhorizonhobbycom-semantic-item text-wwwhorizonhobbycom-supernova text-center">
                                  Add
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch bg-wwwhorizonhobbycom-mine-shaft overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-h-[396px] max-w-full text-wwwhorizonhobbycom-lightning-yellow">
                          <div className="flex-1 border-wwwhorizonhobbycom-silver border-[1px] border-solid box-border flex flex-row items-start justify-start py-[9px] px-2.5 min-h-[107px] max-w-full [row-gap:20px] mq450:flex-wrap">
                            <div className="flex flex-row items-start justify-start py-0 pl-0 pr-2.5 box-border max-w-[75px]">
                              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-[65px]">
                                <img
                                  className="h-[65px] w-[65px] relative overflow-hidden shrink-0 object-cover max-w-[65px]"
                                  loading="lazy"
                                  alt=""
                                  src="/spmxc2050-a5-6t13bnqijpg@2x.png"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-3 box-border gap-[7px] min-w-[158px]">
                              <div className="relative leading-[14px]">
                                Sale
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start gap-1 text-2xs text-wwwhorizonhobbycom-white font-wwwhorizonhobbycom-semantic-heading-3">
                                <div className="relative leading-[14px]">
                                  S155 55W AC G2 Smart Charger
                                </div>
                                <div className="flex flex-col items-start justify-start text-3xs font-wwwhorizonhobbycom-semantic-item">
                                  <div className="relative leading-[14px]">
                                    SPMXC2050
                                  </div>
                                  <b className="w-[38px] relative leading-[14px] flex items-center">
                                    $39.99
                                  </b>
                                </div>
                                <div className="w-[231px] h-3.5" />
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-start gap-item-spacing-28">
                              <div className="self-stretch flex flex-col items-start justify-center pt-[2.6px] px-0 pb-px">
                                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                                  <div className="flex-1 overflow-hidden flex flex-col items-center justify-center">
                                    <img
                                      className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
                                      loading="lazy"
                                      alt=""
                                      src="/smartlogosvg-1.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <button className="cursor-pointer border-wwwhorizonhobbycom-endeavour border-[1px] border-solid py-2.5 px-[22px] bg-wwwhorizonhobbycom-endeavour self-stretch h-9 rounded box-border flex flex-col items-center justify-center hover:bg-cornflowerblue hover:border-cornflowerblue hover:border-[1px] hover:border-solid hover:box-border">
                                <div className="relative text-xs leading-[12px] uppercase font-medium font-wwwhorizonhobbycom-semantic-item text-wwwhorizonhobbycom-supernova text-center">
                                  Add
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[15px] pb-2 box-border max-w-full text-center text-sm text-wwwhorizonhobbycom-silver">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-[409.98px] gap-0 [row-gap:20px] mq450:max-w-full mq800:flex-wrap">
                    <button className="cursor-pointer [border:none] py-0 pl-0 pr-2.5 bg-[transparent] flex flex-col items-start justify-start">
                      <div className="self-stretch h-[45px] rounded border-wwwhorizonhobbycom-lightning-yellow border-[1px] border-solid box-border flex flex-col items-center justify-start pt-[15px] px-[52px] pb-3">
                        <div className="relative text-sm leading-[14px] font-medium font-wwwhorizonhobbycom-semantic-item text-wwwhorizonhobbycom-lightning-yellow text-center">
                          Add to Wishlist
                        </div>
                      </div>
                    </button>
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="flex flex-col items-start justify-center">
                          <div className="flex flex-col items-start justify-start">
                            <div className="h-[45px] rounded bg-wwwhorizonhobbycom-mine-shaft border-wwwhorizonhobbycom-silver border-t-[1px] border-solid border-wwwhorizonhobbycom-silver border-b-[1px] border-solid border-wwwhorizonhobbycom-silver border-l-[1px] border-solid box-border flex flex-row items-center justify-start py-[15px] pl-3 pr-2.5">
                              <img
                                className="h-[11px] w-2.5 relative"
                                alt=""
                                src="/image--iconminusblack.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch bg-wwwhorizonhobbycom-mine-shaft border-wwwhorizonhobbycom-silver border-t-[1px] border-solid border-wwwhorizonhobbycom-silver border-b-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start py-[13px] px-0.5 min-w-[24px] z-[1] ml-[-1px]">
                          <div className="flex flex-row items-center justify-center">
                            <div className="flex flex-col items-start justify-start">
                              <div className="overflow-auto flex flex-col items-center justify-start py-0 px-[61px]">
                                <div className="relative font-medium">1</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center z-[2] ml-[-1px]">
                          <div className="flex flex-col items-start justify-start">
                            <div className="h-[45px] rounded bg-wwwhorizonhobbycom-mine-shaft border-wwwhorizonhobbycom-silver border-t-[1px] border-solid border-wwwhorizonhobbycom-silver border-r-[1px] border-solid border-wwwhorizonhobbycom-silver border-b-[1px] border-solid box-border flex flex-row items-center justify-start py-[15px] px-[11px]">
                              <img
                                className="h-[11px] w-2.5 relative"
                                alt=""
                                src="/image--iconplusblack.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-darkslategray font-abhaya-libre">
                  <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
                    <div className="w-[440px] flex flex-row items-start justify-start pt-0 px-[15px] pb-1.5 box-border max-w-[440px] mq450:max-w-full">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full">
                        <div className="h-[18.3px] flex-1 bg-wwwhorizonhobbycom-mine-shaft overflow-hidden flex flex-row items-end justify-start max-w-full">
                          <div className="h-[24.2px] flex flex-row items-start justify-start pt-[5.9px] px-0 pb-[1.3px] box-border gap-[5.3px] min-w-[251.97px]">
                            <img
                              className="h-[19.6px] w-[14.7px] relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/image.svg"
                            />
                            <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                              <img
                                className="w-[47.2px] h-[14.9px] relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/image-1.svg"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                              <div className="relative leading-[15.6px]">
                                <span>{`As low as $30.56/mo. `}</span>
                                <span className="[text-decoration:underline] text-wwwhorizonhobbycom-lochmara">
                                  Learn more
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
                      <div className="border-wwwhorizonhobbycom-silver border-b-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-0 pb-3 pl-[329px] pr-0 mq450:pl-5 mq450:box-border">
                        <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-0">
                          <div className="flex flex-row items-start justify-start py-0 pl-2 pr-0 gap-item-spacing-11-46">
                            <div className="flex flex-row items-start justify-start">
                              <div className="rounded-9xl bg-wwwhorizonhobbycom-alto flex flex-row items-center justify-center py-1.5 px-[7px]">
                                <div className="overflow-hidden flex flex-col items-start justify-start">
                                  <div className="overflow-hidden flex flex-col items-center justify-center py-0 px-0.5">
                                    <img
                                      className="w-2.5 h-4 relative overflow-hidden shrink-0"
                                      alt=""
                                      src="/facebookwsvg.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start">
                              <div className="rounded-9xl bg-wwwhorizonhobbycom-alto flex flex-row items-center justify-center py-1.5 px-[7px]">
                                <div className="overflow-hidden flex flex-col items-start justify-start">
                                  <div className="overflow-hidden flex flex-col items-center justify-center py-px px-0">
                                    <img
                                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                                      alt=""
                                      src="/xwsvg.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-center text-wwwhorizonhobbycom-alto font-wwwhorizonhobbycom-semantic-item">
                    <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start max-w-full">
                      <div className="flex-1 flex flex-col items-start justify-start py-0 px-[15px] box-border max-w-[440px] mq450:max-w-full">
                        <div className="rounded border-wwwhorizonhobbycom-alto border-[1px] border-solid box-border flex flex-row items-center justify-center pt-[17px] px-[18px] pb-4 gap-[7.5px] min-h-[51px] mq800:flex-wrap">
                          <div className="flex flex-row items-center justify-center pt-0 px-px pb-0 box-border gap-item-spacing-5 min-w-[80px]">
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="h-[15px] w-[11.3px] relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/icon-12.svg"
                              />
                            </div>
                            <b className="relative leading-[12px]">
                              Shop Local
                            </b>
                          </div>
                          <div className="relative leading-[12px] font-medium mq800:w-full mq800:h-1">
                            |
                          </div>
                          <div className="relative leading-[14px] font-medium text-wwwhorizonhobbycom-mercury text-left shrink-0">
                            Call your local store to confirm product
                            availability.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px flex flex-row items-start justify-start flex-wrap content-start max-w-full">
                      <div className="h-px w-[440px] relative hidden max-w-[440px] mq450:max-w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
