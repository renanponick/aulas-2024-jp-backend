import './styles.css'

export default function LogoutButton() {
  return <button onClick={
    () => { 
      localStorage.removeItem('token')
    }
  }>Logout</button>;
}
