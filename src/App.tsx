import React, { useState } from "react";
import { theme } from './mui.ts';
import { ThemeProvider } from "@mui/material";
import Ethicality from "./pages/Ethicality/Ethicality.tsx";
import Default from './pages/Default/Default.tsx';
import Abstract from "./pages/Abstract/Abstract.tsx";
import Desirability from "./pages/Desirability/Desirability.tsx";
import Ecosystem from "./pages/Ecosystem/Ecosystem.tsx";
import Feasibility from "./pages/Feasibility/Feasibiltiy.tsx";
import Viability from "./pages/Viability/Viability.tsx";
import Proposal from "./pages/Proposal/Proposal.tsx";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    if (currentPage > 8) {
      return (
        <Default onNext={handleNext}/>
      )
    }
  };

  const handleHome = () => {
    setCurrentPage(1);
  }

  const handleBack= () => {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  return (
    <ThemeProvider theme = {theme}>
  
        {/* Render different pages based on the current page */}
        {currentPage === 1 && (
          <Default onNext={handleNext}/>
        )}
        {currentPage === 2 && (
          <Abstract onNext={handleNext} onBack={handleBack}/>
        )}
        {currentPage === 3 && (
          <Ethicality onNext={handleNext} onBack={handleBack} />
        )}
        {currentPage === 4 && (
          <Desirability onNext={handleNext} onBack={handleBack} />
        )}
        {currentPage === 5 && (
          <Ecosystem onNext={handleNext} onBack={handleBack} />
        )}
        {currentPage === 6 && (
          <Feasibility onNext={handleNext} onBack={handleBack} />
        )}
        {currentPage === 7 && (
          <Viability onNext={handleNext} onBack={handleBack} />
        )}
        {currentPage == 8 && (
          <Proposal onHome={handleHome} onBack={handleBack} />
        )}

        {/* Will have to import proposal page later */}

    </ThemeProvider>
  );
}

export default App;
