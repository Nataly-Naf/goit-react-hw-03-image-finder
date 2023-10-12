export const Searchbar = ({onSubmitForm}) => {
   return <header>
  <form onSubmit={evt => {
         evt.preventDefault();
               onSubmitForm(evt.target[1].value)
       }}  >
       <button type="submit" >
      Search
    </button>
       <input 
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
}

