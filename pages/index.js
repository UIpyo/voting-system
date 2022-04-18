// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section id='Header'>
        <div>
          {/**img goes in here */}
          {/* <Image src='/letsVote.svg' layout='fill' objectFit='contain'/> */}
        </div>
        <div>
          <div>
            <span>About</span>
            <span>Contact</span>
            <Link href='/login'><span>Login</span></Link>
          </div>
          <div>
            <div>Be a part of decision</div>
            <div>Vote Today</div>
            <div>
              <Link href='/register'><span>REGISTER</span></Link>
              <a href='#features'>READ MORE</a>
            </div>
          </div>
        </div>
      </section>
      <section id='features'>
        <div>
          Features
        </div>
        <div>
          <div>
            <Image src='/secure_f1.svg' width={40} height={40} />
            <span>Secured by 256 bit encryption</span>
          </div>
          <div>
            <Image src='/ethereum-f2.svg' width={40} height={40} />
            <span>Backed by ethereum based technology</span>
          </div>
          <div>
            <Image src='/verifiedTransaction_f3.svg' width={40} height={40} />
            <span>Verifiable transactions</span>
          </div>
          <div>
            <Image src='/easyToUse_f4.svg' width={40} height={40} />
            <span>Easy to use</span>
          </div>
          <div>
            <Image src='/cheaper_f5.svg' width={40} height={40} />
            <span>Cheaper than ballot voting system</span>
          </div>
          <div>
            <Image src='/faster_f6.svg' width={40} height={40} />
            <span>Faster voting process</span>
          </div>
        </div>
      </section>
      <section id='about'>
        <div>About</div>
        <div>
        An online voting system that will replace the old ballot sytem or paper system. Over the time we have utilized the required technology in everysector to improve efficiency and save the extraresources. But the voting system is still very expensive and requires a bigger workforce.The system is slower and still not completely tamper proof. We bring the system that is safe,reliable and solve the modern issues like higherreachability of the booth, crowd free voting, inexpensive, faster results and others.        
        </div>
      </section>
      <section id='steps'>
        <div><span>Follow these ea</span>sy steps</div>
        <div>
          <div>
            <Image src='/s1_registration.svg' width={40} height={40} />
            <span>Register yourself by filling required info</span>
          </div>
          <div>
            <Image src='/s2_signIn.svg' width={40} height={40} />
            <span>SignIn as user</span>
          </div>
          <div>
            <Image src='/s3_voteDashboard.svg' width={40} height={40} />
            <span>Go to voting dashboard</span>
          </div>
          <div>
            <Image src='/s4_securityKey.svg' width={40} height={40} />
            <span>Give security key</span>
          </div>
          <div>
            <Image src='/s5_voteCandidate.svg' width={40} height={40} />
            <span>Vote tour candidate and submit</span>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div>
          <span>Contact:</span><br/>
          1800 9090 32<br/>
          1800 9090 64<br/><br/>
          <span>Helpline Number:</span><br/>
          9090 1234 64<br/>
          9090 1234 65<br/><br/>
          <span>Email:</span><br/>
          complaint@electionindia.gov.in<br/>
          info@electionindia.gov.in
        </div>
        <div>
          <div>
            <div>
              <span>GetIn</span><br/>
              <Link href='/register'>Register</Link><br/>
              <Link href='/login'>Login</Link>
            </div>
            <div>
              <span>Know more</span><br/>
              <a href='#features'>Features</a><br/>
              <a href='#about'>About</a><br/>
              <a href='#steps'>Steps</a>
            </div>
            <div>
              <span>Follow us</span><br/>
              <a href=''>Facebook</a><br/>
              <a href=''>Instagram</a><br/>
              <a href=''>Twitter</a>
            </div>
          </div>
          <div>
            <Image src='/twitter_logo.svg' width={40} height={40}/>
            <Image src='/facebook_logo.svg' width={40} height={40}/>
            <Image src='/instagram_logo.svg' width={40} height={40}/>
          </div>
          <div>
            <span>&copy; shank.design </span>
          </div>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
