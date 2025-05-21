export default function SkillsSection({ technicalSkills, softSkills }) {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200">Skills</h2>

            <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {technicalSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-green-100 text-green-800 px-4 py-2 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}