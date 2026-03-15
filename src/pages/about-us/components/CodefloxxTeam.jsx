import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function CodefloxxTeam() {
  const teamMembers = [
    {
      name: "Yahaya Abdullahi",
      role: "Chief Executive Officer",
      desc: "Visionary leader with experience in driving business growth and innovation.",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAKxABAAIBAgQFAwUBAAAAAAAAAAECAwQREiExQQUiUWFxE1KhMjRCgbEj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A/VAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9B8AAAAAAAAAAAAAAAAN+u/Lb1JZ2r1Fr2mkT5Y5fIO+bW0rvFI45/CTJqMuTreY9o5OQsH3eZ6zMlbWr0tMfEvgQUY9XkrMcduKPeF+HNTLXekx7x3hkPWPJbHeLVnaYBsDzjtx0i0d4ekAAAAAAAAAAAAHjNf6eK1vSGQ0ddO2nn5hnAAKAAAANLQW308R9szChJ4fP/K0ellaAAAAAAAAAAAACfXxvp59phmr9fkmta0jba3VAAAoAAAAu8Ojy3n3hYg8PyTGT6fLhnnPJegAAAAAAAAAAAAj8Rjy0n0mYQtTVY5y4ZrWN7dYZlqzS01tG0x1B8AUAAAAVeHRvmtPaKtBNosNsVb8cbTM8lKAAAAAAAAAAAAAzddSa55ntaN2k46nDGXHP3R0BlgKAADppqceasdoneXNfoMcRSck9bfgFcAIAAAAAAAAAAAAD5ado3noXtFKzaekM/NrL5N60iK1n+wTAKAADT0P7evtuzHXBqL4eUbTXrsDVHPBmjNXirEx7S6IAAAAAAAAA4ZdVix7xM7zHaHC+vv/AApEfPMF28OGXVYse/8AK3pDPvmyZP1Xnb07PAO2bVZMvL9NfSHEAAFAAAAHvFmvinyW+Y7LcWspbaMnlt+GeINqJi0b15x7DGre1J3raY+JU01uSOVorb/QaAmx63HblfyfPNTHON46AAAJtfktjxxFJ24uoAzgFAAAAAAAAAAAAAABToMtoy/T38tuwA0QEH//2Q==",
    },
    {
      name: "Obans Subomi",
      role: "Lead Developer",
      desc: "Specialist in full-stack engineering with focus on high-performance systems.",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAKxABAAIBAgQFAwUBAAAAAAAAAAECAwQREiExQQUiUWFxE1KhMjRCgbEj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A/VAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9B8AAAAAAAAAAAAAAAAN+u/Lb1JZ2r1Fr2mkT5Y5fIO+bW0rvFI45/CTJqMuTreY9o5OQsH3eZ6zMlbWr0tMfEvgQUY9XkrMcduKPeF+HNTLXekx7x3hkPWPJbHeLVnaYBsDzjtx0i0d4ekAAAAAAAAAAAAHjNf6eK1vSGQ0ddO2nn5hnAAKAAAANLQW308R9szChJ4fP/K0ellaAAAAAAAAAAAACfXxvp59phmr9fkmta0jba3VAAAoAAAAu8Ojy3n3hYg8PyTGT6fLhnnPJegAAAAAAAAAAAAj8Rjy0n0mYQtTVY5y4ZrWN7dYZlqzS01tG0x1B8AUAAAAVeHRvmtPaKtBNosNsVb8cbTM8lKAAAAAAAAAAAAAzddSa55ntaN2k46nDGXHP3R0BlgKAADppqceasdoneXNfoMcRSck9bfgFcAIAAAAAAAAAAAAD5ado3noXtFKzaekM/NrL5N60iK1n+wTAKAADT0P7evtuzHXBqL4eUbTXrsDVHPBmjNXirEx7S6IAAAAAAAAA4ZdVix7xM7zHaHC+vv/AApEfPMF28OGXVYse/8AK3pDPvmyZP1Xnb07PAO2bVZMvL9NfSHEAAFAAAAHvFmvinyW+Y7LcWspbaMnlt+GeINqJi0b15x7DGre1J3raY+JU01uSOVorb/QaAmx63HblfyfPNTHON46AAAJtfktjxxFJ24uoAzgFAAAAAAAAAAAAAABToMtoy/T38tuwA0QEH//2Q==",
    },
    {
      name: "Luqman Abdulhaqq",
      role: "Design Director",
      desc: "Creative mind behind engaging user experiences and brand aesthetics.",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAKxABAAIBAgQFAwUBAAAAAAAAAAECAwQREiExQQUiUWFxE1KhMjRCgbEj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A/VAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9B8AAAAAAAAAAAAAAAAN+u/Lb1JZ2r1Fr2mkT5Y5fIO+bW0rvFI45/CTJqMuTreY9o5OQsH3eZ6zMlbWr0tMfEvgQUY9XkrMcduKPeF+HNTLXekx7x3hkPWPJbHeLVnaYBsDzjtx0i0d4ekAAAAAAAAAAAAHjNf6eK1vSGQ0ddO2nn5hnAAKAAAANLQW308R9szChJ4fP/K0ellaAAAAAAAAAAAACfXxvp59phmr9fkmta0jba3VAAAoAAAAu8Ojy3n3hYg8PyTGT6fLhnnPJegAAAAAAAAAAAAj8Rjy0n0mYQtTVY5y4ZrWN7dYZlqzS01tG0x1B8AUAAAAVeHRvmtPaKtBNosNsVb8cbTM8lKAAAAAAAAAAAAAzddSa55ntaN2k46nDGXHP3R0BlgKAADppqceasdoneXNfoMcRSck9bfgFcAIAAAAAAAAAAAAD5ado3noXtFKzaekM/NrL5N60iK1n+wTAKAADT0P7evtuzHXBqL4eUbTXrsDVHPBmjNXirEx7S6IAAAAAAAAA4ZdVix7xM7zHaHC+vv/AApEfPMF28OGXVYse/8AK3pDPvmyZP1Xnb07PAO2bVZMvL9NfSHEAAFAAAAHvFmvinyW+Y7LcWspbaMnlt+GeINqJi0b15x7DGre1J3raY+JU01uSOVorb/QaAmx63HblfyfPNTHON46AAAJtfktjxxFJ24uoAzgFAAAAAAAAAAAAAABToMtoy/T38tuwA0QEH//2Q==",
    },
    {
      name: "Jika Mana",
      role: "Mobile Developer",
      desc: "Specialist in building scalable cross-platform mobile applications.",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAKxABAAIBAgQFAwUBAAAAAAAAAAECAwQREiExQQUiUWFxE1KhMjRCgbEj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A/VAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9B8AAAAAAAAAAAAAAAAN+u/Lb1JZ2r1Fr2mkT5Y5fIO+bW0rvFI45/CTJqMuTreY9o5OQsH3eZ6zMlbWr0tMfEvgQUY9XkrMcduKPeF+HNTLXekx7x3hkPWPJbHeLVnaYBsDzjtx0i0d4ekAAAAAAAAAAAAHjNf6eK1vSGQ0ddO2nn5hnAAKAAAANLQW308R9szChJ4fP/K0ellaAAAAAAAAAAAACfXxvp59phmr9fkmta0jba3VAAAoAAAAu8Ojy3n3hYg8PyTGT6fLhnnPJegAAAAAAAAAAAAj8Rjy0n0mYQtTVY5y4ZrWN7dYZlqzS01tG0x1B8AUAAAAVeHRvmtPaKtBNosNsVb8cbTM8lKAAAAAAAAAAAAAzddSa55ntaN2k46nDGXHP3R0BlgKAADppqceasdoneXNfoMcRSck9bfgFcAIAAAAAAAAAAAAD5ado3noXtFKzaekM/NrL5N60iK1n+wTAKAADT0P7evtuzHXBqL4eUbTXrsDVHPBmjNXirEx7S6IAAAAAAAAA4ZdVix7xM7zHaHC+vv/AApEfPMF28OGXVYse/8AK3pDPvmyZP1Xnb07PAO2bVZMvL9NfSHEAAFAAAAHvFmvinyW+Y7LcWspbaMnlt+GeINqJi0b15x7DGre1J3raY+JU01uSOVorb/QaAmx63HblfyfPNTHON46AAAJtfktjxxFJ24uoAzgFAAAAAAAAAAAAAABToMtoy/T38tuwA0QEH//2Q==",
    },
    {
      name: "Akande Babatunde",
      role: "Technical Project Manager",
      desc: "Ensures timely delivery of projects while maintaining client satisfaction.",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAKxABAAIBAgQFAwUBAAAAAAAAAAECAwQREiExQQUiUWFxE1KhMjRCgbEj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A/VAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9B8AAAAAAAAAAAAAAAAN+u/Lb1JZ2r1Fr2mkT5Y5fIO+bW0rvFI45/CTJqMuTreY9o5OQsH3eZ6zMlbWr0tMfEvgQUY9XkrMcduKPeF+HNTLXekx7x3hkPWPJbHeLVnaYBsDzjtx0i0d4ekAAAAAAAAAAAAHjNf6eK1vSGQ0ddO2nn5hnAAKAAAANLQW308R9szChJ4fP/K0ellaAAAAAAAAAAAACfXxvp59phmr9fkmta0jba3VAAAoAAAAu8Ojy3n3hYg8PyTGT6fLhnnPJegAAAAAAAAAAAAj8Rjy0n0mYQtTVY5y4ZrWN7dYZlqzS01tG0x1B8AUAAAAVeHRvmtPaKtBNosNsVb8cbTM8lKAAAAAAAAAAAAAzddSa55ntaN2k46nDGXHP3R0BlgKAADppqceasdoneXNfoMcRSck9bfgFcAIAAAAAAAAAAAAD5ado3noXtFKzaekM/NrL5N60iK1n+wTAKAADT0P7evtuzHXBqL4eUbTXrsDVHPBmjNXirEx7S6IAAAAAAAAA4ZdVix7xM7zHaHC+vv/AApEfPMF28OGXVYse/8AK3pDPvmyZP1Xnb07PAO2bVZMvL9NfSHEAAFAAAAHvFmvinyW+Y7LcWspbaMnlt+GeINqJi0b15x7DGre1J3raY+JU01uSOVorb/QaAmx63HblfyfPNTHON46AAAJtfktjxxFJ24uoAzgFAAAAAAAAAAAAAABToMtoy/T38tuwA0QEH//2Q==",
    },
    {
      name: "Abubakar",
      role: "Cloud Solutions Architect",
      desc: "Designs robust, secure, and future-ready cloud infrastructure.",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAUDAgEH/8QAKxABAAIBAgQFAwUBAAAAAAAAAAECAwQREiExQQUiUWFxE1KhMjRCgbEj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A/VAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9B8AAAAAAAAAAAAAAAAN+u/Lb1JZ2r1Fr2mkT5Y5fIO+bW0rvFI45/CTJqMuTreY9o5OQsH3eZ6zMlbWr0tMfEvgQUY9XkrMcduKPeF+HNTLXekx7x3hkPWPJbHeLVnaYBsDzjtx0i0d4ekAAAAAAAAAAAAHjNf6eK1vSGQ0ddO2nn5hnAAKAAAANLQW308R9szChJ4fP/K0ellaAAAAAAAAAAAACfXxvp59phmr9fkmta0jba3VAAAoAAAAu8Ojy3n3hYg8PyTGT6fLhnnPJegAAAAAAAAAAAAj8Rjy0n0mYQtTVY5y4ZrWN7dYZlqzS01tG0x1B8AUAAAAVeHRvmtPaKtBNosNsVb8cbTM8lKAAAAAAAAAAAAAzddSa55ntaN2k46nDGXHP3R0BlgKAADppqceasdoneXNfoMcRSck9bfgFcAIAAAAAAAAAAAAD5ado3noXtFKzaekM/NrL5N60iK1n+wTAKAADT0P7evtuzHXBqL4eUbTXrsDVHPBmjNXirEx7S6IAAAAAAAAA4ZdVix7xM7zHaHC+vv/AApEfPMF28OGXVYse/8AK3pDPvmyZP1Xnb07PAO2bVZMvL9NfSHEAAFAAAAHvFmvinyW+Y7LcWspbaMnlt+GeINqJi0b15x7DGre1J3raY+JU01uSOVorb/QaAmx63HblfyfPNTHON46AAAJtfktjxxFJ24uoAzgFAAAAAAAAAAAAAABToMtoy/T38tuwA0QEH//2Q==",
    },
  ];
  return (
    <section className="flex-center bg-brand-main px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 text-center md:mb-18 lg:mb-20">
          <SectionHeader
            tagline="Talent"
            title="Our team"
            description="Skilled professionals driving digital transformation"
          />
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="mb-5 flex w-full items-center justify-center md:mb-6">
                <img
                  loading="lazy"
                  src={member.img}
                  alt={member.name}
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-large font-semibold">{member.name}</h5>
                <h6 className="text-medium">{member.role}</h6>
              </div>
              <p>{member.desc}</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <Github className="size-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <div>
            <h2 className="mb-4 text-4xl leading-tight font-bold lg:text-5xl">
              We're hiring
            </h2>
            <p className="text-lg text-black">
              Join our team of innovative technology professionals
            </p>
          </div>
          <Button
            size="lg"
            title="Open positions"
            variant="outline"
            onClick={() => alert("No current open positions")}
            className="hover:bg-brand-shade-dark mt-6 h-auto w-max cursor-pointer rounded-full border-2 border-gray-300 bg-transparent px-5 py-2.5 text-lg font-medium text-gray-900 transition-colors hover:text-white"
          >
            Open positions
          </Button>
        </div>
      </div>
    </section>
  );
}
