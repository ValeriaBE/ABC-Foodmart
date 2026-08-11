import "../styles/storeSelect.css";

import type { Store } from "../types/store";

interface Props {
  stores: Store[];
  value: number | null;
  onChange: (value: number | null) => void;
}

export default function StoreSelect({
  stores,
  value,
  onChange,
}: Props) {
  return (
    <div className="store-filter">

      <label>

        Store

      </label>

      <select
        value={value ?? ""}
        onChange={(e) => {

          const v = e.target.value;

          onChange(
            v === ""
              ? null
              : Number(v)
          );

        }}
      >

        <option value="">

          All Stores

        </option>

        {stores.map((store) => (

          <option
            key={store.store_id}
            value={store.store_id}
          >

            {store.store_name}

          </option>

        ))}

      </select>

    </div>
  );
}