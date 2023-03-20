import React from 'react';

function Main() {
    const items = [
        { label: 'About The Board ▸', href: '/', hasDropdown: true, dropdownItems: [
          { label: 'Constitution Of State Welfare Board', href: '/constitution' },
          { label: 'Chairman And Members Of The Board', href: '/organizationalStructure' },
          { label: 'Secretary And CEO Of The Board', href: '/seceratry' },
          { label: 'Important Board Resolutions', href: '/boardMembers' },
          { label: 'Constitution Of State Adviser Committee', href: '/boardMembers' },
          { label: 'Chairperson And Member Of The Advisor Committee', href: '/boardMembers' },
        ] },
        { label: 'Information For Workers', href: '/informationForWorkers' },
        { label: 'Welfare Schemes', href: '/welfareSchemes' },
        { label: 'Information for Employers', href: '/InformationForEmployers' },
        { label: "GO's", href: '/gos' },
        { label: 'RTI Act', href: '/rtiAct' },
        { label: "FAQ's", href: '/faqs' },
        { label: 'Contact Us', href: '/contactUs' },
        { label: 'Downloads', href: '/downloads' },
        { label: 'Reports', href: '/reports' },
        { label: 'Logins', href: '/logins' },
      ];

  return (
    <div className="my-auto  px-10 py-10 bg-gray-100 mt-20 mb-20 ">
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 mx-auto mt-10">
      {items.map((item) => (
        <div key={item.id} className="bg-white shadow-sm rounded-lg">
          <h4 className="px-4 py-3 font-medium text-gray-800 text-center">{item.label}</h4>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Main;
