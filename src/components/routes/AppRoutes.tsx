import React from 'react';
import { Route, Routes } from "react-router-dom";
import InfoNegocio from '../InfoNegocio';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={/InfoNegocio}>
      </Routes>
    </div>
  )
}

export default AppRoutes