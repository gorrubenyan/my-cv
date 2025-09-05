import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopProps {
    showScrollTop: boolean;
    scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showScrollTop, scrollToTop }) => {
    return (
        <>
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
                >
                    <FaArrowUp className="mx-auto" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;