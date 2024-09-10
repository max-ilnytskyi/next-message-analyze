import React from 'react';

import { AppMenu } from '@/common/menus/AppMenu';

export function AppHeader() {
  return (
    <header className="shrink-0 z-10 sticky relative top-0 w-full px-6 sm:px-10 bg-gray-950 bg-opacity-40 flex justify-between items-center">
      <div />

      <AppMenu />
    </header>
  );
}
