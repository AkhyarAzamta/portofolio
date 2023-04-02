import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 5 } },
};

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hello There, 
          </motion.span>
        <div className={css.upperElements}>
        <div>
      <motion.div
        variants={fadeIn("right", "tween", 0.9, 1)}
        
        style={{ fontSize: '2em', display: 'inline-block' }}
        >
        <p>I'am</p>
        <TypeAnimation
         sequence={[
          'Software Engineer', // Types 'One'
          1000, // Waits 1s
          'Frontend Develover', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          // 'Mahasiswa', // Types 'Three' without deleting 'Two'
        ]}
        wrapper="div"
          cursor={true}
          repeat={Infinity}
        />
      </motion.div>
    </div>
          <motion.span className={css.Text} variants={fadeIn("left", "tween", 0.4, 1)}>
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </motion.span>
          </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img className={css.urg} variants={slideIn("up", "tween", 0.5, 1.3)} src="./urg.png" alt="foto akhyar azamta" />
        </motion.div>

        <a className={css.email} href="mailto:akhyar.azamta@gmail.com">
          akhyar.azamta@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>PROGRAMMER </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
