"use client";

import { FormEvent, useState } from "react";
import {
  bootcampAgeGroups,
  bootcampCourses,
  bootcampEnrollmentEmail,
} from "@/data/bootcamps";

export default function BootcampEnrollForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [course, setCourse] = useState<string>(bootcampCourses[0].value);
  const [ageGroup, setAgeGroup] = useState<string>(bootcampAgeGroups[0].value);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const courseLabel =
      bootcampCourses.find((item) => item.value === course)?.label ?? course;
    const ageLabel =
      bootcampAgeGroups.find((item) => item.value === ageGroup)?.label ?? ageGroup;

    const subject = `Bootcamp Enrollment: ${name}`;
    const body = [
      "Hello HealingTech Labs,",
      "",
      "I would like to enroll in a coding / AI bootcamp.",
      "",
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Age group: ${ageLabel}`,
      `Course: ${courseLabel}`,
      "",
      "Please share available schedules, fees, and next steps.",
    ].join("\n");

    const mailto = `mailto:${bootcampEnrollmentEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form
      id="enroll-form"
      onSubmit={handleSubmit}
      className="mt-10 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] p-6 lg:p-8"
    >
      <h3 className="font-display text-lg text-brand-navy">Enroll in a Bootcamp</h3>
      <p className="mt-2 text-sm text-gray-600">
        Complete the form and send. It opens your email to submit your enrollment to HealingTech Labs.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          <span className="font-medium text-brand-navy">Name</span>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-navy"
            placeholder="Your full name"
          />
        </label>

        <label className="block text-sm">
          <span className="font-medium text-brand-navy">Contact</span>
          <input
            type="text"
            name="contact"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-navy"
            placeholder="Phone or email"
          />
        </label>

        <label className="block text-sm">
          <span className="font-medium text-brand-navy">Age group</span>
          <select
            name="ageGroup"
            required
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-navy"
          >
            {bootcampAgeGroups.map((group) => (
              <option key={group.value} value={group.value}>
                {group.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="font-medium text-brand-navy">Course</span>
          <select
            name="course"
            required
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-brand-navy"
          >
            {bootcampCourses.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="btn-primary mt-6">
        Enroll
      </button>

      {submitted && (
        <p className="mt-4 text-sm text-gray-600">
          Your email app should open with the enrollment details. Send the message to complete enrollment.
        </p>
      )}
    </form>
  );
}
