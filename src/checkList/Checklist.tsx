import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data) => ReactNode; // With it, we can render element data into this component
} & ComponentPropsWithoutRef<'ul'>;

export function Checklist<Data>({
  data,
  id,
  primary,
  secondary,
  renderItem,
  ...ulProps
}: Props<Data>) {
  // ...ulProps, we can use more and more props !!! :o
  return (
    <ul className="bg-gray-300 rounded p-10" {...ulProps}>
      {/* Here, we are using ..urlProps for provide style to <ul> tag*/}
      {/* If render item has been especified in props*/}
      {data.map((item) => {
        if (renderItem) {
          return renderItem(item);
        }
        const idValue = item[id] as unknown;
        const primaryText = item[primary] as unknown;
        const secondaryText = item[secondary] as unknown;
        if (typeof idValue === 'number' && typeof primaryText === 'string') {
          return (
            <li key={idValue} className="bg-white p-6 shadow rounded mb-4 last:mb-0">
              <div className="text-xl text-gray-800 pb-1">{primaryText}</div>
              {typeof secondaryText === 'string' && (
                <div className="text-sm text-gray-500">{secondaryText}</div>
              )}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

export default Checklist;
