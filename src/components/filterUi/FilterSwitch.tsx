import React, { useState } from 'react';
import { switchesArr } from '../../utils/switches';
import { setSwitchId } from '../../redux/slices/filterSlice';
import SwitchInfo from './SwitchInfo';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const FilterSwitch = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.filter.switches);
  const [info, setInfo] = useState<number>(55);
  const switchFilter = switchesArr.map((obj) => {
    const switchClass = ' switch_change';
    const switchFilterClass = id === obj.id ? ' switch_filter select' : ' switch_filter';
    return (
      <div
        onMouseOver={() => setInfo(obj.id)}
        onMouseOut={() => setInfo(55)}
        className={obj.class + switchClass + switchFilterClass}
        key={obj.id}
        onClick={() => dispatch(setSwitchId(obj.id))}>
        {obj.title}
        <SwitchInfo switchName={obj.class} switchId={obj.id} info={info} />
      </div>
    );
  });
  return <>{switchFilter}</>;
};

export default FilterSwitch;
