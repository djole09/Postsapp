import { createContext, PropsWithChildren } from 'react';

interface ComponentLogContextType {
  message: string;
}

export const ComponentLogContext = createContext<ComponentLogContextType>({
  message: 'Hello from',
});

interface ComponentLogProviderProps extends PropsWithChildren {
  message: string;
}

export const ComponentLogProvider: React.FC<ComponentLogProviderProps> = ({
  children,
  message,
}) => (
  <ComponentLogContext.Provider value={{ message }}>
    {children}
  </ComponentLogContext.Provider>
);
