import React from 'react';

interface WarningIconProps {
  className?: string;
  size?: number;
  variant?: 'triangle' | 'biohazard' | 'lightning' | 'fire';
}

export const WarningIcon: React.FC<WarningIconProps> = ({
  className = '',
  size = 24,
  variant = 'triangle'
}) => {
  const iconClass = `text-climate-red ${className}`;

  switch (variant) {
    case 'triangle':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={iconClass}
        >
          <path d="M12 2L22 20H2L12 2ZM12 6L6 18H18L12 6ZM11 10V14H13V10H11ZM11 15V17H13V15H11Z"/>
        </svg>
      );

    case 'biohazard':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={iconClass}
        >
          {/* Accurate biohazard symbol - three interlocking circles */}
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>

          {/* Top circle */}
          <circle cx="12" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>

          {/* Bottom left circle */}
          <circle cx="6.5" cy="15" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>

          {/* Bottom right circle */}
          <circle cx="17.5" cy="15" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>

          {/* Inner circle cuts - creates the classic interlocking effect */}
          <path d="M9.5 9.5C8.7 8.7 7.3 8.7 6.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14.5 9.5C15.3 8.7 16.7 8.7 17.5 9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 14.5C11.2 15.3 10.8 16.7 11.6 17.5C12.4 17.5 12.6 17.5 13.4 17.5C12.6 16.7 12.8 15.3 12 14.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );

    case 'lightning':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={iconClass}
        >
          {/* Sharp, recognizable lightning bolt */}
          <path d="M13 2L8.5 9H12L11 22L15.5 15H12L13 2Z"/>
        </svg>
      );

    case 'fire':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={iconClass}
        >
          {/* Fire emoji style flame */}
          <path d="M12 2C9 6 7 10 7 14C7 17.3 9.7 20 13 20C16.3 20 19 17.3 19 14C19 10 17 6 12 2Z"/>
          <path d="M12 4.5C10.5 7 9.5 9 9.5 12C9.5 13.9 10.6 15.5 12 15.5C13.4 15.5 14.5 13.9 14.5 12C14.5 9 13.5 7 12 4.5Z" fill="rgba(255,140,0,0.8)"/>
          <path d="M12 7C11.2 8.5 10.8 9.5 10.8 11C10.8 12.1 11.4 13 12 13C12.6 13 13.2 12.1 13.2 11C13.2 9.5 12.8 8.5 12 7Z" fill="rgba(255,200,0,0.6)"/>
        </svg>
      );

    default:
      return null;
  }
};
