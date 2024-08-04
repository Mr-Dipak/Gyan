import { useEffect, useState } from "react";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
];

export default function TeamSection() {
  const [gitData, setGitData] = useState("");

  useEffect(() => {
    fetch('https://api.github.com/users/Mr-Dipak')
      .then((response) => response.json())
      .then((data) => {
        setGitData(data);
      });
  }, [setGitData]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            At the heart of our organization is a diverse and passionate team dedicated to making a difference. Each member brings a unique set of skills, experiences, and a deep commitment to our mission. Together, we work tirelessly to create positive change and empower communities.
          </p>
        </div>
        <ul role="list" className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* {people.map((person) => (
            <li key={person.name} className="flex flex-col items-center text-center">
              <img className="h-32 w-32 rounded-full object-cover" src={person.imageUrl} alt={person.name} />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm font-medium text-indigo-600">{person.role}</p>
              </div>
            </li>
          ))} */}
          {/* Adding GitHub data if available */}
          {gitData && (
            <li key={gitData.name} className="flex flex-col items-center text-center">
              <img className="h-32 w-32 rounded-full object-cover" src={gitData.avatar_url} alt={gitData.name} />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{gitData.name}</h3>
                <p className="text-sm font-medium text-indigo-600">'Founder / CEO'</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
