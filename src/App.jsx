import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Menu, X, Mail, Phone, Download, Award, BookOpen, GraduationCap, BriefcaseBusiness, FileText, ListChecks, Newspaper, Home as HomeIcon, Link as LinkIcon, User } from "lucide-react";

// === Site Config ===
const SITE = {
  name: "Peal Ahamed Shanto",
  tagline: "PhD Student · Agricultural & Applied Economics · Texas Tech University",
  email: "pshanto@ttu.edu",
  altEmail: "shantopeal@gmail.com",
  phone: "+1 (309) 844-0120",
  location: "Lubbock, Texas, USA",
  headshot: "1234.jpg",
  cvUrl: "CV of Shanto, Peal Ahamed.pdf",
  links: [
    { label: "Department Profile", href: "https://www.depts.ttu.edu/aaec/people/phd/PealAhamed_Shanto.php" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/peal-ahamed-shanto/" },
  ],
};

const RESEARCH_INTERESTS = ["Energy Economics", "Environmental Economics", "Food Policy", "Trade Economics"];

const EDUCATION = [
  { school: "Texas Tech University", place: "Lubbock, TX", degree: "Ph.D., Agricultural & Applied Economics", dates: "Fall 2025 – Present" },
  { school: "Texas Tech University", place: "Lubbock, TX", degree: "M.A., Economics (CGPA 3.714/4.00)", dates: "Fall 2023 – Spring 2025" },
  { school: "Western Illinois University", place: "Macomb, IL", degree: "M.S., Applied Statistics & Decision Analytics (CGPA 4.00/4.00)", dates: "Fall 2022 – Summer 2023" },
  { school: "Western Illinois University", place: "Macomb, IL", degree: "Post-Baccalaureate Certificate in Business Analytics", dates: "Fall 2022 – Spring 2023" },
  { school: "Shahjalal University of Science & Technology", place: "Sylhet, Bangladesh", degree: "MBA, Finance & Banking (CGPA 3.66/4.00)", dates: "Jul 2020 – Jun 2022" },
  { school: "Shahjalal University of Science & Technology", place: "Sylhet, Bangladesh", degree: "BBA, Finance & Banking (CGPA 3.62/4.00)", dates: "Jan 2016 – Nov 2019" },
];

const EXPERIENCE = [
  { role: "Research Assistant", org: "Department of Agricultural & Applied Economics, Texas Tech University", dates: "Fall 2025 – Present" },
  { role: "Teaching Assistant", org: "Department of Economics, Texas Tech University", dates: "Fall 2023 – Spring 2025", bullets: [
    "Principles of Microeconomics (Fall 2023)",
    "Water Economics; Transportation Economics (Spring 2024)",
    "Principles of Macroeconomics (Summer 2024)",
    "Intermediate Macroeconomics; Special Topics in Applied Economics: Economic Growth & Development (Fall 2024)",
    "History of Economics (Spring 2025)",
  ]},
  { role: "Engagement Associate", org: "Western Illinois University", dates: "Sep 2022 – May 2023" },
  { role: "Education Coordinator", org: "GMC Studies", dates: "Oct 2021 – Jul 2022" },
  { role: "Instructor & Co‑Founder", org: "Score at IELTS", dates: "Nov 2020 – Jul 2022" },
  { role: "Research Assistant", org: "University of Rajshahi, Bangladesh", dates: "Jan 2018 – Dec 2018" },
  { role: "Assistant Teacher", org: "Bholanondo Night High School, Sylhet", dates: "Mar 2016 – Nov 2019" },
];

const CONFERENCES = [
  { authors: "Shanto, P. A., Hasan, M.", title: "Unraveling the Relationship Between Governance and Ecological Footprint: A System GMM Analysis of Global Data", venue: "Southern Economic Association, 94th Annual Meeting", place: "Washington, DC", dates: "Nov 22–25, 2024" },
];

const POSTERS = [
  { authors: "Shanto, P. A., Hasan, M.", title: "The Impact of Income Inequality on Ecological Footprint", venue: "23rd Annual Graduate Student Research Poster Competition", place: "Texas Tech University, Lubbock, TX", dates: "Mar 8, 2024" },
  { authors: "Shanto, P. A., Hasan, M.", title: "Unraveling the Relationship Between Governance and Ecological Footprint: A System GMM Analysis of Global Data", venue: "Illinois Geographical Society Meeting", place: "Fort Madison, Iowa", dates: "Apr 25–28, 2024" },
];

const SKILLS = ["R", "Python", "Stata", "SPSS", "JMP Pro", "Tableau", "LaTeX", "GTAP", "VOSviewer"];

const VOLUNTEER = [
  { role: "Ad hoc Reviewer", items: ["International Review of Financial Analysis (Elsevier)", "Climate Finance (Springer Nature)"] },
  { role: "Judge", items: ["Undergraduate Research Conference Poster Presentation, Texas Tech University (Apr 8, 2024)", "SUST BBA Business Case Competition, Shahjalal University of Science & Technology (Jun 17, 2021)"] },
];

const AWARDS = [
  { name: "PIC Summer Institute (Summer 2024)", details: "$1,000" },
  { name: "Phonathon Student Scholarship (Jul 2023)", details: "$600" },
  { name: "Dean's Award for Outstanding Graduate Student (May 2023)", details: "$500" },
  { name: "Honorable Mention for Visualization – DataFest 2023 (Apr 2023)", details: "American Statistical Association" },
  { name: "President's International Scholarship (2022–2023)", details: "$4,000" },
  { name: "Research Grant – IQAC (Jun 2022)", details: "BDT 500,000 (~$4,000)" },
  { name: "Runner Up – Woori Bank National Idea Fest (Nov 2019)", details: "BDT 50,000 (~$400)" },
  { name: "Finalist – HR HULK Case Study Competition (Aug 2016)", details: "United International University" },
];

// Shell with navigation
function Shell({ children }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", to: "/", icon: HomeIcon },
    { label: "Research", to: "/research", icon: BookOpen },
    { label: "Education", to: "/education", icon: GraduationCap },
    { label: "Experience", to: "/experience", icon: BriefcaseBusiness },
    { label: "Publications", to: "/publications", icon: Newspaper },
    { label: "Awards", to: "/awards", icon: Award },
    { label: "Skills", to: "/skills", icon: ListChecks },
    { label: "Volunteer", to: "/volunteer", icon: FileText },
    { label: "Contact", to: "/contact", icon: Mail },
  ];
  return (
      <div className="min-h-screen flex flex-col justify-between font-sans antialiased overflow-x-hidden">
        <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <NavLink to="/" className="font-semibold text-lg flex items-center gap-2">
            <User className="w-5 h-5"/> {SITE.name}
          </NavLink>
          <nav className="hidden md:flex gap-4">
            {links.map(({ label, to }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `text-sm px-2 py-1 rounded-xl ${isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>{label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={SITE.cvUrl} className="hidden sm:inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm hover:shadow"><Download className="w-4 h-4"/> Download CV</a>
            <button className="md:hidden rounded-xl p-2 border" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}</button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="w-full px-6 py-3 grid gap-2">
              {links.map(({ label, to }) => (
                <NavLink key={to} to={to} className={({ isActive }) => `py-2 text-sm ${isActive ? 'font-semibold' : ''}`} onClick={() => setOpen(false)}>{label}</NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
          <main className="flex-grow overflow-x-hidden">{children}</main>
          <footer className="border-t bg-white overflow-x-hidden">
        <div className="w-full px-6 py-10 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2"><Mail className="w-4 h-4"/> {SITE.email}</a>
              <a href={`mailto:${SITE.altEmail}`} className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2"><Mail className="w-4 h-4"/> {SITE.altEmail}</a>
              <span className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2"><Phone className="w-4 h-4"/> {SITE.phone}</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Links</h3>
            <ul className="mt-2 text-sm text-gray-700 space-y-2">
              {SITE.links.map(l => (
                <li key={l.href}><a className="inline-flex items-center gap-2 hover:underline" href={l.href} target="_blank" rel="noreferrer"><LinkIcon className="w-4 h-4"/> {l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Download</h3>
            <a href={SITE.cvUrl} className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm"><Download className="w-4 h-4"/> Curriculum Vitae</a>
            <p className="mt-3 text-xs text-gray-500">Last updated: Aug 2025</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}

// === Pages ===
function Home() {
  return (
    <section className="pt-10 md:pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{SITE.name}</h1>
          <p className="mt-2 text-lg text-gray-700">{SITE.tagline}</p>
          <p className="mt-4 text-gray-700">I am an applied economist interested in how policy, markets, and risk shape sustainability—especially in energy and environmental domains. My current research focuses on ecological footprints, governance, and the economics of growth & trade.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={SITE.cvUrl} className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm hover:opacity-90"><Download className="w-4 h-4"/> Download CV</a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm"><Mail className="w-4 h-4"/> {SITE.email}</a>
            <a href={`mailto:${SITE.altEmail}`} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm"><Mail className="w-4 h-4"/> {SITE.altEmail}</a>
            <span className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm"><Phone className="w-4 h-4"/> {SITE.phone}</span>
          </div>
          <div className="mt-4 text-sm text-gray-600">Based in {SITE.location}.</div>
        </div>
        <div className="md:col-span-1">
          <div className="rounded-3xl border p-5 bg-white shadow-sm">
            <img src={SITE.headshot} alt={`${SITE.name} headshot`} className="w-full aspect-square object-cover rounded-2xl"/>
            <h3 className="font-medium mt-4">Research interests</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              {RESEARCH_INTERESTS.map((r) => (
                <li key={r} className="flex items-start gap-2"><span className="mt-1">•</span><span>{r}</span></li>
              ))}
            </ul>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {SITE.links.map((s) => (
                <a key={s.label} href={s.href} className="text-xs px-3 py-2 rounded-xl border text-center hover:shadow" target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="py-12">
      <div className="w-full px-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border bg-white p-5">
          <h3 className="font-medium">Conference</h3>
          <ul className="mt-3 space-y-3 text-sm text-gray-700">
            {CONFERENCES.map((c, i) => (
              <li key={i}>
                <p className="font-medium">{c.title}</p>
                <p>{c.authors}</p>
                <p className="text-gray-600">{c.venue}, {c.place} — {c.dates}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border bg-white p-5">
          <h3 className="font-medium">Posters</h3>
          <ul className="mt-3 space-y-3 text-sm text-gray-700">
            {POSTERS.map((p, i) => (
              <li key={i}>
                <p className="font-medium">{p.title}</p>
                <p>{p.authors}</p>
                <p className="text-gray-600">{p.venue}, {p.place} — {p.dates}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-12">
      <div className="w-full px-6 grid md:grid-cols-2 gap-4">
        {EDUCATION.map((e) => (
          <div key={e.degree} className="rounded-3xl border bg-white p-5">
            <p className="font-medium">{e.degree}</p>
            <p className="text-gray-800">{e.school}</p>
            <p className="text-gray-600 text-sm">{e.place} · {e.dates}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-12">
      <div className="w-full px-6 grid md:grid-cols-2 gap-4">
        {EXPERIENCE.map((x) => (
          <div key={x.role + x.org} className="rounded-3xl border bg-white p-5">
            <p className="font-medium">{x.role}</p>
            <p className="text-gray-800">{x.org}</p>
            <p className="text-gray-600 text-sm">{x.dates}</p>
            {x.bullets && (
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {x.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-3xl border bg-white p-6 text-sm text-gray-700">
          <p className="text-gray-600">Add peer‑reviewed articles, under review, working papers, and popular writing here.</p>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section className="py-12">
      <div className="w-full px-6 grid md:grid-cols-2 gap-4">
        {AWARDS.map((a) => (
          <div key={a.name} className="rounded-3xl border bg-white p-5 flex items-start gap-3">
            <Award className="w-5 h-5 shrink-0"/>
            <div>
              <p className="font-medium">{a.name}</p>
              {a.details && <p className="text-gray-600 text-sm">{a.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-12">
      <div className="w-full px-6">
        <div className="rounded-3xl border bg-white p-5">
          <ul className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <li key={s} className="px-3 py-1.5 rounded-2xl border text-sm bg-gray-50">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Volunteer() {
  return (
    <section className="py-12">
      <div className="w-full px-6 grid md:grid-cols-2 gap-4">
        {VOLUNTEER.map((s) => (
          <div key={s.role} className="rounded-3xl border bg-white p-5">
            <p className="font-medium">{s.role}</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <img src={SITE.headshot} alt={`${SITE.name} headshot`} className="w-full aspect-square object-cover rounded-2xl border"/>
        </div>
        <div className="md:col-span-2 rounded-3xl border bg-white p-6">
          <h3 className="font-semibold text-lg">Contact</h3>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2"><Mail className="w-4 h-4"/> {SITE.email}</a>
            <a href={`mailto:${SITE.altEmail}`} className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2"><Mail className="w-4 h-4"/> {SITE.altEmail}</a>
            <span className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2"><Phone className="w-4 h-4"/> {SITE.phone}</span>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">External profiles</h4>
            <ul className="mt-2 text-sm text-gray-700 space-y-2">
              {SITE.links.map(l => (
                <li key={l.href}><a className="inline-flex items-center gap-2 hover:underline" href={l.href} target="_blank" rel="noreferrer"><LinkIcon className="w-4 h-4"/> {l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Shell>
    </Router>
  );
}
