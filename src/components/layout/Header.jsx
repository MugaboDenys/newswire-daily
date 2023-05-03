import {FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter} from "react-icons/fa"
const Header = () => {
  return (
    <div className="bg-neutral-900 shadow-max shadow-neutral-500 ">
      <div className="h-16 py-5 max-w-6xl mx-auto flex justify-between">
        <div className="flex gap-6">
          {["About", "Advertise", "Submit", "Press Release", "Contact"].map(
            (item, index) => (
              <a href="/"
                key={index}
                className="text-sm text-neutral-400 tracking-[.2rem] font-semibold hover:text-emerald-400"
              >
                {item}
              </a>
            )
          )}
        </div>
        <div className="text-neutral-400 flex gap-5">
        {[FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram].map((IconComponent, index) => (
            <a key={index} href="/" className="hover:text-emerald-400">
                <IconComponent />
            </a>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
