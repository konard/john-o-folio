import { NavLink } from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion";

const Project = ({title, img, index}) => {
	return (
		<NavLink to={`/project/${index}`}>
			<motion.li
				className="project"
				initial={{ opacity: 0, y: 50, scale: 0.9 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{
					duration: 0.5,
					delay: index * 0.1,
					ease: "easeOut"
				}}
				whileHover={{
					y: -10,
					scale: 1.05,
					transition: { duration: 0.3 }
				}}
			>
				<motion.div
					className="project__img-wrapper"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.4 }}
				>
					<img src={img} alt={title} className="project__img" />
					<motion.div
						className="project__overlay"
						initial={{ opacity: 0 }}
						whileHover={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<span>View Project</span>
					</motion.div>
				</motion.div>
				<h3 className="project__title">{title}</h3>
			</motion.li>
		</NavLink>
	)
};

export default Project;