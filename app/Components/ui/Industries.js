
import { Stethoscope, Building2, PillIcon, Microscope, Building } from "lucide-react"

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <IndustryCard icon={<Stethoscope className="h-12 w-12 text-blue-50" />} title="Doctors & Clinics" />
          <IndustryCard icon={<Building2 className="h-12 w-12 text-blue-50" />} title="Hospitals" />
          <IndustryCard icon={<PillIcon className="h-12 w-12 text-blue-50" />} title="Pharmacies & Medical Stores" />
          <IndustryCard icon={<Building className="h-12 w-12 text-blue-50" />} title="Pharmaceutical Companies" />
          <IndustryCard icon={<Microscope className="h-12 w-12 text-blue-50" />} title="Diagnostic Labs" />
        </div>
      </div>
    </section>
  )
}

const IndustryCard = ({ icon, title }) => (
  <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:text-white transition-colors duration-200">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
  </div>
)

export default Industries

