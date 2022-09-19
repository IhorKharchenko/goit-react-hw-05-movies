import { toast } from 'react-toastify';

export const SearchBox = ({ onChange, onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const search = evt.currentTarget.query.value;
    if (search.trim() === '') {
      toast.error('Please enter the query');
      return;
    }
    onSubmit(search);
    evt.currentTarget.reset();
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="query"
        onChange={e => onChange(e.currentTarget.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
