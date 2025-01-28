import { useState } from "react";
import ResetPasswordOne from "./ResetPassword1";
import ResetPasswordTwo from "./ResetPassword2";

export default function ResetPassword() {
    const [page, setPage] = useState(1);
    const [isEmailType, setIsEmailType] = useState(true);

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return <ResetPasswordOne setPage={setPage} setIsEmailType={setIsEmailType}/>;
            case 2:
                return <ResetPasswordTwo isEmailType={isEmailType}/>;
            default:
                return <div></div>;
        }
    };

    return <>{renderPageContent()}</>;
}
