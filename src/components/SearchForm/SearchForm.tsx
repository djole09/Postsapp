import { WithComponentLog } from '@/context/WithComponentLog';
import styles from './SearchForm.module.css';

interface SearchFormProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  resetForm: VoidFunction;
  placeholder?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  name,
  value,
  onChange,
  id,
  resetForm,
  placeholder,
}) => (
  <WithComponentLog componentName="SearchForm">
    <div className={styles.search_form_container} data-testid="search-container">
      <label htmlFor={id} data-testid="search-label">
        {placeholder}:
      </label>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-testid="search-input"
      />

      {value && (
        <button className={styles.btn} onClick={resetForm}>
          &times;
        </button>
      )}
    </div>
  </WithComponentLog>
);
