import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./BuffleHeader.css";

const BuffleHeader = ({ trigger = 0 }) => {
  const [currentText, setCurrentText] = useState("");
  const messages = ["Tuanthong Vaidyanond"];
  const timerRef = useRef(null);

  useEffect(() => {
    console.log("BuffleHeader mounted or updated", trigger);

    let index = 0;
    timerRef.current = setInterval(() => {
      setCurrentText(messages[0].slice(0, ++index));
      if (index >= messages[0].length) clearInterval(timerRef.current);
    }, 100);

    return () => {
      console.log("BuffleHeader unmounted", trigger);
      clearInterval(timerRef.current);
    };
  }, [trigger]); // Triggers reanimation when trigger changes

  return (
    <section className="welcome" id="home">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>
            <span className="name">{currentText}</span>
            <br />
            <span>My Journey Through</span>
            <br />
            <span>Web Development</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default BuffleHeader;

{
  /** 
   * Modernized version! 
* import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./BuffleHeader.css";

const BuffleHeader = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const messages = ["Tuanthong Vaidyanond"];

  // Reset

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const next = messages[0].substring(0, prev.length + 1);
        if (next.length === messages[0].length) {
          clearInterval(interval);
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="welcome" id="home">
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>
            <span className="name">{currentText}</span>
            <br />
            <span>My Journey Through</span>
            <br />
            <span>Web Development</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default BuffleHeader;
   * 
   * 
   * 
   * 
   * Old version
    import { useEffect } from "react";
import "./BuffleHeader.css";

const BuffleHeader = () => {
  useEffect(() => {
    const Messenger = function (el) {
      let m = this;
      m.init = function () {
        m.codeletters = "vaidyanond tuanthong";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = ["Tuanthong Vaidyanond"];
        setTimeout(m.animateIn, 100);
      };

      m.generateRandomString = function (length) {
        let random_text = "";
        while (random_text.length < length) {
          random_text += m.codeletters.charAt(
            Math.floor(Math.random() * m.codeletters.length)
          );
        }
        return random_text;
      };

      m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
          m.current_length += 2;
          if (m.current_length > m.messages[m.message].length) {
            m.current_length = m.messages[m.message].length;
          }
          let message = m.generateRandomString(m.current_length);
          el.innerHTML = message;
          setTimeout(m.animateIn, 20);
        } else {
          setTimeout(m.animateFadeBuffer, 20);
        }
      };

      m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
          m.fadeBuffer = [];
          for (let i = 0; i < m.messages[m.message].length; i++) {
            m.fadeBuffer.push({
              c: Math.floor(Math.random() * 12) + 1,
              l: m.messages[m.message].charAt(i),
            });
          }
        }

        let do_cycles = false;
        let message = "";

        for (let i = 0; i < m.fadeBuffer.length; i++) {
          let fader = m.fadeBuffer[i];
          if (fader.c > 0) {
            do_cycles = true;
            fader.c--;
            message += m.codeletters.charAt(
              Math.floor(Math.random() * m.codeletters.length)
            );
          } else {
            message += fader.l;
          }
        }

        el.innerHTML = message;

        if (do_cycles === true) {
          setTimeout(m.animateFadeBuffer, 50);
        } else {
          setTimeout(m.cycleText, 2000);
        }
      };

      m.cycleText = function () {
        m.message = (m.message + 1) % m.messages.length;
        m.current_length = 0;
        m.fadeBuffer = false;
        el.innerHTML = "";
        setTimeout(m.animateIn, 200);
      };

      m.init();
    };

    const messenger = new Messenger(document.getElementById("messenger"));
  }, []);

  return (
    <section className="welcome" id="home">
      <div className="wrapper">
        <div className="welcome-name">
          <h1>
            <span className="name" id="messenger">
              Loading...
            </span>
            <br />
            <span>My Journey Through</span>
            <br />
            <span>Web Development</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BuffleHeader;

     */
}
