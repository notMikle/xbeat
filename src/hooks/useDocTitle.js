import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `LikaBandito`;
        } else {
            document.title = 'LikaBandito';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
