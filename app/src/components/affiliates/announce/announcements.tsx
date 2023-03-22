import Affiliates from "../../../layouts/AffiliatesLayout";

const Announcements = () => {
  

  return (
    <div className="pt-5 pb-4">
      <div className="px-6 mb-5 block font-medium text-base">
        <span className="text-[#2262C6]">Dashboard</span> - Announcements
      </div>
    </div>
  );
};

export default Announcements;

Announcements.getLayout = Affiliates;
