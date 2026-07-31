import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "SAPRO Dashboard - Greenhouse Management System | Pramudi Biyonika",
  description: "Full-stack web-based smart greenhouse monitoring and management system built with React.js, Tailwind CSS, Firebase, Node.js, and MySQL.",
};

export default function SaproProjectPage() {
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
            <span className="text-[#6c47ff] font-bold">SAPRO DASHBOARD</span>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#6c47ff] text-white font-bold text-xs font-mono">
              Team Project (2026)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#a3e635] text-slate-950 font-bold text-xs font-mono">
              Project Manager & Backend Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            SAPRO Dashboard 1.0 <span className="text-[#6c47ff]">— Greenhouse Management System</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl leading-relaxed font-medium">
            A full-stack, web-based smart greenhouse monitoring and management system developed to modernize how farmers and operators track environmental metrics, automate schedules, and control greenhouse operations.
          </p>

          {/* Project Header Image */}
          <div className="relative w-full h-72 sm:h-96 rounded-[32px] overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 mt-6">
            <Image
              src="/sapro_thumb.jpg"
              alt="SAPRO Greenhouse Management System Dashboard Interface"
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
            "React.js",
            "Tailwind CSS",
            "Firebase Firestore",
            "Firebase Auth",
            "Node.js",
            "MySQL",
            "Chart.js",
            "Recharts",
            "Cloud Messaging",
            "Git & GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* About SAPRO Dashboard Section */}
        <section className="space-y-4 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🌿</span> About SAPRO Dashboard
          </h2>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              SAPRO Dashboard 1.0 is a full-stack, web-based smart greenhouse monitoring and management system developed to modernize how farmers and greenhouse operators track and control greenhouse operations. The platform bridges the gap between manual greenhouse management and smart agriculture technology by providing a centralized digital solution for environmental monitoring, watering automation, planting schedules, and performance reporting.
            </p>
            <p>
              Traditional greenhouse management typically depends on physical inspection rounds, manual logbooks, and — for smarter setups — expensive IoT hardware installations before any software value can be demonstrated. This process can be inefficient, error-prone, and inaccessible to smaller operations that can&apos;t yet invest in sensor infrastructure.
            </p>
            <p>
              SAPRO Dashboard addresses these challenges by simulating real-time environmental data (temperature, humidity, soil moisture) so the full management experience — monitoring, scheduling, alerts, and analytics — can be built and used immediately, with a clear upgrade path to real IoT sensors later. Greenhouse staff can manage watering and planting schedules, respond to alerts, and generate performance reports, while admins oversee users, system settings, and activity logs from a dedicated control panel.
            </p>
            <p>
              The system was designed with usability, scalability, and role-based security in mind, using React.js and Firebase to follow modern web development practices. By digitizing greenhouse workflows, SAPRO Dashboard reduces manual tracking effort, minimizes missed watering/planting events, and gives operators clearer, data-driven visibility into greenhouse health.
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
              "Develop a centralized web dashboard for greenhouse monitoring and management.",
              "Simulate environmental sensor data (temperature, humidity, soil moisture) so features work without physical hardware.",
              "Automate watering and planting schedules with reminders and missed-task alerts.",
              "Generate analytics and exportable reports for better greenhouse decision-making.",
              "Provide real-time alerts for abnormal environmental conditions.",
              "Ensure secure, role-based user management and access control.",
              "Build a responsive web application usable across desktop and mobile devices.",
              "Establish a clear upgrade path from simulated data to real IoT sensor integration.",
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[#6c47ff] font-bold">✓</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Features (Staff, Admin, Security) */}
        <section className="space-y-8 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🚀</span> Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Staff Features */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>🧑🌾</span> Staff Features
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• Secure login with role-based access</li>
                <li>• Color-coded environmental status cards</li>
                <li>• Real-time & historical graphs (temp, humidity, moisture)</li>
                <li>• Watering schedules & history log</li>
                <li>• Planting batch calendar (seeded → growing → harvested)</li>
                <li>• On-screen alerts for abnormal readings</li>
                <li>• Manual sensor input & simulation slider</li>
              </ul>
            </div>

            {/* Admin Features */}
            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>🛠️</span> Admin Features
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• Dedicated admin management panel</li>
                <li>• Add, edit & remove system users</li>
                <li>• Login history & activity logs</li>
                <li>• Configure threshold limits</li>
                <li>• Greenhouse zones & preferences</li>
                <li>• Export analytics reports (PDF/CSV)</li>
                <li>• Password resets & data backup</li>
              </ul>
            </div>

            {/* Security Features */}
            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span>🔒</span> Security Features
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>• Firebase Authentication system</li>
                <li>• Role-based authorization (Admin vs Staff)</li>
                <li>• Secure password reset workflow</li>
                <li>• Protected, role-aware dashboard routes</li>
                <li>• Admin-only system controls</li>
                <li>• User profile management</li>
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
            <pre>{`                    User (Admin / Staff)
                           │
                  Register / Login
                           │
                           ▼
                Firebase Authentication
                           │
            ┌──────────────┴──────────────┐
            │                             │
            ▼                             ▼
  Dashboard Home (Overview)      Admin Management Panel
            │                             │
            ▼                             ▼
  Environmental Monitoring         User & Activity Logs
            │                             │
            ▼                             ▼
  Watering & Planting Modules     Settings & Configuration
            │                             │
            ▼                             ▼
  Notification & Alert Center     Data Analytics & Reports
            │                             │
            └──────────────┬──────────────┘
                           ▼
              Firebase Firestore / MySQL Database`}</pre>
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
                  <td className="py-3 px-4 font-bold text-slate-900">Frontend</td>
                  <td className="py-3 px-4">React.js, Tailwind CSS</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Backend</td>
                  <td className="py-3 px-4">Firebase / Node.js + MySQL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Database</td>
                  <td className="py-3 px-4">Firebase Firestore, MySQL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Graphs & Visualization</td>
                  <td className="py-3 px-4">Chart.js, Recharts</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Authentication</td>
                  <td className="py-3 px-4">Firebase Authentication</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Notifications</td>
                  <td className="py-3 px-4">Firebase Cloud Messaging</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Data Simulation</td>
                  <td className="py-3 px-4">Local JSON + periodic randomized updates</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Version Control</td>
                  <td className="py-3 px-4">Git & GitHub</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 10 Core Modules Grid */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>📂</span> Core Modules
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">User Management</h3>
              <p className="text-xs text-slate-600">Handles registration, login, password recovery, and role-based profiles (Admin/Staff).</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Dashboard Home</h3>
              <p className="text-xs text-slate-600">Overview showing live status, color-coded indicators, and daily task summaries.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Environmental Monitoring</h3>
              <p className="text-xs text-slate-600">Tracks and graphs temp, humidity, and moisture in real time or simulation mode with PDF/CSV export.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Watering Management</h3>
              <p className="text-xs text-slate-600">Schedules watering activity, supports manual simulation, and flags missed tasks.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Planting Schedule Manager</h3>
              <p className="text-xs text-slate-600">Tracks planting batches from seeding to harvest with calendar views and notifications.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Data Analytics & Reports</h3>
              <p className="text-xs text-slate-600">Aggregates historical logs into moisture trends, watering totals, and alert summaries.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Notification & Alert Center</h3>
              <p className="text-xs text-slate-600">Threshold checks surfacing on-screen and email alerts for critical conditions.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Simulation & Data Input Panel</h3>
              <p className="text-xs text-slate-600">Generates or manually sets sensor values so every feature can be tested without hardware.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Settings & Configuration</h3>
              <p className="text-xs text-slate-600">Defines thresholds, greenhouse zones, units, and display theme toggles.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Admin Management Panel</h3>
              <p className="text-xs text-slate-600">User administration, activity logging, password resets, and data backup controls.</p>
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
            As the Project Manager and Backend Developer, I was responsible for leading project planning, coordinating development activities across a five-person team, and ensuring milestones were completed on schedule.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-purple-50">
            {[
              "Structuring project into ten functional modules & defining backend logic.",
              "Designing database schema for users, environmental data & schedules.",
              "Developing backend authentication & role-based authorization (Admin/Staff).",
              "Implementing backend logic for watering & planting scheduling.",
              "Building threshold-based alert and notification logic.",
              "Structuring simulation data pipeline in place of physical sensors.",
              "Coordinating integration between frontend views & Firebase services.",
              "Testing and debugging backend functionality ahead of team demos.",
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
                <span>Designing a working system without access to real IoT hardware.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Implementing reliable real-time data visualization from simulated feeds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Managing complex schedules across watering and planting modules.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Structuring role-based access control across Admin and Staff views.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Maintaining data consistency while supporting live and simulated modes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6c47ff] font-bold">▹</span>
                <span>Coordinating a five-person team under a coursework timeline.</span>
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
                <span>AI-based plant health predictions & anomaly detection.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Integration with real IoT sensors for live environmental telemetry.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Mobile app companion (Flutter) for on-the-go greenhouse management.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Offline desktop mode for demos without web hosting.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Advanced weather forecast integration for proactive scheduling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime-700 font-bold">▹</span>
                <span>Push notification delivery via Firebase Cloud Messaging.</span>
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
              "Backend multi-module architecture",
              "Time-series database design",
              "Role-based authentication",
              "Firebase Auth & Firestore",
              "Simulated IoT data pipelines",
              "5-person team project leadership",
              "Git & GitHub team collaboration",
              "React & Firebase fullstack integration",
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
