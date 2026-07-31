import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "MediVibe - Pharmacy Management System | Pramudi Biyonika",
  description: "Full-stack web-based pharmacy management system developed with Django 5.1, Python, SQLite, and Bootstrap.",
};

export default function MediVibeProjectPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans relative">
      <Navbar />

      <main className="pt-28 pb-24 px-6 max-w-5xl mx-auto space-y-16">
        {/* Back Button & Breadcrumbs */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs shadow-xs hover:border-[#6c47ff] hover:text-[#6c47ff] transition-all"
          >
            <span>← Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>PROJECTS</span>
            <span>/</span>
            <span className="text-[#6c47ff] font-bold">MEDIVIBE</span>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#6c47ff] font-bold text-xs font-mono">
              Team Project (2025)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-lime-100 text-lime-800 font-bold text-xs font-mono">
              Project Manager & Backend Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            MediVibe <span className="text-[#6c47ff]">— Pharmacy Management System</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl leading-relaxed font-medium">
            A full-stack web-based pharmacy management system developed to modernize the way patients interact with pharmacies by bridging the digital communication gap for prescriptions, inventory, and order tracking.
          </p>

          {/* Project Header Image */}
          <div className="relative w-full h-72 sm:h-96 rounded-[32px] overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 mt-6">
            <Image
              src="/medicare_thumb.jpg"
              alt="MediVibe Pharmacy Management System Interface"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
        </div>

        {/* Tech Stack Pills Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-wrap gap-2 items-center">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mr-2">
            Technologies:
          </span>
          {[
            "Django 5.1",
            "Python",
            "React.js",
            "Node.js",
            "SQLite",
            "Pillow",
            "Bootstrap",
            "Git & GitHub",
            "Font Awesome",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* About MediVibe Section */}
        <section className="space-y-4 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🏥</span> About MediVibe
          </h2>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              MediVibe is a full-stack web-based pharmacy management system developed to modernize the way patients interact with pharmacies. The platform bridges the communication gap between customers and pharmacies by providing a secure, digital solution for prescription submission, medicine ordering, inventory management, and order tracking.
            </p>
            <p>
              Traditional pharmacy services often require patients to physically visit pharmacies to submit prescriptions, check medicine availability, and purchase medications. This process can be time-consuming, inconvenient, and especially challenging for elderly patients, individuals with chronic illnesses, or those living in remote locations.
            </p>
            <p>
              MediVibe addresses these challenges by allowing patients to upload prescriptions online, browse available medicines, search for medications, place orders, and receive updates throughout the ordering process. At the same time, pharmacies are provided with a dedicated management dashboard where they can verify prescriptions, manage medicine inventories, update stock availability, and process customer orders efficiently.
            </p>
            <p>
              The system was designed with usability, security, and scalability in mind while following modern web development practices using the Django framework. By digitizing pharmacy workflows, MediVibe reduces manual processing, minimizes human errors, improves communication between patients and pharmacists, and enhances the overall healthcare experience.
            </p>
          </div>
        </section>

        {/* Project Objectives */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🎯</span> Project Objectives
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm">
            {[
              "Develop a secure online platform connecting patients with pharmacies.",
              "Enable digital prescription uploads to reduce unnecessary physical visits.",
              "Simplify medicine ordering through an intuitive shopping interface.",
              "Allow pharmacies to efficiently manage products and inventory.",
              "Improve communication using real-time order status updates.",
              "Provide secure authentication and role-based access control.",
              "Support medicine delivery and in-store pickup workflows.",
              "Reduce prescription processing errors through centralized management.",
              "Build a responsive web application accessible from desktop and mobile devices.",
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[#6c47ff] font-bold">✓</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Features (Customer, Pharmacy, Security) */}
        <section className="space-y-8 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🚀</span> Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Customer Features */}
            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>👤</span> Customer Features
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• Secure account registration & login</li>
                <li>• Searchable product catalog</li>
                <li>• View prices, stock & prescription rules</li>
                <li>• Upload prescriptions for verification</li>
                <li>• Shopping cart & checkout workflow</li>
                <li>• Track order & prescription history</li>
                <li>• Discover nearby pharmacies</li>
                <li>• Approval & status notifications</li>
              </ul>
            </div>

            {/* Pharmacy Features */}
            <div className="p-6 rounded-2xl bg-lime-50/60 border border-lime-200/60 space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>💊</span> Pharmacy Features
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• Dedicated pharmacy dashboard</li>
                <li>• Manage medicine inventory</li>
                <li>• Add new medicines with images</li>
                <li>• Update details & stock quantities</li>
                <li>• Delete unavailable products</li>
                <li>• Product ownership isolation</li>
                <li>• Verify customer prescriptions</li>
                <li>• Process customer orders</li>
              </ul>
            </div>

            {/* Security Features */}
            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>🔒</span> Security Features
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• Django Authentication System</li>
                <li>• Role-based authorization</li>
                <li>• Secure password hashing</li>
                <li>• Protected dashboard routes</li>
                <li>• Staff-only pharmacy management</li>
                <li>• User profile management</li>
                <li>• Image upload validation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Architecture Diagram */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-slate-900 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span>🏗</span> System Architecture
          </h2>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto leading-relaxed">
            <pre>{`                Patient
                   │
        Register / Login
                   │
                   ▼
          Django Authentication
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
 Product Catalog        Prescription Upload
        │                     │
        ▼                     ▼
 Shopping Cart        Pharmacy Dashboard
        │                     │
        ▼                     ▼
     Checkout        Inventory Management
        │                     │
        └──────────┬──────────┘
                   ▼
              SQLite Database`}</pre>
          </div>
        </section>

        {/* Technology Stack Table */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>💻</span> Technology Stack
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono font-bold text-slate-400 uppercase">
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Backend</td>
                  <td className="py-3 px-4">Python, Django 5.1</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Frontend</td>
                  <td className="py-3 px-4">HTML5, CSS3, Bootstrap, JavaScript</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Database</td>
                  <td className="py-3 px-4">SQLite</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Image Processing</td>
                  <td className="py-3 px-4">Pillow</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Version Control</td>
                  <td className="py-3 px-4">Git & GitHub</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Authentication</td>
                  <td className="py-3 px-4">Django Authentication System</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">UI Libraries</td>
                  <td className="py-3 px-4">Font Awesome, AOS, Swiper, GLightbox</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Core Modules */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>📂</span> Core Modules
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Authentication Module</h3>
              <p className="text-xs text-slate-600">Handles secure user registration, login, logout, and profile management.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Customer Store</h3>
              <p className="text-xs text-slate-600">Provides customers with medicine browsing, search, shopping cart, and checkout.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Pharmacy Dashboard</h3>
              <p className="text-xs text-slate-600">Allows staff to manage medicines, update inventory, monitor products, and process orders.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Drug Search</h3>
              <p className="text-xs text-slate-600">Provides fast medicine searching and filtering to improve user experience.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1 sm:col-span-2">
              <h3 className="font-bold text-slate-900">Inventory Management</h3>
              <p className="text-xs text-slate-600">Maintains medicine stock levels and enables pharmacies to update product availability.</p>
            </div>
          </div>
        </section>

        {/* My Contribution Section */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-[#6c47ff] text-white shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-purple-200 uppercase tracking-wider">
              — Leadership & Technical Role
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
              <span>👨‍💻</span> My Contribution (Project Manager & Backend Developer)
            </h2>
          </div>

          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            As the Project Manager and Backend Developer, I was responsible for leading project planning, coordinating development activities, and ensuring milestones were completed on schedule.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-purple-50">
            {[
              "Designing backend architecture using Django.",
              "Developing user authentication & authorization.",
              "Creating database models & relationships.",
              "Building REST-style backend logic.",
              "Implementing prescription management functionality.",
              "Developing pharmacy product management features.",
              "Managing medicine inventory operations.",
              "Implementing shopping cart & checkout backend logic.",
              "Integrating frontend components with backend services.",
              "Testing and debugging backend functionality.",
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 backdrop-blur-md">
                <span className="text-[#a3e635] font-bold">✓</span>
                <span>{task}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Future Improvements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges Faced */}
          <section className="space-y-4 p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>🎯</span> Challenges Faced
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Designing separate workflows for patients and pharmacies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Implementing role-based access control securely.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Managing relationships between users, pharmacies, products, and orders.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Handling image uploads securely with validation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Maintaining data consistency while updating medicine stock.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Designing a responsive interface across multiple device sizes.</span>
              </li>
            </ul>
          </section>

          {/* Future Improvements */}
          <section className="space-y-4 p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>📈</span> Future Improvements
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>AI-powered prescription validation & drug interaction detection.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Online payment gateway integration & live order tracking.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>GPS-based pharmacy recommendations & SMS notifications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Electronic health record (EHR) integration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Analytics dashboard for pharmacies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Cloud deployment with Docker and PostgreSQL.</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Learning Outcomes */}
        <section className="space-y-4 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🎓</span> Learning Outcomes
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold text-slate-800">
            {[
              "Django web development",
              "Full-stack architecture",
              "Database design & ORM",
              "User authentication & RBAC",
              "CRUD application development",
              "Git & GitHub collaboration",
              "Project management",
              "Backend API development",
              "Software testing & debugging",
            ].map((outcome, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-center">
                {outcome}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="pt-6 text-center">
          <Link
            href="/#projects"
            className="px-8 py-3.5 rounded-full bg-[#6c47ff] text-white font-bold text-xs shadow-lg hover:bg-[#5b39ee] hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>← Back to Portfolio Projects</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
