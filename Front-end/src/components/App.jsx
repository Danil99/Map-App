import React from 'react';

import MapContainer from '../containers/MapContainer';
import SidebarContainer from '../containers/SidebarContainer';

export default function App() {
  return (
    <main>
      <SidebarContainer />
      <MapContainer />
    </main>
  )
}
