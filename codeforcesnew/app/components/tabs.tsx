import React, { useState, createContext, useContext, ReactNode } from 'react';

// Create a context to manage tab state
const TabContext = createContext<{
  activeTab: string;
  setActiveTab: (tabId: string) => void;
} | undefined>(undefined);

export function Tabs({ children, defaultValue }: {
  children: ReactNode,
  defaultValue?: string
}) {
  const [activeTab, setActiveTab] = useState(defaultValue || '');

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full mx-auto bg-white shadow-md overflow-hidden">
        {children}
      </div>
    </TabContext.Provider>
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full bg-gray-100 border-b border-gray-200">
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children }: {
  value: string,
  children: ReactNode
}) {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 
        ${isActive
          ? 'bg-blue-500 text-white'
          : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'}
        focus:outline-none focus:ring-2 focus:ring-blue-400
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: {
  value: string,
  children: ReactNode
}) {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  const { activeTab } = context;

  if (activeTab !== value) return null;

  return (
    <div className="p-6 bg-white w-full">
      {children}
    </div>
  );
}

// Example Usage
export function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <h2 className="text-xl font-bold mb-4">Account Details</h2>
        <p>Manage your account settings and preferences.</p>
      </TabsContent>
      <TabsContent value="password">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <p>Update your account security.</p>
      </TabsContent>
      <TabsContent value="settings">
        <h2 className="text-xl font-bold mb-4">Application Settings</h2>
        <p>Customize your application experience.</p>
      </TabsContent>
    </Tabs>
  );
}