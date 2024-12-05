import TablistTabpanel1 from "../components/tablist-tabpanel1";
import SecondPanel from "../components/second-panel";
import Background from "../components/background";

const Container = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-[184.8px] px-0 pb-[130px] box-border leading-[normal] tracking-[normal] text-left text-sm text-wwwhorizonhobbycom-mine-shaft font-wwwhorizonhobbycom-semantic-item">
      <TablistTabpanel1 />
      <div className="w-full h-10 absolute !m-[0] top-[444px] left-[-6px] border-wwwhorizonhobbycom-mercury border-b-[1px] border-solid box-border z-[1]">
        <div className="absolute top-[4px] left-[534px] border-wwwhorizonhobbycom-white border-b-[3px] border-solid box-border h-9 flex flex-row items-start justify-start pt-[11px] px-0 pb-1 text-wwwhorizonhobbycom-white">
          <div className="relative leading-[16.8px]">Intro</div>
        </div>
        <a className="[text-decoration:none] absolute top-[15px] left-[595.7px] leading-[16.8px] text-[inherit] inline-block min-w-[57px]">
          Overview
        </a>
        <div className="absolute top-[15px] left-[685.5px] leading-[16.8px] inline-block min-w-[74px]">
          All Features
        </div>
        <div className="absolute top-[15px] left-[792px] leading-[16.8px] inline-block min-w-[39px]">
          Specs
        </div>
        <a className="[text-decoration:none] absolute top-[15px] left-[863.1px] leading-[16.8px] text-[inherit] inline-block min-w-[43px]">
          Videos
        </a>
        <a className="[text-decoration:none] absolute top-[-4.5px] left-[670.9px] leading-[16.8px] text-[inherit] inline-block min-w-[99px]">{`Parts & Support`}</a>
      </div>
      <SecondPanel />
      <div className="w-full h-10 absolute !m-[0] right-[-30px] bottom-[1175px] border-wwwhorizonhobbycom-mercury border-b-[1px] border-solid box-border z-[2]">
        <div className="absolute top-[4px] left-[534px] border-wwwhorizonhobbycom-white border-b-[3px] border-solid box-border h-9 flex flex-row items-start justify-start pt-[11px] px-0 pb-1 text-wwwhorizonhobbycom-white">
          <div className="relative leading-[16.8px]">Intro</div>
        </div>
        <div className="absolute top-[15px] left-[595.7px] leading-[16.8px] inline-block min-w-[57px]">
          Overview
        </div>
        <div className="absolute top-[15px] left-[685.5px] leading-[16.8px] inline-block min-w-[74px]">
          All Features
        </div>
        <div className="absolute top-[15px] left-[792px] leading-[16.8px] inline-block min-w-[39px]">
          Specs
        </div>
        <div className="absolute top-[15px] left-[863.1px] leading-[16.8px] inline-block min-w-[43px]">
          Videos
        </div>
        <div className="absolute top-[-4.5px] left-[670.9px] leading-[16.8px] inline-block min-w-[99px]">{`Parts & Support`}</div>
      </div>
      <Background />
    </div>
  );
};

export default Container;
