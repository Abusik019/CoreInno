import { useState } from "react";
import CreateTaskPageOne from "./Page-1";
import CreateTaskPageTwo from "./Page-2";
import CreateTaskPageThree from "./Page-3";
import CreateTaskPageFour from "./Page-4";
import CreateTaskPageFive from "./Page-5";
import CreateTaskPageSix from "./Page-6";
import CreateTaskPageSeven from "./Page-7";
import CreateTaskPageEight from "./Page-8";

export default function CreateTask() {
    const [page, setPage] = useState(1);

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return <CreateTaskPageOne setPage={setPage}/>;
            case 2:
                return <CreateTaskPageTwo setPage={setPage}/>;
            case 3:
                return <CreateTaskPageThree setPage={setPage}/>;
            case 4:
                return <CreateTaskPageFour setPage={setPage}/>;
            case 5:
                return <CreateTaskPageFive setPage={setPage}/>;
            case 6:
                return <CreateTaskPageSix setPage={setPage}/>;
            case 7:
                return <CreateTaskPageSeven setPage={setPage}/>;
            case 8:
                return <CreateTaskPageEight setPage={setPage}/>;
            default:
                return <div></div>;
        }
    };

    return (
        <>
            {renderPageContent()}
        </>
    )
}
