import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Mail, Phone, ExternalLink, RefreshCw, 
  ChevronRight, Award, ShieldCheck, Heart, Send, CheckCircle2,
  Package, GitBranch, Star, Users, BookOpen
} from 'lucide-react';

// ==========================================
// PÁGINA 1: INICIO (CONSUMO DE API PÚBLICA GITHUB)
// Requisito A: API pública con >= 3 datos e imagen obligatoria
// ==========================================
function InicioPage({ setActiveTab }) {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGithubData = async () => {
    setLoading(true);
    setError(null);
    try {
      // API pública de GitHub (organización comunitaria / desarrollo)
      const resUser = await fetch('https://api.github.com/users/octocat');
      if (!resUser.ok) throw new Error('Error al conectar con la API de GitHub');
      const dataUser = await resUser.json();
      setProfile(dataUser);

      const resRepos = await fetch('https://api.github.com/users/octocat/repos?per_page=3&sort=updated');
      if (resRepos.ok) {
        const dataRepos = await resRepos.json();
        setRepos(dataRepos);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      {/* Banner Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #4a151b 0%, #78281f 60%, #b03a2e 100%)',
        color: '#ffffff',
        padding: '4rem 2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(74, 21, 27, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '3px', 
            fontSize: '0.85rem', 
            fontWeight: 'bold',
            background: 'rgba(255,255,255,0.15)',
            padding: '6px 14px',
            borderRadius: '20px',
            display: 'inline-block',
            marginBottom: '1rem'
          }}>
            Tradición y Excelencia Artesanal • Cafayate
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.2rem' }}>
            Productos Regionales Merceditas
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: '0.92', marginBottom: '2rem', lineHeight: '1.7' }}>
            Auténticos sabores y piezas ancestrales de los Valles Calchaquíes. Quesos y quesillos de cabra de pastura, cortes selectos de cabrito y cordero, y orfebrería en astas combinada con fina alpaca.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('catalogo')}
              style={{
                backgroundColor: '#e67e22',
                color: '#fff',
                padding: '0.85rem 1.8rem',
                borderRadius: '10px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(230, 126, 34, 0.4)'
              }}
            >
              Explorar Catálogo Regional <ChevronRight size={18} />
            </button>
            <button 
              onClick={() => setActiveTab('contacto')}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '0.85rem 1.8rem',
                borderRadius: '10px',
                fontWeight: '600'
              }}
            >
              Ubicación y Pedidos
            </button>
          </div>
        </div>
      </section>

      {/* Características y Valores */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: '#fff', padding: '1.8rem', borderRadius: '14px', border: '1px solid #ebdcd0' }}>
          <div style={{ color: '#78281f', marginBottom: '1rem' }}><Award size={36} /></div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#4a151b' }}>Elaboración Artesanal</h3>
          <p style={{ color: '#555', fontSize: '0.95rem' }}>Recetas transmitidas de generación en generación con fermentación natural y leche pura de cabra de corral propio.</p>
        </div>
        <div style={{ background: '#fff', padding: '1.8rem', borderRadius: '14px', border: '1px solid #ebdcd0' }}>
          <div style={{ color: '#78281f', marginBottom: '1rem' }}><MapPin size={36} /></div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#4a151b' }}>Identidad Calchaquí</h3>
          <p style={{ color: '#555', fontSize: '0.95rem' }}>Establecidos en Cafayate, Salta, respetando el ciclo productivo, el bienestar animal y el entorno natural.</p>
        </div>
        <div style={{ background: '#fff', padding: '1.8rem', borderRadius: '14px', border: '1px solid #ebdcd0' }}>
          <div style={{ color: '#78281f', marginBottom: '1rem' }}><ShieldCheck size={36} /></div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#4a151b' }}>Pureza & Calidad</h3>
          <p style={{ color: '#555', fontSize: '0.95rem' }}>Cortes tiernos de cabrito lechal y orfebrería de autor pulida a mano con alpaca legítima y asta seleccionada.</p>
        </div>
      </section>

      {/* SECCIÓN OBLIGATORIA: Consumo de API Pública GitHub */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem',
        borderRadius: '16px',
        border: '1px solid #e2d7cd',
        boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#78281f', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Requisito 1.A • Programación Web II
            </span>
            <h2 style={{ fontSize: '1.7rem', color: '#4a151b' }}>Conectividad con API Pública de GitHub</h2>
          </div>
          <button 
            onClick={fetchGithubData} 
            disabled={loading}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.6rem 1.2rem',
              backgroundColor: '#f6ede4',
              color: '#78281f',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.9rem'
            }}
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> Actualizar Datos
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#78281f' }}>
            <p>Consultando API REST de GitHub (https://api.github.com)...</p>
          </div>
        ) : error ? (
          <div style={{ backgroundColor: '#fde8e8', color: '#9b1c1c', padding: '1rem', borderRadius: '8px' }}>
            Error al consultar datos: {error}
          </div>
        ) : profile ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            {/* Imagen obligatoria + Datos principales */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: '#faf5f0', padding: '1.5rem', borderRadius: '12px' }}>
              <img 
                src={profile.avatar_url} 
                alt={profile.login} 
                style={{ width: '100px', height: '100px', borderRadius: '50%', border: '4px solid #78281f' }} 
              />
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#333' }}>{profile.name || profile.login}</h3>
                <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '0.5rem' }}>@{profile.login}</p>
                <a 
                  href={profile.html_url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#e67e22', fontSize: '0.85rem', fontWeight: 'bold' }}
                >
                  Ver Perfil GitHub <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Mínimo 3 datos mostrados de la API */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div style={{ background: '#faf5f0', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                <BookOpen size={22} color="#78281f" style={{ margin: '0 auto 6px' }} />
                <span style={{ fontSize: '0.8rem', color: '#666' }}>Repositorios Públicos</span>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4a151b' }}>{profile.public_repos}</p>
              </div>
              <div style={{ background: '#faf5f0', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                <Users size={22} color="#78281f" style={{ margin: '0 auto 6px' }} />
                <span style={{ fontSize: '0.8rem', color: '#666' }}>Seguidores</span>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4a151b' }}>{profile.followers}</p>
              </div>
              <div style={{ background: '#faf5f0', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                <Star size={22} color="#78281f" style={{ margin: '0 auto 6px' }} />
                <span style={{ fontSize: '0.8rem', color: '#666' }}>ID de Usuario</span>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4a151b' }}>{profile.id}</p>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

// ==========================================
// PÁGINA 2: CATÁLOGO LOCAL (ARRAY DE OBJETOS)
// Requisito B: Array de objetos local con imágenes
// ==========================================
function CatalogoPage() {
  const [categoria, setCategoria] = useState('todas');

  const productosLocales = [
    {
      id: 1,
      nombre: "Queso Criollo de Cabra Tradicional",
      categoria: "lacteos",
      descripcion: "Elaborado con 100% leche fresca de cabras criadas en pastizales de Cafayate. Textura firme, pasta semidura y sabor intenso característico del valle.",
      presentacion: "Horma de 800g aprox. envasada al vacío",
      precio: "$8.500",
      imagen: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 2,
      nombre: "Quesillo Tradicional Calchaquí",
      categoria: "lacteos",
      descripcion: "Queso de pasta hilada típico del noroeste argentino obtenido por acidificación natural y trabajado a mano sobre tablas de algarrobo.",
      presentacion: "Plancha artesanal de 450g",
      precio: "$5.200",
      imagen: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 3,
      nombre: "Cabrito Lechal de Cafayate",
      categoria: "carnes",
      descripcion: "Carne magra, sumamente tierna y delicada alimentada únicamente a leche materna. Ideal para asar a la leña de jarilla y chañar.",
      presentacion: "Medio cabrito fraccionado (aprox. 3.5 kg)",
      precio: "$32.000",
      imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 4,
      nombre: "Cortes de Cordero Serrano",
      categoria: "carnes",
      descripcion: "Criado en altura sobre las sierras calchaquíes. Carne con justo veteado de grasa, aroma silvestre y óptima textura para cazuelas o estofados.",
      presentacion: "Combo de costillar y paleta (3 kg)",
      precio: "$26.500",
      imagen: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 5,
      nombre: "Cuchillo Criollo en Asta de Cabra y Alpaca",
      categoria: "artesanias",
      descripcion: "Hoja de acero templado al carbono forjada artesanalmente. Cabo moldeado en asta natural de chivo seleccionado con virolas de alpaca cincelada.",
      presentacion: "Incluye vaina de cuero vaqueta cosida a lezna",
      precio: "$28.000",
      imagen: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: 6,
      nombre: "Vaso Chopp / Cuerno Calchaquí con Alpaca",
      categoria: "artesanias",
      descripcion: "Astas de cabra pulidas a espejo e higienizadas para consumo, montadas sobre base y bocas ornamentadas con guardas diaguitas en fina alpaca.",
      presentacion: "Pieza única numerada",
      precio: "$19.500",
      imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80"
    }
  ];

  const productosFiltrados = categoria === 'todas' 
    ? productosLocales 
    : productosLocales.filter(p => p.categoria === categoria);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#78281f', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Requisito 1.B • Datos de Array Local
        </span>
        <h2 style={{ fontSize: '2.4rem', color: '#4a151b', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
          Producción de los Valles Calchaquíes
        </h2>
        <p style={{ color: '#666', fontSize: '1.05rem' }}>
          Cada pieza y producto refleja el respeto por nuestras pasturas, animales criados a cielo abierto y el legado de artesanos cafayateños.
        </p>

        {/* Botones de Filtro */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'todas', label: 'Todos los Productos' },
            { id: 'lacteos', label: 'Quesos y Quesillos' },
            { id: 'carnes', label: 'Cabrito y Cordero' },
            { id: 'artesanias', label: 'Astas y Alpaca' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setCategoria(f.id)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: '20px',
                fontWeight: '600',
                fontSize: '0.9rem',
                backgroundColor: categoria === f.id ? '#78281f' : '#fff',
                color: categoria === f.id ? '#fff' : '#666',
                border: '1px solid #ddd'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Productos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {productosFiltrados.map((item) => (
          <div 
            key={item.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              border: '1px solid #ede3da',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(74, 21, 27, 0.85)',
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>
                {item.categoria}
              </span>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: '#4a151b', marginBottom: '0.6rem' }}>
                  {item.nombre}
                </h3>
                <p style={{ color: '#555', fontSize: '0.92rem', marginBottom: '1rem', lineHeight: '1.5' }}>
                  {item.descripcion}
                </p>
                <div style={{ background: '#fcf8f4', padding: '0.6rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', color: '#8d5b4c', marginBottom: '1.2rem' }}>
                  <strong>Presentación:</strong> {item.presentacion}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f0e6de', paddingTop: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#888', display: 'block' }}>Precio estimado</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#78281f' }}>{item.precio}</span>
                </div>
                <button 
                  style={{
                    backgroundColor: '#e67e22',
                    color: '#fff',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                  onClick={() => alert(`Para encargar "${item.nombre}", utiliza la sección de Contacto.`)}
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// PÁGINA 3: CONTACTO FUNCIONAL Y MAPA EMBEBIDO
// Requisito C: Formulario funcional (envío a email) + Mapa embebido al lado
// ==========================================
function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    productoInteres: 'Queso y Quesillo de Cabra',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    // Al usar mailto: en el action tradicional, dejamos que se abra el cliente de correo predeterminado
    // y mostramos un estado visual amigable de confirmación.
    setEnviado(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#78281f', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Requisito 1.C • Formulario Funcional & Mapa Embebido
        </span>
        <h2 style={{ fontSize: '2.4rem', color: '#4a151b', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
          Contacto Directo y Ubicación
        </h2>
        <p style={{ color: '#666', fontSize: '1.05rem' }}>
          Visita nuestro punto de elaboración en Cafayate o envíanos tu pedido de productos regionales frescos y artesanías.
        </p>
      </div>

      {/* Contenedor 2 Columnas: Formulario a un lado, Mapa al otro */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '2.5rem',
        alignItems: 'stretch'
      }}>
        {/* Formulario de Contacto Funcional */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2.5rem',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          border: '1px solid #ebdcd0'
        }}>
          <h3 style={{ fontSize: '1.4rem', color: '#4a151b', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={22} color="#78281f" /> Envíanos tu consulta
          </h3>

          {enviado && (
            <div style={{
              backgroundColor: '#e8f8f0',
              border: '1px solid #a3e6cd',
              color: '#0e6245',
              padding: '1rem',
              borderRadius: '10px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <CheckCircle2 size={20} />
              <span>Preparando mensaje para despacho directo a tu gestor de correo...</span>
            </div>
          )}

          {/* Formulario con envío funcional a correo vía mailto */}
          <form 
            action="mailto:merceditascafayate@gmail.com" 
            method="POST" 
            encType="text/plain"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '4px' }}>
                Nombre y Apellido *
              </label>
              <input 
                type="text" 
                name="Nombre" 
                required
                placeholder="Ej. Juan Pérez"
                value={formData.nombre}
                onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.95rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '4px' }}>
                  Correo Electrónico *
                </label>
                <input 
                  type="email" 
                  name="Email" 
                  required
                  placeholder="tucorreo@ejemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.95rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '4px' }}>
                  Teléfono / WhatsApp
                </label>
                <input 
                  type="tel" 
                  name="Telefono" 
                  placeholder="+54 3868 42-XXXX"
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.95rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '4px' }}>
                Producto de Interés
              </label>
              <select
                name="Producto_Interes"
                value={formData.productoInteres}
                onChange={(e) => setFormData({...formData, productoInteres: e.target.value})}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.95rem', background: '#fff' }}
              >
                <option value="Queso y Quesillo de Cabra">Queso y Quesillo de Cabra</option>
                <option value="Cabrito y Cordero">Cabrito y Cordero de los Valles</option>
                <option value="Artesanías en Asta y Alpaca">Artesanías en Asta y Alpaca</option>
                <option value="Visita al Corral y Producción">Visitas a la Producción Regional</option>
                <option value="Otro">Otras consultas generales</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', color: '#444', marginBottom: '4px' }}>
                Mensaje o Pedido *
              </label>
              <textarea 
                name="Mensaje" 
                rows="4" 
                required
                placeholder="Escribe aquí los kilos, piezas artesanales deseadas o tus dudas..."
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.95rem', resize: 'vertical' }}
              ></textarea>
            </div>

            <button 
              type="submit"
              style={{
                backgroundColor: '#78281f',
                color: '#fff',
                padding: '0.85rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '0.5rem',
                boxShadow: '0 4px 12px rgba(120, 40, 31, 0.3)'
              }}
            >
              <Send size={18} /> Enviar Mensaje a Merceditas
            </button>
          </form>
        </div>

        {/* Mapa Embebido de Cafayate y Datos de Contacto */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          border: '1px solid #ebdcd0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ padding: '1.8rem 1.8rem 1.2rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#4a151b', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={22} color="#78281f" /> Nuestra Ubicación
            </h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              En pleno corazón de Cafayate y los Valles Calchaquíes, Salta, Argentina.
            </p>
          </div>

          {/* Iframe interactivo embebido de Google Maps */}
          <div style={{ flex: 1, minHeight: '320px', width: '100%' }}>
            <iframe 
              title="Ubicación Cafayate Salta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.344404093952!2d-65.98399515000001!3d-26.07185795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9698d28a509ae21d%3A0xe5a2b0fb2cbfad20!2sCafayate%2C%20Salta!5e0!3m2!1ses!2sar!4v1715000000000!5m2!1ses!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '320px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div style={{ padding: '1.2rem 1.8rem', background: '#fdfbf9', borderTop: '1px solid #f0e7df', fontSize: '0.88rem', color: '#555' }}>
            <p>📍 <strong>Localidad:</strong> Cafayate, Valles Calchaquíes (Salta, Argentina)</p>
            <p>⏰ <strong>Horarios de Atención:</strong> Lunes a Sábados de 08:30 a 19:30 hs</p>
            <p>✉️ <strong>Correo Oficial:</strong> merceditascafayate@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL APP
// ==========================================
export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fcf9f5' }}>
      {/* Barra de Navegación Universitaria */}
      <header style={{
        backgroundColor: '#4a151b',
        color: '#ffffff',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '1.35rem', fontWeight: '800', letterSpacing: '0.5px', color: '#f7d794' }}>
              MERCEDITAS
            </span>
            <span style={{ fontSize: '0.78rem', display: 'block', opacity: '0.8', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Productos Regionales • Cafayate
            </span>
          </div>

          {/* Menú Desktop */}
          <nav style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }} className="desktop-nav">
            <button
              onClick={() => setActiveTab('inicio')}
              style={{
                backgroundColor: activeTab === 'inicio' ? '#78281f' : 'transparent',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}
            >
              1. Inicio (API GitHub)
            </button>
            <button
              onClick={() => setActiveTab('catalogo')}
              style={{
                backgroundColor: activeTab === 'catalogo' ? '#78281f' : 'transparent',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}
            >
              2. Catálogo (Array Local)
            </button>
            <button
              onClick={() => setActiveTab('contacto')}
              style={{
                backgroundColor: activeTab === 'contacto' ? '#78281f' : 'transparent',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}
            >
              3. Contacto & Mapa
            </button>
          </nav>

          {/* Botón Mobile */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'transparent', color: '#fff' }}
              title="Menú"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {mobileMenuOpen && (
          <div style={{ backgroundColor: '#391015', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <button
              onClick={() => { setActiveTab('inicio'); setMobileMenuOpen(false); }}
              style={{
                backgroundColor: activeTab === 'inicio' ? '#78281f' : 'transparent',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '8px',
                textAlign: 'left',
                fontWeight: '600'
              }}
            >
              1. Inicio (Consumo API GitHub)
            </button>
            <button
              onClick={() => { setActiveTab('catalogo'); setMobileMenuOpen(false); }}
              style={{
                backgroundColor: activeTab === 'catalogo' ? '#78281f' : 'transparent',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '8px',
                textAlign: 'left',
                fontWeight: '600'
              }}
            >
              2. Catálogo (Array Local de Productos)
            </button>
            <button
              onClick={() => { setActiveTab('contacto'); setMobileMenuOpen(false); }}
              style={{
                backgroundColor: activeTab === 'contacto' ? '#78281f' : 'transparent',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '8px',
                textAlign: 'left',
                fontWeight: '600'
              }}
            >
              3. Contacto Funcional & Mapa
            </button>
          </div>
        )}
      </header>

      {/* Contenido Principal Dinámico */}
      <main style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '2.5rem 1.5rem', flex: 1 }}>
        {activeTab === 'inicio' && <InicioPage setActiveTab={setActiveTab} />}
        {activeTab === 'catalogo' && <CatalogoPage />}
        {activeTab === 'contacto' && <ContactoPage />}
      </main>

      {/* Pie de Página con Detalle de Cátedra */}
      <footer style={{ backgroundColor: '#260a0d', color: '#e0d5ce', padding: '2.5rem 1.5rem', borderTop: '4px solid #78281f', marginTop: '3rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#f7d794', fontSize: '1.1rem', marginBottom: '0.7rem' }}>Productos Regionales Merceditas</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#b8a69d' }}>
              Compromiso familiar en Cafayate. Quesería artesanal, cabrito y cordero serrano, y artesanías en asta de cabra y alpaca forjadas con identidad calchaquí.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#f7d794', fontSize: '1.1rem', marginBottom: '0.7rem' }}>Información de la Cátedra</h4>
            <p style={{ fontSize: '0.85rem', color: '#b8a69d' }}><strong>Módulo:</strong> Programación Web II</p>
            <p style={{ fontSize: '0.85rem', color: '#b8a69d' }}><strong>Docente:</strong> Lic. Carlos Pacheco</p>
            <p style={{ fontSize: '0.85rem', color: '#b8a69d' }}><strong>Tecnología:</strong> React + Vite SPA</p>
          </div>
          <div>
            <h4 style={{ color: '#f7d794', fontSize: '1.1rem', marginBottom: '0.7rem' }}>Ubicación y Entorno</h4>
            <p style={{ fontSize: '0.85rem', color: '#b8a69d' }}>Cafayate, Valles Calchaquíes</p>
            <p style={{ fontSize: '0.85rem', color: '#b8a69d' }}>Provincia de Salta, Argentina</p>
            <p style={{ fontSize: '0.85rem', color: '#f7d794', marginTop: '0.5rem' }}>© 2026 Merceditas - Calidad Artesanal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
