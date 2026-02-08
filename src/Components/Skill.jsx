import { Code2, Database, LineChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Web Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Django", level: 85 },
        { name: "Responsive Design", level: 92 },
      ],
    },
    {
      icon: Database,
      title: "Data Science",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 93 },
        { name: "Machine Learning", level: 87 },
        { name: "NLP", level: 82 },
        { name: "TensorFlow", level: 85 },
        { name: "scikit-learn", level: 90 },
      ],
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Excel", level: 90 },
        { name: "SQL", level: 88 },
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 89 },
        { name: "Power BI", level: 86 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 ">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
            My <span className="text-white">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning web development, data science, and analytics
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className=" shadow-lg p-8 rounded-2xl transform transition hover:-translate-y-2"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6 text-amber-300">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
