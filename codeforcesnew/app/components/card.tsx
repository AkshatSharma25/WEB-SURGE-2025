import React from 'react';

export function Card({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div
      className={`
        bg-white 
        border 
        border-gray-200 
        rounded-xl 
        overflow-hidden 
        transition-all 
        duration-300 
        hover:shadow-lg 
        hover:border-gray-300
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div
      className={`
        px-6 
        py-4 
        border-b 
        border-gray-100 
        bg-gray-50
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <h3
      className={`
        text-2xl 
        font-semibold 
        text-gray-800 
        tracking-tight
        ${className || ''}
      `}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <p
      className={`
        text-sm 
        text-gray-500 
        mt-2 
        leading-relaxed
        ${className || ''}
      `}
    >
      {children}
    </p>
  );
}

export function CardContent({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div
      className={`
        px-6 
        py-4 
        space-y-4
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div
      className={`
        px-6 
        py-4 
        bg-gray-50 
        border-t 
        border-gray-100 
        flex 
        justify-end 
        items-center 
        space-x-2
        ${className || ''}
      `}
    >
      {children}
    </div>
  );
}

// Example Usage
export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
        <CardDescription>
          Detailed insights into your recent project performance and key metrics.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-2">Total Revenue</h4>
            <p className="text-2xl font-bold text-blue-600">$45,231.89</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-2">Active Users</h4>
            <p className="text-2xl font-bold text-green-600">1,234</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          View Details
        </button>
      </CardFooter>
    </Card>
  );
}