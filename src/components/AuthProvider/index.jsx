import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokens, checkAuth } from "../../redux/slices/authSlice";

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);
    const refreshToken = authState?.refreshToken;
    const accessToken = authState?.accessToken;

    useEffect(() => {
        // Проверяем авторизацию при загрузке
        if (accessToken) {
            dispatch(checkAuth());
        }
    }, [accessToken, dispatch]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (refreshToken) {
                console.log("Обновление токена...");
                dispatch(refreshTokens());
            }
        }, 15 * 60 * 1000);
    
        return () => clearInterval(interval);
    }, [refreshToken, dispatch]);

    return children;
};
