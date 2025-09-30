import React from "react";
import { Linkedin, Github, ExternalLink } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]" id="Contact">
      <div className="text-center lg:mt-[5%] mt-10 mb-6 sm:px-0 px-[5%]">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Contact
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Connect with me on these platforms
        </p>
      </div>

      <div className="h-auto py-8 flex items-center justify-center">
        <div className="container max-w-2xl grid grid-cols-1 gap-4">
          <a
            href="https://www.linkedin.com/in/shahdmansour"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md" style={{ backgroundColor: "#0A66C2", opacity: 0.2 }} />
              <Linkedin className="w-5 h-5" style={{ color: "#0A66C2" }} />
              <span className="text-gray-200 font-medium">LinkedIn</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://github.com/shaahdmaansour"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md" style={{ backgroundColor: "#24292e", opacity: 0.2 }} />
              <Github className="w-5 h-5" />
              <span className="text-gray-200 font-medium">GitHub</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;