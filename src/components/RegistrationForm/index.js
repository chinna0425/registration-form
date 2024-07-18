import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    firsterror: '',
    lasterror: '',
    isActive: true,
  }

  saveTheChanges = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname === '' && lastname === '') {
      this.setState({firsterror: 'Required', lasterror: 'Required'})
    } else if (firstname === '') {
      this.setState({firsterror: 'Required'})
    } else if (lastname === '') {
      this.setState({lasterror: 'Required'})
    } else {
      this.setState({isActive: false, firstname: '', lastname: ''})
    }
  }

  saveFirstname = event => {
    this.setState({firstname: event.target.value, firsterror: ''})
  }

  saveLastname = event => {
    this.setState({lastname: event.target.value, lasterror: ''})
  }

  firstNameBlur = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({firsterror: 'Required'})
    }
  }

  lastNameBlur = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({lasterror: 'Required'})
    }
  }

  anotherresponse = () => {
    this.setState({isActive: true})
  }

  render() {
    const {firstname, lastname, firsterror, lasterror, isActive} = this.state
    const boxcolor1 = firsterror !== '' ? 'color1' : ''
    const boxcolor2 = lasterror !== '' ? 'color1' : ''
    return (
      <div className="background-contianer">
        <h1 className="heading">Registration</h1>
        {isActive ? (
          <form className="form-container" onSubmit={this.saveTheChanges}>
            <div>
              <label htmlFor="firstname" className="form-label">
                FIRST NAME
              </label>
              <br />
              <input
                id="firstname"
                value={firstname}
                type="text"
                placeholder="Firstname"
                className={`forminputtext ${boxcolor1}`}
                onChange={this.saveFirstname}
                onBlur={this.firstNameBlur}
              />
              <p className="paraerror">{firsterror}</p>
            </div>
            <div>
              <label htmlFor="lastname" className="form-label">
                LAST NAME
              </label>
              <br />
              <input
                id="lastname"
                value={lastname}
                type="text"
                placeholder="Lastname"
                className={`forminputtext ${boxcolor2}`}
                onChange={this.saveLastname}
                onBlur={this.lastNameBlur}
              />
              <p className="paraerror">{lasterror}</p>
            </div>
            <div className="button-contianer">
              <button type="submit" className="button-style">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="image-success"
            />
            <p className="paragraph">Submitted Successfully</p>
            <button
              type="button"
              className="button-style"
              onClick={this.anotherresponse}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default RegistrationForm
