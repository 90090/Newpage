import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: "",
    services: [],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const API_URL = "https://uf1n52e194.execute-api.us-east-1.amazonaws.com/contact";
  const API_KEY = "H7to292z3yzsjFCt3LJEA516Gij3C7n";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm((prev) => {
        const services = checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value);
        return { ...prev, services };
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          details: "",
          services: [],
        });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    "Website Redesign",
    "New Website",
    "Graphic Design",
    "Branding",
    "Other",
  ];

  return (
    <div className="bg-[#1f1f1f] text-white shadow rounded p-4 px-4 md:px-8 lg:px-16 ">
      <img
        src="Images/Contact/NewPageFormNLogo.png"
        alt="Our Work Example"
        className="mx-auto mb-6 w-12 h-12 rounded object-contain transition-transform hover:scale-110"
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl grid gap-4 md:grid-cols-2"
      >
        <div className="space-y-4">
          <label className="block mb-1 font-medium">Let us help you boost your online presence.</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Project Details</label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              rows={4}
              placeholder="Tell us about your project"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">What services are you interested in?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map((service) => (
                <label key={service} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={form.services.includes(service)}
                    onChange={handleChange}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-orange-500 font-semibold text-white px-4 py-2 rounded-full hover:bg-orange-600 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      {success === true && (
        <p className="mt-4 text-green-600">
          Message sent successfully! You'll hear back from us within 24 hours.
          Let's make it happen.
        </p>
      )}
      {success === false && (
        <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
      )}
    </div>
  );
}