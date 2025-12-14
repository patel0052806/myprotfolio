import { motion } from "framer-motion";

export default function SkillCard3D({ title, icon, skills, glow }) {
  return (
    <motion.div
      whileHover={{ rotateX: 8, rotateY: -8, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      className={`relative glass p-6 rounded-2xl cursor-pointer 
      before:absolute before:inset-0 before:rounded-2xl 
      before:bg-gradient-to-br ${glow} before:opacity-20 before:blur-xl`}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 text-xl">
          {icon}
          <h3 className="font-bold text-white">{title}</h3>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-sm text-slate-300"
              style={{ transform: "translateZ(50px)" }}
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="font-mono text-xs">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
