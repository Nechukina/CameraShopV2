import React, { useEffect, useRef } from 'react';
import { Camera } from '../../../types/camera';
import { KeyCode } from '../../../const';

type SearchItemProps = {
  camera: Camera;
  isCurrent: boolean;
  onClick: (cameraId: number) => void;
};

function SearchItem({ camera, isCurrent, onClick }: SearchItemProps): JSX.Element {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isCurrent) {
      itemRef.current?.focus();
    }
  }, [isCurrent]);

  const handleKeyDown = (evt: React.KeyboardEvent) => {
    if (evt.key === KeyCode.Enter) {
      evt.preventDefault();
      onClick(camera.id);
    }
  };

  return (
    <li
      className="form-search__select-item"
      tabIndex={isCurrent ? -1 : 0}
      key={camera.id}
      ref={itemRef}
      onClick={() => onClick(camera.id)}
      onKeyDown={handleKeyDown}
      data-testid="search-item"
    >
      {camera.name}
    </li>
  );
}

export default SearchItem;
