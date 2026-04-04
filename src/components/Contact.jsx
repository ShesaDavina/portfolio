import React, { useRef, useState } from "react";
import { Button, TextInput, Textarea } from "flowbite-react";
import emailjs from '@emailjs/browser';

export default function ContactComp() {
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
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Kontak Saya
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
          <div>
            <TextInput
              name="name"
              placeholder="Nama Lengkap *"
              required
              className="text-lg"
            />
          </div>
          <div>
            <TextInput
              name="email"
              type="email"
              placeholder="Email *"
              required
              className="text-lg"
            />
          </div>
          <div>
            <Textarea
              name="message"
              rows={5}
              placeholder="Pesan... *"
              required
              className="text-lg"
            />
          </div>

          {message && (
            <div className={`p-4 rounded-lg text-center font-semibold ${message.includes('terkirim')
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
              {message}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-lg disabled:opacity-50"
          >
            {loading ? 'Mengirim...' : 'Kirim'}
          </Button>
        </form>
      </div>
    </section>
  );
}