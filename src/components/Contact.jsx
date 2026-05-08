import React, { useRef, useState } from "react";
import { Button, TextInput, Textarea } from "flowbite-react";
import emailjs from '@emailjs/browser';
import { FaRegEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.current[0].value,
      from_email: form.current[1].value,
      message: form.current[2].value,
    };

    try {
      await emailjs.send(
        'service_unzq1b6',
        'template_1154v1m',
        templateParams,
        'sPChR_RYh_4pia0No'
      );
      setMessage('Pesan terkirim! Terima kasih 😊');
      form.current.reset();
    } catch (error) {
      setMessage('Gagal kirim. Coba lagi ya!');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#e6f3ff' }}>
            <FaRegEnvelope  style={{ color: '#355872' }} />
            <span className="text-sm font-semibold" style={{ color: '#355872' }}>Contact</span>
          </div>
          <h2 className="text-5xl font-black mb-4" style={{ color: '#355872' }}>Contact Me!</h2>
          <p className="text-xl" style={{ color: '#7AAACE' }}>Hubungi saya untuk kolaborasi</p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 p-8 rounded-2xl shadow-lg border"
          style={{
            backgroundColor: 'white',
            borderColor: '#e6f3ff'
          }}
        >
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#355872' }}>
              Nama Lengkap
            </label>
            <TextInput
              name="name"
              placeholder="Masukkan nama lengkap Anda"
              required
              className="text-lg"
              style={{
                backgroundColor: 'white',
                borderColor: '#9CD5FF'
              }}
              theme={{
                field: {
                  input: {
                    colors: {
                      gray: 'border-gray-300 bg-white text-gray-900 focus:border-[#7AAACE] focus:ring-[#7AAACE]'
                    }
                  }
                }
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#355872' }}>
              Email
            </label>
            <TextInput
              name="email"
              type="email"
              placeholder="email@contoh.com"
              required
              className="text-lg"
              style={{
                backgroundColor: 'white',
                borderColor: '#9CD5FF'
              }}
              theme={{
                field: {
                  input: {
                    colors: {
                      gray: 'border-gray-300 bg-white text-gray-900 focus:border-[#7AAACE] focus:ring-[#7AAACE]'
                    }
                  }
                }
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#355872' }}>
              Pesan
            </label>
            <Textarea
              name="message"
              rows={5}
              placeholder="Tulis pesan Anda di sini..."
              required
              className="text-lg"
              style={{
                backgroundColor: 'white',
                borderColor: '#9CD5FF'
              }}
              theme={{
                field: {
                  textarea: {
                    colors: {
                      gray: 'border-gray-300 bg-white text-gray-900 focus:border-[#7AAACE] focus:ring-[#7AAACE]'
                    }
                  }
                }
              }}
            />
          </div>

          {message && (
            <div
              className={`p-4 rounded-lg text-center font-semibold ${message.includes('terkirim')
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
                }`}
            >
              {message}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: '#355872',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#7AAACE';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#355872';
            }}
          >
            {loading ? 'Mengirim...' : 'Kirim Pesan'}
          </Button>
        </form>

        {/* Informasi kontak tambahan */}
        <div className="text-center mt-8">
          <p className="text-sm" style={{ color: '#7AAACE' }}>
            Atau hubungi saya langsung di shesadavinap03@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}