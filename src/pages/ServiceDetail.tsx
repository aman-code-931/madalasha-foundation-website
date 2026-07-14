import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CalendarDays, MapPin, Heart, CheckCircle2, Tag } from "lucide-react";
// import useDocumentTitle from "../hooks/useDocumentTitle";
import SEO from "../components/SEO";

const servicesData = [
  {
    id: 1,
    category: "Healthcare",
    title: "Madalasa Hospital Free Health Camp Supported by Madalasa Foundation",
    image: "/images/card1.webp",
    date: "June 27, 2022",
    location: "Wazirabad Sector-52, Gurgaon",
    description: "Successfully treated patients in rural areas with specialist doctors.",
    scheduleBadge: "EVERY SATURDAY\n5 TO 8 PM",
    impact:
      "Madālasa Hospital, supported by Madālasa Foundation, organized a Free Health Camp at Wazirabad, Sector 52, Gurgaon to bring accessible and affordable healthcare closer to the community. This initiative has created a strong impact by ensuring that individuals from all backgrounds, especially those with limited resources, receive timely medical consultation and guidance. Through consistent weekly camps, the initiative has improved health awareness, encouraged preventive care, and strengthened trust between healthcare providers and the local community.",
    response:
      "To address these challenges, Madālasa Hospital launched a Free Health Camp held every Saturday from 5 PM to 8 PM. The camp provides free medical consultations, basic health checkups, and awareness sessions. By setting up the camp within the community, we ensured easy accessibility and encouraged more people to seek timely medical advice without financial burden.",
  },
  {
    id: 2,
    category: "Healthcare",
    title: "Free Health Camp by Madalasa Hospital at Devi Lal Park, Sector 14 Gurugram",
    image: "/images/card2.webp",
    date: "2 November, 2023",
    location: "Devi lal park, Sector-14, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
    impact: "At our foundation, we believe that healthcare is a basic right, not a privilege. Through our free medical camps, we have reached remote and underprivileged areas where people often lack access to even basic medical facilitiesFrom general health checkups to distributing free medicines, our camps have impacted hundreds of lives. We have witnessed real stories where early diagnosis helped prevent serious health conditions.",
    response: "We actively identify areas where healthcare support is most needed and organize medical camps accordingly. Our team collaborates with experienced doctors, volunteers, and local communities to ensure smooth and effective execution.From planning to implementation, we focus on delivering quality healthcare services, including consultations, diagnostics, and free medicines. We continuously work to expand our reach and improve our services based on community feedback.",
  },
  {
    id: 3,
    category: "Healthcare",
    title: "Madalasa Foundation Presents Free Health Camp with Madalasa Hospital",
    image: "/images/card3.webp",
    date: "November 22, 2022",
    location: "Samaspur Village Near Temple, Gurgaon",
    description: "Successfully treated patients in rural areas with specialist doctors.",
    scheduleBadge: "EVERY SATURDAY\n5 TO 8 PM",
    impact:
      "In 2022, the Healthy Hearts Health Camp aimed to raise awareness about heart health within our community The camp offered free blood pressure and cholesterol screenings, as well as consultations with cardiologists Participants learned about heart-healthy lifestyles, including diet and exercise tips, to reduce the risk of heart disease The event's mission was to empower individuals to take control of their cardiovascular health.",
    response:
      "To address these challenges, Madālasa Hospital launched a Free Health Camp held every Saturday from 5 PM to 8 PM. The camp provides free medical consultations, basic health checkups, and awareness sessions. By setting up the camp within the community, we ensured easy accessibility and encouraged more people to seek timely medical advice without financial burden.",
  },
  {
    id: 4,
    category: "Healthcare",
    title: "Community Free Health Camp Supported by Madalasa Hospital",
    image: "/images/carde4.webp",
    date: "26 November, 2022",
    location: "Samaspur Village Near Temple, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
    impact: "The Diabetes Awareness Camp 2022 was a proactive response to the growing diabetes epidemic It offered free blood sugar testing, diabetes risk assessments, and consultations with endocrinologists Attendees received personalized advice on managing diabetes through lifestyle changes and medications The camp's mission was to educate and support those living with diabetes The Diabetes Awareness Camp 2022 was a proactive response to the growing diabetes epidemic It offered free blood sugar testing, diabetes risk assessments, and consultations with endocrinologists Attendees received personalized advice on managing diabetes through lifestyle changes and medications The camp's mission was to educate and support those living with diabetes.",
    response: "When communities face challenges in accessing healthcare, we step in with immediate and organized support. Our response includes setting up free medical camps, mobilizing healthcare professionals, and ensuring essential medicines reach those in need.",
  },
  {
    id: 5,
    category: "Healthcare",
    title: "Free Medical & Health Checkup Camp – Samaspur Village Near Temple Gurugram",
    image: "/images/slide1.webp",
    date: "26 November, 2022",
    location: "Samaspur Village Near Temple, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
    impact: "Madalasa Hospital is pleased to invite the community to our Free Health Camp, a special event dedicated to promoting health and well-being within our community. This event is part of our ongoing commitment to providing high-quality healthcare services and giving back to the people we serve.",
    response: "We actively identify areas where healthcare support is most needed and organize medical camps accordingly. Our team collaborates with experienced doctors, volunteers, and local communities to ensure smooth and effective execution.",
  }, 
  {
    id: 6,
    category: "Healthcare",
    title: "Madalasa Hospital Free Health Camp 2024 –Adarash Park Sector 46 Gurugram",
    image: "/images/card4.webp",
    date: "1 March, 2024",
    location: "Adarsh Park SECTOR-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
    gallery: [
    "/images/add.webp",
    
  ],
    impact: "At Madalasa Foundation, our commitment to community well-being is reflected through our regular free health camps conducted in areas with limited access to healthcare. These initiatives have enabled early diagnosis, timely treatment, and increased awareness among individuals who often overlook their health due to lack of resources Through our camps, we have served numerous patients by providing basic health checkups, medical consultations, and free medicines. Many individuals, especially elderly patients, have benefited from routine screenings that helped identify health issues at an early stage.",
    response: "At Madalasa Foundation, we take a proactive and structured approach to addressing healthcare challenges in local communities. By identifying underserved areas, we organize well-coordinated free medical camps in accessible locations such as community spaces and public areas Our response includes collaboration with qualified doctors and dedicated volunteers to ensure smooth execution of services — from patient registration and consultation to diagnostics and distribution of medicines.",
  },
  {
    id: 7,
    category: "Healthcare",
    title: "Healthcare Awareness Camp by Madalasa Foundation & Madalasa Hospital",
    image: "/images/card5.webp",
    date: "11 March, 2024",
    location: "Ashok Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/add1.webp",
    "/images/add2.webp",
    
  ],
    impact: "Through our regular camps at Adarsh Park, Gurgaon, Madalasa Foundation has bridged the gap between quality healthcare and the local community By providing free consultations, vital screenings, and expert medical advice every Saturday, we have empowered hundreds of residents to take charge of their well-being These sessions serve as a critical first line of defense, offering early detection and professional guidance to those who need it most Our presence has fostered a culture of preventive health, ensuring that financial or locational barriers do not stand in the way of essential medical attention.",
    response: "In response to the growing need for accessible healthcare, Madalasa Foundation proactively organizes weekly medical camps led by expert doctors and clinical staff. These initiatives focus on providing immediate diagnostic support, including blood pressure monitoring and physical examinations, to underserved populations By operating directly within community spaces like Sector 46, we ensure that professional medical expertise is just a short walk away for every citizen. Our mission is to provide consistent, compassionate care that shifts the focus from reactive treatment to proactive wellness.",
  }, 
  {
    id: 8,
    category: "Healthcare",
    title: "Madalasa Foundation Community Health Camp at Adarsh Park sector-46",
    image: "/images/card6.webp",
    date: "27 May, 2024",
    location: "Adarsh Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/add3.webp",
  ],
    impact: "The Madalasa Foundation successfully transformed Adarsh Park in Gurgaon into a hub of community wellness through our dedicated weekend health camps By mobilizing professional medical teams, we provided free diagnostic screenings and expert consultations to families and children in a familiar, accessible setting These camps have directly improved local health outcomes by identifying underlying conditions and offering immediate clinical guidance to those with limited healthcare access Our initiative has successfully empowered hundreds of residents to prioritize their health, building a stronger and more informed community through consistent grassroots engagement.",
    response: "To address critical healthcare gaps, Madalasa Foundation organizes comprehensive free medical camps every Saturday and Sunday evening from 5:30 PM to 7:00 PM. Led by qualified doctors from Madalasa Hospital, our response includes vital sign monitoring, physical examinations, and personalized medical advice for all age groups We strategically host these sessions in public parks to remove the intimidation of clinical environments and ensure that high-quality care is conveniently available to everyone Our mission is to provide a sustainable, expert-led support system that delivers essential healthcare services directly to the doorstep of the community.",
  }, 
  {
    id: 9,
    category: "Healthcare",
    title: "Free Health Screening Camp Supported by Madalasa Hospital",
    image: "/images/gallery11.webp",
    date: "3 June, 2024",
    location: "Adarsh Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/add4.webp",
    "/images/add5.webp",
  ],
    impact: "At Adarsh Park in Gurgaon Sector 46, our weekend medical camps have become a vital safety net for local residents and their families By setting up accessible health booths in public spaces, we have successfully identified early health risks for hundreds of individuals who previously lacked regular medical check-ups These camps, staffed by compassionate healthcare professionals, provide a unique space for elderly citizens and homemakers to receive quality attention without financial burden Our impact is measured by the growing trust of the community and the tangible shift toward preventive care and healthy living standards within the neighborhood.",
    response: "Madalasa Foundation addresses community health disparities by deploying mobile medical units every Saturday and Sunday from 5:30 PM to 7:00 PM. Our response involves a multidisciplinary team from Madalasa Hospital providing free health screenings, including blood pressure monitoring and professional consultations These camps are strategically timed and located to ensure maximum accessibility for working individuals and local families in Sector 46 We provide immediate medical intervention, health education, and a clear path for follow-up treatment, ensuring that every citizen has a direct link to expert medical resources.",
  }, 
   {
    id: 10,
    category: "Healthcare",
    title: "Madalasa Hospital Community Wellness Camp – Gurugram",
    image: "/images/1.webp",
    date: "11 June, 2024",
    location: "Adarsh Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/2.webp",
  ],
    impact: "Through our Free Health Camps, Madalasa Hospital, with the support of Madalasa Foundation, has created a reliable healthcare touchpoint within the community. Organized regularly in accessible locations like local parks, these camps have made it easier for individuals to seek medical attention without the need for hospital visits By offering direct doctor consultations, basic health checkups such as blood pressure monitoring, and immediate medical guidance, we have helped identify common health concerns at an early stage. Families, elderly individuals, and children have all benefited from these services, making routine health checkups more approachable and consistent.",
    response: "Our approach focuses on bringing primary healthcare directly to the community through well-organized and regularly conducted Free Health Camps. While Madalasa Hospital leads the medical expertise, Madalasa Foundation ensures smooth on-ground execution and community engagement Each camp is designed to provide a seamless experience where individuals can walk in, consult with qualified doctors, undergo basic health screenings such as blood pressure checks, and receive necessary medicines and guidance.",
  }, 
  {
    id: 11,
    category: "Healthcare",
    title: "Free Healthcare Camp at Adarsh Park secotr-46 Organized by Madalasa Foundation",
    image: "/images/3.webp",
    date: "12 June, 2024",
    location: "Adarsh Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/4.webp",
  ],
    impact: "Through regularly conducted Free Health Camps, Madalasa Hospital, with the support of Madalasa Foundation, has established a dependable healthcare presence within the community. These camps are not just one-time initiatives but a continuous effort that allows individuals to monitor their health over time Many community members now rely on these camps for routine checkups, follow-ups, and ongoing medical advice. This consistency has helped in tracking health conditions, ensuring timely intervention, and reducing the chances of complications By maintaining a regular and familiar healthcare setup within the community, we are building long-term trust and encouraging people to stay connected with their health.",
    response: "Our response is centered around consistency and reliability. Instead of occasional outreach, Madalasa Foundation works alongside Madalasa Hospital to ensure that Free Health Camps are conducted regularly at fixed locations and timings This structured approach allows individuals to revisit camps for follow-ups, seek continuous medical guidance, and stay updated about their health status. The familiar environment and recurring presence of medical professionals create a sense of comfort and trust among community members By focusing on continuity rather than one-time care, we aim to provide a stable and dependable healthcare support system for the community.",
  }, 
   {
    id: 12,
    category: "Healthcare",
    title: "Madalasa Foundation Free Medical Camp with Madalasa Hospital Support",
    image: "/images/about.webp",
    date: "18 June, 2024",
    location: "Adarsh Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/5.webp",
  ],
    impact: "The Madalasa Foundation was born from a commitment to turn health awareness into tangible action for underserved communities. By transforming local hubs like Gurgaon’s public parks into temporary clinics, we have provided hundreds of citizens with free, life-saving screenings and professional medical guidance. Every initiative we lead represents the Madalasa Foundation’s core belief: that quality healthcare should be a proactive service delivered directly to the heart of the community.",
    response: "In addressing the gap between patients and specialized care, the Madalasa Foundation deploys a rapid-action model focused on immediate diagnostic relief. We mobilize expert medical teams to provide free vital check-ups and specialty consultations, ensuring that health risks are identified and managed early. Through this integrated approach, the Madalasa Foundation serves as a vital bridge, connecting community outreach with a professional continuum of clinical care.",
  }, 
   {
    id: 13,
    category: "Healthcare",
    title: "Community Wellness & Free Health Camp – Sector 46 Gurugram",
    image: "/images/6 .webp",
    date: "19 June, 2024",
    location: "Adarsh Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/7.webp",
  ],
    impact: "The Madalasa Foundation believes that true health empowerment begins with accessibility. By bringing medical expertise into the heart of local neighborhoods, we have transformed routine park visits into life-saving opportunities for early diagnosis and wellness education. This grassroots approach has allowed the Madalasa Foundation to reach hundreds of residents, fostering a culture where preventative care is a shared community value rather than a distant luxury. Every camp we host is a chapter in our ongoing story of creating a healthier, more informed society.",
    response: "The Madalasa Foundation addresses systemic healthcare gaps by deploying mobile clinical units and expert medical volunteers directly to those in need. Our response focuses on preventative intervention, providing free high-quality screenings and professional consultations that bridge the divide between local residents and specialized hospital care. By streamlining the path from community outreach to clinical follow-up, the Madalasa Foundation ensures that no individual is left to navigate their health journey without professional support and a clear plan of action.",
  }, 
  {
    id: 14,
    category: "Healthcare",
    title: "Madalasa Hospital Health Camp for Community Care",
    image: "/images/8.webp",
    date: "25 June, 2024",
    location: "GuruNanak Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/9.webp",
  ],
    impact: "At the Madalasa Foundation, we measure our success by the resilience of the communities we serve. By breaking the barriers of traditional hospital settings, we have established a consistent presence in local areas to identify health risks before they become crises. Through these efforts, the Madalasa Foundation has successfully bridged the diagnostic gap for senior citizens and vulnerable groups, ensuring that professional medical attention is a local reality rather than a logistical challenge.",
    response: " The Madalasa Foundation responds to community health needs with a high-impact, localized clinical strategy. We deploy specialized medical desks to public spaces to provide instant health vitals monitoring and expert doctor consultations at zero cost. This proactive model allows the Madalasa Foundation to offer immediate medical clarity and a structured referral system, ensuring that every participant receives a professional roadmap for their ongoing health and wellness.",
  }, 
   {
    id: 15,
    category: "Healthcare",
    title: "Free Health Checkup Camp by Madalasa Foundation – GuruNank Park Sector-46 Gurugram",
    image: "/images/10.webp",
    date: "26 June, 2024",
    location: "GuruNanak Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/11.webp",
  ],
    impact: "At the Madalasa Foundation, we measure our success by the resilience of the communities we serve. By breaking the barriers of traditional hospital settings, we have established a consistent presence in local areas to identify health risks before they become crises. Through these efforts, the Madalasa Foundation has successfully bridged the diagnostic gap for senior citizens and vulnerable groups, ensuring that professional medical attention is a local reality rather than a logistical challenge.",
    response: " The Madalasa Foundation responds to community health needs with a high-impact, localized clinical strategy. We deploy specialized medical desks to public spaces to provide instant health vitals monitoring and expert doctor consultations at zero cost. This proactive model allows the Madalasa Foundation to offer immediate medical clarity and a structured referral system, ensuring that every participant receives a professional roadmap for their ongoing health and wellness.",
  },
  {
    id: 16,
    category: "Healthcare",
    title: "Madalasa Community Care Camp at Chotu Ram Park, Sector-46 Gurugram",
    image: "/images/12.webp",
    date: "2 July, 2024",
    location: "Chotu Ram Park Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/13.webp",
  ],
    impact: "At Madalsha Foundation, we believe that quality healthcare is a fundamental right, not a luxury. Our free health camps serve as a lifeline for underserved communities, bridging the gap between medical necessity and accessibility For many of our beneficiaries, a Madalsha Foundation health camp is the first time they have seen a doctor in years. We don't just provide a consultation; we provide a turning point Beyond prescriptions, our camps are hubs for health literacy, empowering families with knowledge on nutrition, sanitation, and preventative care.",
    response: " When we enter a community, our response is designed to be holistic, immediate, and professional. We don’t just visit we provide a medical home for the day We partner with experienced general practitioners, pediatricians, and specialists to ensure every patient receives expert advice and a personalized treatment plan Diagnosis without treatment is incomplete. Following a consultation, patients receive necessary medications, supplements, and vitamins free of charge, ensuring the path to recovery begins immediately.",
  }, 
  {
    id: 17,
    category: "Healthcare",
    title: "Free Health & Wellness Camp Supported by Madalasa Hospital and Madalasa Foundation",
    image: "/images/14.webp",
    date: "8 July, 2024",
    location: "Adarsh park  Sector-46, Gurgaon",
    description: "Free checkups and treatment for underprivileged communities.",
    scheduleBadge: null,
     gallery: [
    "/images/15.webp",
  ],
    impact: "At Madalsha Foundation, we measure success not just in numbers, but in the lives that find a new trajectory. For many in the communities we serve, a manageable health issue can quickly become a life-altering crisis due to a lack of access and affordability Our impact begins the moment a patient enters our camp. We recall the story of a local laborer who had been living with blurred vision for months, unable to work or support his family. Through a simple screening at one of our camps, he was diagnosed with a treatable condition and provided with corrective care. Today, he is back at work, and his children remain in school This is the Madalsha Effect: by providing a single point of intervention, we stabilize entire families. We aren't just treating symptoms; we are restoring dignity, productivity, and hope to those who have been overlooked by traditional healthcare systems.",
    response: " The Madalsha Foundation response is built on the principle of Proactive Compassion. We do not wait for the vulnerable to find a way to the hospital; we bring the hospital to them. Our response is structured into three core pillars,Rapid Deployment & Accessibility,The Full-Circle Care Model,Sustainable Health Literacy Our medical response is paired with education. Every camp features Health Corners where we teach preventative measures—focusing on hygiene, maternal health, and nutrition—ensuring that our impact lasts long after the tents are packed away.",
  }, 
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((item)  => item.id === Number(id));

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);

  if (!service) return <div className="p-10 text-center text-gray-500">Service not found.</div>;

  return (
    <>
      <SEO
        title={`${service.title} - Madalasa Foundation`}
        description={service.description}
        image={service.image}
        url={`/service/${service.id}`}
      />

    <section className="bg-gray-50 min-h-screen pb-16">


      {/* ── HERO ── */}
<div className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-16">

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* 🟠 LEFT CONTENT */}
    <div className="text-white">

      <span className="inline-block bg-red-500 text-xs px-3 py-1 rounded-full mb-4">
        {service.category}
      </span>

      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        {service.title}
      </h1>

      <p className="text-white/80 mt-3 text-sm md:text-base">
        {service.description}
      </p>


    </div>

    {/* 🟠 RIGHT IMAGE (NO CUT) */}
    <div className="w-full flex justify-center">

      <img
        src={service.image}
        alt={service.title}
        className="w-full max-h-[350px] object-contain rounded-2xl shadow-xl"
      />

    </div>

  </div>

</div>

     

      {/* ── DATE / LOCATION CARDS ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        <div className="bg-white rounded-xl shadow-md px-5 py-4 flex items-center gap-4 border border-gray-100">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
            <CalendarDays className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Date</p>
            <p className="text-sm font-semibold text-gray-800">{service.date}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md px-5 py-4 flex items-center gap-4 border border-gray-100">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">Location</p>
            <p className="text-sm font-semibold text-gray-800">{service.location}</p>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-6 mt-10 space-y-10">

        {/* Impact Story */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-red-500 fill-red-100" />
            <h2 className="text-lg font-semibold text-gray-800">Our Impact Story</h2>
          </div>
          <div className="w-10 h-0.5 bg-red-400 mb-4 rounded-full" />
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {service.impact}
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Our Response */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <h2 className="text-lg font-semibold text-gray-800">Our Response</h2>
          </div>
          <div className="w-10 h-0.5 bg-green-400 mb-4 rounded-full" />
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {service.response}
          </p>
        </div>
        {/* 🔥 MOMENTS FROM THE FIELD (ONLY FOR ID 6) */}
          {[6,7,8,9,10,11,12,13,14,15,16,17].includes (service.id) && service.gallery && (
  <div className="max-w-4xl mx-auto px-6 mt-12">

    <h2 className="text-xl font-semibold mb-6 text-gray-800">
      Moments From The Field
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

      {service.gallery.map((img: string, index: number) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
        >
          <img
            src={img}
            alt=""
            className="w-full h-[160px] object-cover group-hover:scale-110 transition duration-500"
          />
        </div>
      ))}

    </div>

  </div>
)}

      </div>
    </section>
    </>
  );
};

export default ServiceDetail;