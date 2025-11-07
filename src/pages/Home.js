import "./style.css";
import Header from "./../components/header/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
    const stackRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stackRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const techStack = [
        { category: "Frontend", skills: ["ReactJS", "HTML5", "CSS3", "JavaScript"], color: "#61DAFB" },
        { category: "Backend", skills: ["Delphi", "C++", "NodeJS", "Python"], color: "#68A063" },
        { category: "AI & ML", skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch"], color: "#FF6F00" },
        { category: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"], color: "#4DB33D" }
    ];

    return (
	<>
	<Header />
    <motion.main
        ref={stackRef}
        className="section stack-section"
        style={{ opacity }}
    >
        <div className="container">
            <motion.h2
                className="title-1 stack-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Technology Stack
            </motion.h2>
            <motion.div className="stack-grid" style={{ y }}>
                {techStack.map((stack, index) => (
                    <motion.div
                        key={stack.category}
                        className="stack-card"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.15,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.div
                            className="stack-card__icon"
                            style={{ background: `linear-gradient(135deg, ${stack.color}, ${stack.color}99)` }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="stack-card__letter">{stack.category[0]}</span>
                        </motion.div>
                        <h3 className="stack-card__title">{stack.category}</h3>
                        <ul className="stack-card__skills">
                            {stack.skills.map((skill, i) => (
                                <motion.li
                                    key={skill}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + i * 0.1 }}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </motion.main>
	</>
	)
};
export default Home;