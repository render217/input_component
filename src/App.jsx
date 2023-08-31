import React from 'react'
import Sidebar from './components/Sidebar'
import Input from './components/Input'

const App = () => {
  return (
    <>
      <div className=" px-2">
        <div className="flex flex-col sm:flex-row">
          <div className="min-w-[250px] min-h-[100vh]">
            <Sidebar />
          </div>
          <div className="flex-1 min-h-[100vh]">
            <div className='px-10 py-10'>
              <h1 className="mb-10 text-3xl font-Poppins font-semibold">Inputs</h1>


              <div className='mb-12 '>
                <div>
                  <pre className='mb-2'>
                    &lt;Input /&gt;
                  </pre>
                  <Input />
                </div>
                
              </div>

              <div className='mb-12'>
                <div>
                  <pre className='mb-2'>
                    &lt;Input error  /&gt;
                  </pre>
                  <Input error  />
                </div>
               
              </div>


              <div className='mb-12 '>
                <div>
                  <pre className='mb-2'>
                    &lt;Input disabled /&gt;
                  </pre>
                  <Input disabled  />
                </div>
               
              </div>

              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;Input helperText="Some interesting text" /&gt;
                  </pre>
                  <Input helperText="Some interesting text"  />
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;Input helperText="Some interesting text" error /&gt;
                  </pre>
                  <Input helperText="Some interesting text" error />
                </div>
              </div>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;Input startIcon="fa-solid fa-phone" /&gt;
                  </pre>
                  <Input startIcon='fa-solid fa-phone'/>
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;Input endIcon='' /&gt;
                  </pre>
                  <Input endIcon='fa-solid fa-cart-shopping'/>
                </div>
              </div>


              <div className='flex gap-x-20 gap-y-12 mb-12 flex-wrap'>
                <div>
                  <pre className='mb-2'>
                    &lt;Input size='sm' /&gt;
                  </pre>
                  <Input size='sm'/>
                </div>
                <div>
                  <pre className='mb-2'>
                    &lt;Input size='md' /&gt;
                  </pre>
                  <Input size='md' />
                </div>
                
              </div>


              <div className='mb-12 '>
                <div>
                  <pre className='mb-2'>
                    &lt;Input fullwidth /&gt;
                  </pre>
                  <Input fullwidth />
                </div>
               
              </div>

              
              <div className='mb-12'>
                <div>
                  <pre className='mb-2'>
                    &lt;Input multiline row="4" /&gt;
                  </pre>
                  <Input  multiline row="4"  />
                </div>
               
              </div>

              

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App