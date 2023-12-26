import TypeWriterEffect from 'react-typewriter-effect';


export default function banking() {


  return <>
    <h1>Welcome</h1>
    <div class='typewriter'>
      <TypeWriterEffect

        textStyle={{
          fontFamily: 'Amatic SC',
          color: 'black ',
          fontWeight: 500,
          textalign: 'left',
          fontSize: '2em',
        }}
        startDelay={2000}
        cursorColor="blue"
        multiText={[
          'Hey',
          'Hey all',
          'Hey all This is Bank Project Using MERN Stack',
          'Hey all This is Bank Project Using MERN Stack Developed By Jegan K.'


        ]}
        multiTextDelay={500}
        typeSpeed={40}
      />
      <div>
        {/* <form>
        
      <h3>Email:</h3><input/>
      </form> */}


      </div>
    </div>
    {/* <div class="gif">
     <img id="bank"src="https://media1.giphy.com/media/izzMoXx7sWs7HN29Hl/source.gif " alt="img"/>  
    </div> */}



  </>
}