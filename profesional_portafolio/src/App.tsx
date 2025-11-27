//import React from "react";
import { useState } from "react";
import "./App.css";

// Portfolio single-file React component (TailwindCSS required)
// Usage: drop into a React app (Vite / Create React App) with Tailwind configured.

export default function Portfolio() {
  // Formulario de contacto
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    payload: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      payload: {
        ...prevData.payload,
        [name]: value,
      },
    }));
  };

  const clearForm = () => {
    setFormData({
      payload: {
        name: "",
        email: "",
        message: "",
      },
    });
  };

  const handldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.payload.name ||
      !formData.payload.email ||
      !formData.payload.message
    ) {
      alert("Por favor complete todos los campos del formulario");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.payload),
      });

      if (response.ok) {
        alert("Mensaje enviado correctamente");
        setFormData({
          payload: {
            name: "",
            email: "",
            message: "",
          },
        });
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje");
    }
  };

  const projects = [
    {
      title: "Massalud - Gestión de Productos Médicos",
      tech: "Node.js • Express • PostgreSQL • Vue • Nuxt",
      desc: "El proyecto massalud, consta de una plataforma, la cual sirva para agendar citas médicas e incluso solicitar medicamentos.",
      link: import.meta.env.VITE_PROYECT_MASSALUD,
    },
    {
      title: "Antigüedades Chespirito - E-commerce",
      tech: "Vue / Nuxt • API REST • PostgreSQL • Express • Node.js",
      desc: "La aplicación Antigüedades Chespirito trata del interés por la compra y venta de billetes y monedas, nacionales e internacionales.",
      link: import.meta.env.VITE_PROYECT_CHESPIRITO,
    },
    {
      title: "API de Días Hábiles (Producto)",
      tech: "Node.js • Express • TypeScript ",
      desc: "Microservicio para cálculo de días laborables colombianos, y feriados.",
      link: import.meta.env.VITE_PROYECT_API_LABORALES,
    },
    {
      title: "ARM STORE - E-commerce de Productos",
      tech: "Nest JS • React • PostgreSQL • TypeORM",
      desc: "La tienda ARM trata de un e-comerce de productos.",
      link: import.meta.env.VITE_PROYECT_ARMSTORE,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {/* HEADER */}
        <header className="w-full px-6 md:px-10 py-4 fixed top-0 left-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
      <div className="mx-auto flex items-center justify-between">

        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-15 h-15 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
            <img className="rounded-full" src="/logo.png" />
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">ANDRES ROJO</p>
            <p className="text-xs text-gray-500">Ingeniero de Software & Datos</p>
          </div>
        </a>

        {/* NAV — ESCRITORIO */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#presentacion" className="hover:text-green-600">Presentación</a>
          <a href="#formacion" className="hover:text-green-600">Formación</a>
          <a href="#proyectos" className="hover:text-green-600">Proyectos</a>
          <a href="#contacto" className="hover:text-green-600">Contacto</a>
        </nav>

        {/* BOTÓN HAMBURGUESA — MOBILE */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed top-0 right-0 h- w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-2" : "translate-x-full"
        }`}
      >
        
          <div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            ✕
          </button>
          </div>
        

        <nav className="flex flex-col p-4 text-sm gap-4">
          <a href="#presentacion" onClick={() => setMenuOpen(false)} className="hover:text-green-600">Presentación</a>
          <a href="#formacion" onClick={() => setMenuOpen(false)} className="hover:text-green-600">Formación</a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)} className="hover:text-green-600">Proyectos</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)} className="hover:text-green-600">Contacto</a>
        </nav>
      </div>

      {/* OVERLAY — PARA CERRAR EL MENÚ */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>

        <main className="pt-28">
          {/* HERO / PRESENTACION */}
          <section
            id="presentacion"
            className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="text-green-600 font-semibold">Hola — soy</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
                ANDRES ROJO
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-xl">
                Ingeniero de Software y Datos. Combino backend sólido con
                interfaces modernas y soluciones basadas en datos para construir
                productos digitales escalables y mantenibles.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:opacity-95"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Contactar
                </a>
              </div>

              <div className="mt-8 bg-white p-6 rounded-2xl shadow-md max-w-md">
                <h4 className="text-sm font-semibold text-gray-600">
                  Especialidades
                </h4>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div className="p-2 rounded-lg bg-gray-50">
                    Node.js • NestJS • Express
                  </div>
                  <div className="p-2 rounded-lg bg-gray-50">
                    Vue.js • React • Nuxt
                  </div>
                  <div className="p-2 rounded-lg bg-gray-50">
                    Postgres • TypeOrm • Sequelize
                  </div>
                  <div className="p-2 rounded-lg bg-gray-50">
                    Git • CI/CD • GitHub
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60"
                    alt="coding desk"
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold">¿Qué ofrezco?</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    APIs robustas, interfaces limpias y soluciones orientadas a
                    datos. Entregas bien documentadas y comunicación fluida.
                  </p>

                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                      Architecture
                    </span>
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                      Testing
                    </span>
                    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                      Performance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FORMACION */}
          <section
            id="formacion"
            className="max-w-6xl mx-auto px-6 md:px-10 py-12"
          >
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-bold">Formación</h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Ingeniería de Software. Cursos y certificaciones en Node.js,
                NestJS, Vue, React, bases de datos y metodologías ágiles.
              </p>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Educación</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Ingeniería de Software — Iudigital de Antioquia
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Tecnologia en desarrollo de Software — Iudigital de
                    Antioquia
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Cursos - AWS ACADEMY</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Insignia AWS Cloudfundations
                  </p>
                  <a
                    href={import.meta.env.VITE_INSIGNIA_AWS}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="w-18 h-18 flex items-center"
                      src="/insigniaaws.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold">Metodologías</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Scrum • Kanban • Planificación y documentación
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="max-w-6xl mx-auto px-6 md:px-10 py-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold">Habilidades</h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                <Skill name="Node.js" icon="/nodejs.png" />
                <Skill name="NestJS" icon="/nest-js-logo.png" />
                <Skill name="Express" icon="/express.png" />
                <Skill name="Vue.js" icon="/vue js.png" />
                <Skill name="React" icon="/react.png" />
                <Skill name="Postgres" icon="/postgreSQL.png" />
                <Skill name="Git" icon="/git.png" />
                <Skill name="GitHub" icon="/github.png" />
              </div>
            </div>
          </section>

          {/* PROYECTOS */}
          <section
            id="proyectos"
            className="max-w-6xl mx-auto px-6 md:px-10 py-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Proyectos</h2>
              <p className="text-sm text-gray-500">
                Proyectos reales y demostraciones técnicas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-green-600 mt-2">{p.tech}</p>
                  <p className="mt-3 text-gray-600">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a
                      target="_blank"
                      href={p.link}
                      className="text-sm font-semibold text-gray-700 hover:text-green-600"
                    >
                      Ver detalles →
                    </a>
                    <div className="text-xs text-gray-400">2024 • Demo</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CONTACTO */}
          <section
            id="contacto"
            className="max-w-6xl mx-auto px-6 md:px-10 py-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-2xl shadow p-8">
                <h2 className="text-2xl font-bold">Contacto</h2>
                <p className="mt-2 text-gray-600">
                  ¿Tienes un proyecto, oferta o consultoría? Escríbeme:
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={import.meta.env.VITE_EMAIL}
                      className="text-green-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M12 13.065L.75 4.5h22.5L12 13.065zm-2.25-.495L.75 6.75v12.75h22.5V6.75l-9 5.82-1.5 1-1.5-1z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href={import.meta.env.VITE_WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M20.52 3.48A11.8 11.8 0 0 0 12 0a11.94 11.94 0 0 0-10.3 17.94L0 24l6.28-1.64A11.93 11.93 0 0 0 12 24a11.8 11.8 0 0 0 8.48-3.52A11.8 11.8 0 0 0 20.52 3.48zM12 22a9.78 9.78 0 0 1-5-1.36l-.36-.21-3.73.98 1-3.63-.24-.38A9.87 9.87 0 1 1 12 22zm5.32-7.31c-.29-.15-1.7-.84-1.96-.94s-.45-.15-.63.15-.72.94-.88 1.12-.33.23-.62.08a8.06 8.06 0 0 1-2.37-1.46A8.9 8.9 0 0 1 9 10.63c-.17-.29 0-.45.13-.6s.29-.33.43-.5a2 2 0 0 0 .29-.48.55.55 0 0 0 0-.52c-.08-.15-.63-1.52-.86-2.08s-.45-.46-.63-.47h-.54a1 1 0 0 0-.73.34 3.14 3.14 0 0 0-.98 2.32A5.45 5.45 0 0 0 6.32 12a10 10 0 0 0 3.68 3.89c.51.29 1 .54 1.53.78a3.64 3.64 0 0 0 2.37.33 3.07 3.07 0 0 0 2-1.41 2.59 2.59 0 0 0 .18-1.41c-.06-.1-.23-.16-.46-.27z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn / GitHub</p>
                    <div className="flex gap-3 mt-2">
                      <a
                        href={import.meta.env.VITE_LINKEDIN}
                        className="text-sm underline"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={import.meta.env.VITE_GITHUB}
                        className="text-sm underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form
                className="bg-white rounded-2xl shadow p-6"
                onSubmit={handldeSubmit}
              >
                <h3 className="font-semibold text-lg">Envíame un mensaje</h3>
                <div className="mt-4 grid gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.payload.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="border rounded-md px-3 py-2"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.payload.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border rounded-md px-3 py-2"
                  />
                  <textarea
                    name="message"
                    value={formData.payload.message}
                    onChange={handleChange}
                    placeholder="Mensaje"
                    className="border rounded-md px-3 py-2 h-28"
                  />
                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold"
                    >
                      Enviar
                    </button>
                    <button
                      type="button"
                      onClick={clearForm}
                      className="border px-3 py-2 rounded-md"
                    >
                      Limpiar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-8 py-8 border-t">
            <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-6">
              <div>© {new Date().getFullYear()} Andrés Rojo.</div>

              <div className="flex items-center gap-5 text-gray-600">
                {/* Instagram */}
                {/* <a href="#" className="hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                </a>

                {/* Facebook */}
                {/* <a href="#" className="hover:text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 5.006 3.657 9.128 8.438 9.878v-6.992H7.898v-2.886h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.874h2.773l-.443 2.886h-2.33V21.88C18.343 21.128 22 17.006 22 12z" />
                  </svg>
                </a> */}

                {/* GitHub */}
                <a
                  href={import.meta.env.VITE_GITHUB}
                  className="hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.395 7.868 10.918.575.105.782-.25.782-.556 0-.274-.01-1.003-.016-1.97-3.2.695-3.878-1.542-3.878-1.542-.523-1.33-1.278-1.683-1.278-1.683-1.044-.714.08-.699.08-.699 1.155.081 1.763 1.187 1.763 1.187 1.026 1.76 2.69 1.252 3.344.958.104-.743.402-1.253.732-1.543-2.553-.291-5.238-1.277-5.238-5.686 0-1.256.448-2.282 1.184-3.086-.119-.29-.513-1.462.112-3.048 0 0 .965-.309 3.16 1.18A10.98 10.98 0 0112 6.81c.976.004 1.96.132 2.876.388 2.193-1.489 3.156-1.18 3.156-1.18.627 1.586.233 2.758.114 3.048.74.804 1.182 1.83 1.182 3.086 0 4.42-2.69 5.391-5.253 5.676.41.353.775 1.047.775 2.111 0 1.526-.014 2.756-.014 3.129 0 .309.203.668.79.554C20.213 21.39 23.5 17.082 23.5 12 23.5 5.648 18.352.5 12 .5z" />
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href={import.meta.env.VITE_EMAIL}
                  className="hover:text-green-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 13.065L.75 4.5h22.5L12 13.065zm-2.25-.495L.75 6.75v12.75h22.5V6.75l-9 5.82-1.5 1-1.5-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

function Skill({ name, icon }: { name: string; icon?: string }) {
  return (
    <div className="p-4 border rounded-lg relative">
      <div className="flex items-center justify-between">
        {/* Nombre + icono */}
        <div className="flex items-center gap-3">
          <p className="font-semibold">{name}</p>
          {icon && (
            <img
              src={icon}
              alt={name}
              className="w-8 h-8 object-contain absolute right-3 top-1/2 -translate-y-1/2"
            />
          )}
        </div>

        {/* (si quieres agregar barras o niveles) */}
        <div className="w-24 h-3"></div>
      </div>
    </div>
  );
}
