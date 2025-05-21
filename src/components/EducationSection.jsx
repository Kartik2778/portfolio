export default function EducationSection({ education }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-gray-200">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">{edu.degree}</h3>
            <div className="flex justify-between items-center my-2">
              <p className="text-lg">{edu.institution}</p>
              <p className="text-gray-600">{edu.duration}</p>
            </div>
            <p className="text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}