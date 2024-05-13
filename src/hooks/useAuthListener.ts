import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { logout, setUser } from "../redux/features/admin/adminSlice";
import { AppDispatch } from "../redux/store";

const useAuthListener = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ email: user.email || "No email" }));
            } else {
                dispatch(logout());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    return null;
};

export default useAuthListener;
