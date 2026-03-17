"use client";
import React from "react";
import { motion } from "framer-motion";

const animDuration = 0.8;

/* ---------------- BASIC ANIMATIONS ---------------- */

// Fade In
export function Fadein({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration }}
    >
      {children}
    </motion.div>
  );
}

// Fade In Up
export function Fadeinup({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Fade In Down
export function Fadeindown({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Fade In Left
export function Fadeinleft({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Fade In Right
export function Fadeinright({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- PREMIUM GRID ANIMATIONS ---------------- */

// Stagger container (wrap grid)
export function StaggerContainer({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger item (wrap each card)
export function StaggerItem({ children }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.96,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Card-specific animation (standalone use)
export function FadeUpCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Soft slide + fade (for headings / intro text)
export function SlideFadeLeft({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
