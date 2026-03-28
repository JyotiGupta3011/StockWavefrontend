import React from 'react';
// 1. Removed the line with the semicolon inside the quotes
// 2. Removed the duplicate import
import { render, screen } from '@testing-library/react'; 
import "@testing-library/jest-dom"; // Added this to make .toBeInTheDocument() work
import Hero from "../landing_page/home/hero";

describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("HeroImage"); 
        
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", 'media/images/homeHero.png');
    });
});