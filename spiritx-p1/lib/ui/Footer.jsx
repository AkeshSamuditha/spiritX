export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PsycoWard. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/privacy" className="hover:text-blue-400 mx-2">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400 mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
