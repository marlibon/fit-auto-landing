import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
interface Props {
  options: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  selected: string[];
}
const SelectOptions: React.FC<Props> = ({ options, setSelected, selected }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleClickOption(e: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    const newArr = checked
      ? [...selected, name]
      : selected.filter((o) => o !== name);
    setSelected(newArr);
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setShowSelect(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
  if (options.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="w-full relative">
        <input
          id="services"
          type="text"
          placeholder={
            selected.length
              ? `Выбрано ${selected.length} шт.`
              : 'Выберите услуги'
          }
          className="text-base text-[#ababab] w-full truncate cursor-pointer border border-transparent h-[58px] rounded-lg bg-[#fafafa] p-4 leading-tight focus:outline-none focus:bg-orange-50 focus:border-gray-200"
          onClick={() => setShowSelect(!showSelect)}
          onChange={(e) => setSearch(e.target.value)}
        />{' '}
        <button
          type="button"
          className="pointer-events-none btn-input-arrow w-[10px] h-[8px] absolute top-[26px] right-[16px] btn-input-arrow__open"
        />{' '}
        <div className="py-4 flex flex-wrap">
          {selected.map((s) => (
            <span
              onClick={() => setSelected(selected.filter((opt) => opt !== s))}
              className="py-1 px-3 bg-[#ebebeb] flex items-center justify-between rounded-lg text-base font-normal m-1 cursor-pointer hover:bg-[#fafafa]"
            >
              <span>{s}</span>{' '}
              <span className="btn-close-tag w-[10px] h-[10px] ml-2 mt-0.5 cursor-pointer" />
            </span>
          ))}
        </div>
        {showSelect && (
          <div
            ref={wrapperRef}
            className="flex flex-col custom-scroll bg-white rounded-xl p-2 w-full shadow-custom absolute top-[64px] max-h-[240px] overflow-y-auto z-10"
          >
            {options
              .filter((item) =>
                item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              )
              .map((option, index) => (
                <div className="service-order p-2 hover:bg-[#fafafa]">
                  <input
                    id={index.toString()}
                    name={option}
                    type="checkbox"
                    onChange={handleClickOption}
                    defaultChecked={selected.includes(option)}
                  />{' '}
                  <label htmlFor={index.toString()}>{option}</label>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectOptions;
