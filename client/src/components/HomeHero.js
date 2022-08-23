import { useSelector } from 'react-redux'

const HomeHero = () => {
  //   const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <div className='container col-xl-10 col-xxl-8 px-4 py-5'>
      <div className='row align-items-center g-lg-5 py-5'>
        <div className='col-lg-7 text-center text-lg-start'>
          <h1 className='display-4 fw-bold lh-1 mb-3'>airShop Next</h1>
          <p className='col-lg-10 fs-4'>
            Stop Shop for Martians and Sky Citizens Just shop and fly stuff.
            #AvGeek Only
          </p>
        </div>
        {/* card with forms and stuffs */}
        {userInfo ? (
          <div className='col-md-10 mx-auto col-lg-5'>
            <div className='card border rounded-3 bg-light'>
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' className='card-link'>
                  Card link
                </a>
                <a href='/' className='card-link'>
                  Another link
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className='col-md-10 mx-auto col-lg-5'>
            <form className='p-4 p-md-5 border rounded-3 bg-light'>
              <div className='form-floating mb-3'>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInput'
                  placeholder='name@example.com'
                />
                <label for='floatingInput'>Email address</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  type='password'
                  className='form-control'
                  id='floatingPassword'
                  placeholder='Password'
                />
                <label for='floatingPassword'>Password</label>
              </div>
              <div className='checkbox mb-3'>
                <label>
                  <input type='checkbox' value='remember-me' /> Remember me
                </label>
              </div>
              <button className='w-100 btn btn-lg btn-primary' type='submit'>
                Sign up
              </button>
              <hr className='my-4' />
              <small className='text-muted'>
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeHero
