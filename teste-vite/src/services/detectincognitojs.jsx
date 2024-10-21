import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { detectIncognito } from "detectincognitojs";

const Detectincognitojs = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkIncognitoMode = async () => {
            const result = await detectIncognito();
            if (result.isPrivate) {
                navigate('/page-block'); 
            }
        };

        checkIncognitoMode();
    }, [navigate]);

    return null;
};

export default Detectincognitojs;
