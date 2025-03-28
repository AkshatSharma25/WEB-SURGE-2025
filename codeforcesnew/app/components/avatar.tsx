import React, { createContext, useContext, useState } from 'react';

type AvatarContextType = {
    imageLoaded: boolean;
    setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export function Avatar({
    children,
    size = 'md',
    variant = 'circular',
    status
}: {
    children: React.ReactNode,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl',
    variant?: 'circular' | 'rounded' | 'square',
    status?: 'online' | 'offline' | 'away' | 'busy'
}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    // Expanded size classes with larger options
    const sizeClasses = {
        'xs': 'w-6 h-6 text-xs',
        'sm': 'w-10 h-10 text-sm',
        'md': 'w-16 h-16 text-base',
        'lg': 'w-24 h-24 text-lg',
        'xl': 'w-32 h-32 text-xl',
        '2xl': 'w-40 h-40 text-2xl',
        '3xl': 'w-48 h-48 text-3xl',
        '4xl': 'w-64 h-64 text-4xl'
    };

    // Variant classes
    const variantClasses = {
        'circular': 'rounded-full',
        'rounded': 'rounded-md',
        'square': 'rounded-none'
    };

    // Status indicator classes
    const statusClasses = {
        'online': 'border-2 border-green-500',
        'offline': 'border-2 border-gray-400',
        'away': 'border-2 border-yellow-500',
        'busy': 'border-2 border-red-500'
    };

    return (
        <AvatarContext.Provider value={{ imageLoaded, setImageLoaded }}>
            <div
                className={`
          relative inline-block 
          ${sizeClasses[size]} 
          ${variantClasses[variant]}
          ${status ? statusClasses[status] : ''}
          overflow-hidden
        `}
            >
                {children}
            </div>
        </AvatarContext.Provider>
    );
}

export function AvatarImage({
    src,
    alt = "Avatar",
    fallback
}: {
    src: string,
    alt?: string,
    fallback?: React.ReactNode
}) {
    const context = useContext(AvatarContext);
    if (!context) {
        throw new Error('AvatarImage must be used within an Avatar component');
    }

    const { imageLoaded, setImageLoaded } = context;

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageLoaded(false);
    };

    return (
        <>
            <img
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                onError={handleImageError}
                className="w-full h-full object-cover absolute top-0 left-0"
            />
            {!imageLoaded && fallback && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    {fallback}
                </div>
            )}
        </>
    );
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
            {children}
        </div>
    );
}

// Example Usage Component
export function AvatarDemo() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            {/* Demonstrating various sizes */}
            <Avatar size="xs">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    fallback={<AvatarFallback>XS</AvatarFallback>}
                />
            </Avatar>
            <Avatar size="sm">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    fallback={<AvatarFallback>SM</AvatarFallback>}
                />
            </Avatar>
            <Avatar size="md">
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    fallback={<AvatarFallback>MD</AvatarFallback>}
                />
            </Avatar>
            <Avatar size="lg">
                <AvatarImage
                    src="https://github.com/vercel.png"
                    fallback={<AvatarFallback>LG</AvatarFallback>}
                />
            </Avatar>
            <Avatar size="xl">
                <AvatarImage
                    src="https://github.com/vercel.png"
                    fallback={<AvatarFallback>XL</AvatarFallback>}
                />
            </Avatar>
            <Avatar size="2xl">
                <AvatarImage
                    src="https://github.com/vercel.png"
                    fallback={<AvatarFallback>2XL</AvatarFallback>}
                />
            </Avatar>
            <Avatar size="3xl">
                <AvatarImage
                    src="https://github.com/vercel.png"
                    fallback={<AvatarFallback>3XL</AvatarFallback>}
                />
            </Avatar>
            <Avatar size="4xl">
                <AvatarImage
                    src="https://github.com/vercel.png"
                    fallback={<AvatarFallback>4XL</AvatarFallback>}
                />
            </Avatar>
        </div>
    );
}