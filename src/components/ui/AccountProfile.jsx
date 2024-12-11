import { MoreSvg } from "../../assets/icons/index";
function AccountProfile() {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center gap-3">
        <div className="ml-2 w-12 h-12 rounded-full bg-slate-lght flex items-center justify-center">
          <p className="text-[19px] text-orange-lght font-normal">AB</p>
        </div>
        <div>
          <p className="text-lg font-bold">Abebe</p>
          <p className="text-xs font-light ">Admin</p>
        </div>
      </div>
      <div className="mr-3">
        <MoreSvg />
      </div>
    </div>
  );
}

export default AccountProfile;
