export default function PrivacyTerms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy & Terms</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: October 1, 2025</p>

      <p className="mb-8">
        Welcome to <span className="font-semibold">NewPage</span>. We respect your privacy and want you to
        feel comfortable using our website and services. By using this site, you agree to the following Privacy
        Policy and Terms of Service.
      </p>

      {/* Privacy Policy Section */}
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">Information We Collect</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <span className="font-medium">Personal Information</span>: When you fill out a contact form or request
          service, we may collect your name, email, phone number, and any other details you provide.
        </li>
        <li>
          <span className="font-medium">Automatically Collected Information</span>: We may collect technical data
          such as your IP address, browser type, and cookies for site functionality and analytics.
        </li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">How We Use Information</h3>
      <ul className="list-disc list-inside mb-4">
        <li>To respond to your inquiries and provide branding and marketing services.</li>
        <li>To improve our website and customer experience.</li>
        <li>For internal business purposes, such as troubleshooting or analytics.</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">Sharing of Information</h3>
      <ul className="list-disc list-inside mb-4">
        <li>We do <span className="font-semibold">not</span> sell or rent your personal information.</li>
        <li>
          We may share information with trusted service providers (such as website hosting, email, or payment
          processors).
        </li>
        <li>We may disclose information if required by law.</li>
      </ul>

      <h3 className="text-xl font-medium mt-6 mb-2">Cookies</h3>
      <p className="mb-4">
        Our website may use cookies to enhance functionality and track basic usage. You can disable cookies in your
        browser, but some features may not work properly.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Data Security</h3>
      <p className="mb-4">
        We take reasonable steps to safeguard the information you share with us. However, no method of online
        transmission is 100% secure.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Your Rights</h3>
      <p className="mb-8">
        If you would like to request access, correction, or deletion of your personal data, please contact us at:{" "}
        <span className="font-semibold">info@newpage.com</span>.
      </p>

      {/* Terms of Service Section */}
      <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>

      <h3 className="text-xl font-medium mt-6 mb-2">Use of Website</h3>
      <p className="mb-4">
        By using this website, you agree not to misuse it (e.g., hacking, spamming, scraping, or unlawful activity).
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Services</h3>
      <p className="mb-4">
        All services and product information are subject to availability. Bees Vending reserves the right to change
        offerings, prices, or availability at any time.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Intellectual Property</h3>
      <p className="mb-4">
        All content on this website, including text, images, and logos, belongs to Bees Vending unless otherwise
        stated. You may not copy, distribute, or use it without permission.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Third-Party Links</h3>
      <p className="mb-4">
        Our site may include links to other websites. We are not responsible for the content, policies, or practices
        of third-party sites.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Limitation of Liability</h3>
      <p className="mb-4">
        This site and its content are provided “as is.” Bees Vending is not liable for any damages resulting from use
        of the website or services.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Changes to These Terms</h3>
      <p className="mb-8">
        We may update our Privacy & Terms at any time. Please check this page periodically for updates.
      </p>

      {/* Contact Section */}
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or Terms of Service, please contact us:
      </p>
      <div className="mt-2">
        <p className="font-medium">NewPage</p>
        <p>🌐 Website: www.newpagect.com</p>
      </div>
    </div>
  );
}
