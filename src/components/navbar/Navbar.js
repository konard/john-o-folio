import "./style.css";
import {NavLink} from "react-router-dom";
import BtnDarkMode from "./../btnDarkMode/BtnDarkMode";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { scrollY } = useScroll();

	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
	<motion.nav
		className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
		initial={{ y: -100 }}
		animate={{ y: 0 }}
		transition={{ duration: 0.5, ease: "easeOut" }}
		style={{ backgroundColor: isScrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)' }}
	>
        <div className="container">
            <div className="nav-row">
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<NavLink to="/" className="logo">
						<strong>Freelancer</strong> portfolio
					</NavLink>
				</motion.div>
				<BtnDarkMode />
                <ul className="nav-list">
                    <motion.li
						className="nav-list__item"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
							Home
						</NavLink>
					</motion.li>
                    <motion.li
						className="nav-list__item"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
							Projects
						</NavLink>
					</motion.li>
                    <motion.li
						className="nav-list__item"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
							Contacts
						</NavLink>
					</motion.li>
                </ul>
            </div>
        </div>
		<motion.div
			className="nav-progress"
			style={{ scaleX: useTransform(scrollY, [0, 5000], [0, 1]) }}
		/>
    </motion.nav>
	)
};

export default Navbar;