"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="glass-panel p-7">
      <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white">Aanvraagformulier</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Naam" name="naam" required />
        <Field label="Telefoonnummer" name="telefoon" required />
        <Field label="Kenteken optioneel" name="kenteken" />
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white">Gewenste service</span>
          <select
            name="service"
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none backdrop-blur-sm transition focus:border-kvl-red"
          >
            <option>Onderhoudsbeurt</option>
            <option>Airco Service</option>
            <option>Remmen Service</option>
            <option>Bandenservice</option>
            <option>APK Klaar Maken</option>
            <option>Accu Vervangen</option>
            <option>Lamp Vervangen</option>
            <option>Overige Service</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-white">Bericht</span>
          <textarea
            name="bericht"
            rows={6}
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none backdrop-blur-sm transition focus:border-kvl-red"
            placeholder="Waar kunnen we mee helpen?"
          />
        </label>
      </div>
      <button
        className="mt-6 rounded-full bg-kvl-red px-7 py-4 font-display font-semibold uppercase tracking-wide text-white shadow-red transition duration-300 ease-cinematic hover:-translate-y-0.5 hover:shadow-redLg"
        type="submit"
      >
        Verstuur aanvraag
      </button>
      {sent && (
        <p className="mt-5 rounded-2xl border border-kvl-red/30 bg-kvl-red/10 p-4 font-semibold text-white backdrop-blur-sm">
          Bedankt! Neem direct contact op via WhatsApp voor de snelste reactie.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white">{label}</span>
      <input
        required={required}
        name={name}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none backdrop-blur-sm transition focus:border-kvl-red"
      />
    </label>
  );
}
