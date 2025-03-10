import { useState } from "react";
import MainReg from './MainReg';
import SelectionRole from "./SelectionRole";
import SuccesRegistration from "./SuccessRegistration";

export default function Registration() {

    const [hidePassword, setHidePassword] = useState(true);
    const [nameVaildate, setNameVaildate] = useState(true);
    const [surnameVaildate, setSurnameVaildate] = useState(true);
    const [emailVaildate, setEmailVaildate] = useState(true);
    const [passwordVaildate, setPasswordVaildate] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.authSlice.token);

    

    function fetchSignUp() {
        dispatch(authSignUp({ email, password, firstName, lastName }));
    }

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    function handleValidateName(e, changeState) {
        setFirstname(e.target.value);
        if (e.target.value !== "") {
            const value = /^[a-zA-Zа-яА-я]+$/.test(e.target.value);
            changeState(value);
        } else {
            changeState(true);
        }
    }

    function handleValidateSurName(e, changeState) {
        setLastName(e.target.value);
        if (e.target.value !== "") {
            const value = /^[a-zA-Zа-яА-я]+$/.test(e.target.value);
            changeState(value);
        } else {
            changeState(true);
        }
    }

    function handleValidatePassword(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordVaildate(false);
        } else {
            setPasswordVaildate(true);

    const [page, setPage] = useState(3);

    function RenderPage(){
        switch(page){
            case 1:
                return <MainReg setPage={setPage}/>
            case 2:
                return <SelectionRole setPage={setPage}/>
            case 3:
                return <SuccesRegistration />
            default:
                return <MainReg />

        }
    }

    return <>{RenderPage()}</>;
}
