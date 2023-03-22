import Affiliates from "../../../layouts/AffiliatesLayout";

import SupportComponent from "./supportComponent";

const Support = () => {

    const data = [
        {
            title: "New minimum withdrawal amount for stablecoins",
            time: "2023-07-02 17:21:04",
            content: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. demonstrate the visual form of a document or a typeface without relying on meaningful content. demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
            title: "New minimum withdrawal amount for stablecoins",
            time: "2023-07-02 17:21:04",
            content: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. demonstrate the visual form of a document or a typeface without relying on meaningful content. demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
            title: "New minimum withdrawal amount for stablecoins",
            time: "2023-07-02 17:21:04",
            content: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. demonstrate the visual form of a document or a typeface without relying on meaningful content. demonstrate the visual form of a document or a typeface without relying on meaningful content."
        }
    ]

    return (
        <div className="pt-5 pb-4">
            <div className="px-6 mb-5 block font-medium text-base">
                <span className="text-[#2262C6]">Dashboard</span> - Support - FAQ
            </div>
            <div className="pt-5 px-2 rounded-md h-auto md:rounded-2xl bg-white shadow-md pb-4 md:mb-10">
                {data.map((data, i) => {
                    return <SupportComponent propsdata={data} key={i} />
                })}
            </div>
        </div>
    );
};

export default Support;

Support.getLayout = Affiliates;
