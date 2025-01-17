import TitleText from './components/TitleText';
import AboutTitle from './components/AboutTitle';
import About from './components/About';
import CustomizedTimeline from './components/Timeline';
import { Typography } from '@material-ui/core';
import DiscreteSlider1 from './components/skillSlide1';
import DiscreteSlider2 from './components/skillSlide2';
import DiscreteSlider3 from './components/skillSlide3';
import DiscreteSlider4 from './components/skillSlide4';
import DiscreteSlider5 from './components/skillSlide5';
import GitHubUser from './components/GitHubUser';
import AppleMusic from './components/AppleMusic';
import MoviesGrid from './components/moviesGrid';
import Contact1 from './components/contact1';
import Contact2 from './components/contact2';
import GitHubIcon from '@material-ui/icons/GitHub';
import GoogleForms from './components/googleForms';

function App() {
  return (
    <div className="App">
      <table id='pageFormat'>
        
        <tr>
          <td width='10%'></td>
          <td colspan='2'>
            <TitleText />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </td>
          <td width='10%'></td>
        </tr>
      
        <tr>
          <td width='10%'></td>
          <td >
            <AboutTitle/><br/><About/><br/>
            <center>
              <img alt="" src="https://media.giphy.com/media/HMHiWYQraoBZC/giphy.gif" height='340' width='350'/>
            </center>
          </td>
          <td>
            <CustomizedTimeline/>
          </td>
          <td width='10%'></td>
        </tr>

        <tr>
          <td collspan='4'>
            <br/><br/><br/><br></br>
          </td>
        </tr>

        <tr>
          <td width='10%'></td>
          <td>
            <center>
              <Typography variant='h2'>
                <font face='florencesans_shadedregular'>
                  My skills and competencies
                </font>
              </Typography>
            
              <br/><br/>
              <Typography variant='h'>
                <font face='florencesansregular'>
                  C++ 
                  <DiscreteSlider4/>
                  C 
                  <DiscreteSlider4/>
                  C# 
                  <DiscreteSlider3/>
                  Java 
                  <DiscreteSlider3/>
                  PL/SQL 
                  <DiscreteSlider4/>
                  Object-Oriented Programming 
                  <DiscreteSlider4/>
                  HTML 
                  <DiscreteSlider3/>
                  CSS 
                  <DiscreteSlider2/>
                  JavaScript 
                  <DiscreteSlider1/>
                  Teamwork
                  <DiscreteSlider5/>
                  Organisational Skills 
                  <DiscreteSlider5/>
                  Communication Skills
                  <DiscreteSlider4/>
                  Leadership
                  <DiscreteSlider4/>
                  Adobe Photoshop
                  <DiscreteSlider4/>
                </font> 
              </Typography>
            </center>
            <br/>
          </td>
          <td>
            <center>
              <img alt="" src="https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif"/>
              <br/>
              Actual footage of me while coding this website.
            </center>
          </td>
          <td width='10%'></td>
        </tr>

        <tr>
          <td collspan='4'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></td>
        </tr>

        <tr>
          <td width='10%'></td>
          <td >
            <center>
              <GitHubUser/>
              <br/>
              <GitHubIcon/>
              <a href="https://github.com/udrishh">
                <Typography variant='h6'>
                  <font face='florencesansregular'>
                    @udrishh
                  </font>
                </Typography>
              </a>
              <br/>
            </center>
          </td>
          <td >
            <Typography variant='h2'>
              <center>
                <font face='florencesans_shadedregular'>
                  Take a look at my GitHub profile!
                </font>
              </center>
            </Typography>
            <br/>
            <center>
              <img alt="" src="https://i.kym-cdn.com/entries/icons/facebook/000/028/021/work.jpg" height='200' width='350'/>
            </center>
          </td>
          <td width='10%'></td>
        </tr>

        <tr>
          <td collspan='4'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></td>
        </tr>

        <tr>
          <td width='10%'></td>
          <td>
              <Typography variant='h3'>
                <center>
                  <font face='florencesans_shadedregular'>
                    Let's take a break!😌
                  </font>
                </center>
              </Typography>
              <br/><br/><br/>
              <Typography variant='h5'>
                <center>
                  <font face='florencesansregular'>
                    Here are some music, movies, and TV shows recommendations!
                  </font>
                </center>
              </Typography>
              <br/>
              <center>
                <AppleMusic/>
              </center>
            </td>
            <td>
              <br/><br/><br/><br/><br/><br/>
              <center>
                <img alt="" src="https://media1.tenor.com/images/cc9f101192bcf54c7db2d9470094eeb1/tenor.gif?itemid=18110512" height='200' width='350'/>
                <br/><br/><br/>
                <MoviesGrid/>
                <br/>
              </center>
              <Typography variant='h5'>
                <font face='florencesansregular'>
                  *Chernobyl it's a must-see!
                </font>
              </Typography>
            </td>
            <td width='10%'></td>
          </tr>

          <tr>
            <td collspan='4'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </td>  
          </tr>

          <tr>
            <td width='10%'></td>
            <td>
              <center>
                <GoogleForms/>
              </center>
              </td>
            <td>
              <center>
                <Contact1/>
                <br/>
                <img alt="" src="https://media.giphy.com/media/3oEduNpxiamlYn9Cz6/giphy.gif" height="135" width="240"/>
                <img alt="" src="https://media.giphy.com/media/st7q18mjEvCbm/giphy.gif" height="135" width="240"/><br/><br/><br/>
              </center>
              <Contact2/>
            </td>
            <td width='10%'></td>
            </tr>

            <tr>
              <td collspan='4'><br/><br/><br/><br/><br/><br/></td>
            </tr>

          </table>
        </div>
  );
}

export default App;