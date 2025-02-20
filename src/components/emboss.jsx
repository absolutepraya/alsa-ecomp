'use client';

export default function Emboss({ children, innerClassName = '', outerClassName = '', toPercent='', viaPercent='' }) {
	let outerRadius = '';

  // Check the innerClassName for various rounded classes
  switch (true) {
    case innerClassName.includes('rounded-xs'):
      outerRadius = 'rounded-[9px]'; // base 2px + 7px
      break;
    case innerClassName.includes('rounded-sm'):
      outerRadius = 'rounded-[11px]'; // base 4px + 7px
      break;
    case innerClassName.includes('rounded-md'):
      outerRadius = 'rounded-[13px]'; // base 6px + 7px
      break;
    case innerClassName.includes('rounded-lg'):
      outerRadius = 'rounded-[15px]'; // base 8px + 7px
      break;
    case innerClassName.includes('rounded-xl'):
      outerRadius = 'rounded-[19px]'; // base 12px + 7px
      break;  
    case innerClassName.includes('rounded-2xl'):
      outerRadius = 'rounded-[23px]'; // base 16px + 7px
      break;
    case innerClassName.includes('rounded-3xl'):
      outerRadius = 'rounded-[31px]'; // base 24px + 7px
      break;
    case innerClassName.includes('rounded-full'):
      outerRadius = 'rounded-full';
      break;
    default:
      outerRadius = ''; // No matching class
  }

	return (
    <div className={`bg-gradient-to-b from-secondary to-tertiary ${toPercent ? toPercent : 'to-60%'} px-[7px] py-[7px] text-foreground shadow-[0_0_5px_rgba(0,0,0,0.7)] ${outerClassName} ${outerRadius}`}>
      <div className={`bg-primary shadow-[0_0_2px_rgba(0,0,0,0.6)] ${innerClassName}`}>{children}</div>
    </div>
  );
}
