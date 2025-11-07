import "./style.css";
import { motion } from "framer-motion";

const Header = () => {
    return (
	<header className="header">
        <div className="header__wrapper">
            <motion.h1
                className="header__title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <strong>Hi, my name is <em>John</em></strong><br />
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    a backend developer
                </motion.span>
            </motion.h1>
            <motion.div
                className="header__text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <p>also a deep ML and AI expert</p>
            </motion.div>
            <motion.a
                href="https://docs.google.com/document/d/1elGIsmk8SZmqFY4Gka6U0OWQfhISzPIg/edit?usp=sharing&ouid=114556656301971161343&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
                className="btn-cv"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                CV
            </motion.a>
        </div>
    </header>
	)
};
export default Header;