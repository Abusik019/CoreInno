import { useState } from "react";
import CreateConsultationPageOne from "./Page-1";
import CreateConsultationPageTwo from "./Page-2";
import CreateConsultationPageThree from "./Page-3";
import CreateConsultationPageFour from "./Page-4";
import CreateConsultationPageFive from "./Page-5";
import CreateConsultationPageSix from "./Page-6";

export default function CreateConsultation() {
    const [page, setPage] = useState(1);
    const [consultation, setConsultation] = useState({
        title: "",
        desc: "",
        themes: "",
        cover: null
    });

    console.log(consultation);

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return <CreateConsultationPageOne setPage={setPage}/>;
            case 2:
                return <CreateConsultationPageTwo setPage={setPage} setConsultation={setConsultation} consultation={consultation}/>;
            case 3:
                return <CreateConsultationPageThree setPage={setPage} setConsultation={setConsultation} consultation={consultation}/>;
            case 4:
                return <CreateConsultationPageFour setPage={setPage} setConsultation={setConsultation} consultation={consultation}/>;
            case 5:
                return <CreateConsultationPageFive setPage={setPage} consultation={consultation}/>;
            case 6:
                return <CreateConsultationPageSix />;
        }
    };

    return (
        <>
            {renderPageContent()}
        </>
    )
}
