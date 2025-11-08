import "./style.css";
import Header from "./../components/header/Header";
import { motion } from "framer-motion";

const Home = () => {

    const techStack = [
        { category: "Frontend", skills: ["ReactJS", "HTML5", "CSS3", "JavaScript"], color: "#61DAFB" },
        { category: "Backend", skills: ["Python", "Delphi", "C++", "NodeJS"], color: "#68A063" },
        { category: "AI & ML", skills: ["Neural Networks", "PyTorch", "TensorFlow", "Deep ML & finetune"], color: "#FF6F00" },
        { category: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"], color: "#4DB33D" },
        { category: "Microservices", skills: ["Docker", "GCP", "Linux Services", "Cloud Architecture"], color: "#2496ED" }
    ];

    return (
	<>
	<Header />
    <main className="section stack-section">
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
            <div className="stack-grid">
                {techStack.map((stack, index) => (
                    <motion.div
                        key={stack.category}
                        className="stack-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <div
                            className="stack-card__icon"
                            style={{ background: `linear-gradient(135deg, ${stack.color}, ${stack.color}99)` }}
                        >
                            <span className="stack-card__letter">{stack.category[0]}</span>
                        </div>
                        <h3 className="stack-card__title">{stack.category}</h3>
                        <ul className="stack-card__skills">
                            {stack.skills.map((skill, i) => (
                                <li key={skill}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </main>
	</>
	)
};
export default Home;