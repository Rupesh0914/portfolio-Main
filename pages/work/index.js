// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center justify-center">
      {" "}
      {/* Add 'justify-center' class */}
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8">
          {/* text */}
          <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[none] lg:mx-0  hidden sm:block"
            >
              Front End Full Stack Developer at Goeasy, adept in crafting three
              web applications from the ground up, leveraging contemporary
              JavaScript frameworks such as React.js, Vue.js, and
              Node/Express.js for robust server-side operations. Possesses
              comprehensive expertise across the entire software development
              lifecycle, including meticulous software design, meticulous
              development, systematic debugging, and rigorous unit testing.
              Additionally, well-versed in utilizing Tailwind CSS for efficient
              creation of responsive web interfaces, implementing Material-UI
              styled components to ensure visually appealing user experiences,
              setting up Continuous Integration and Continuous Deployment
              (CI/CD) pipelines with Jenkins to automate building, testing, and
              deployment processes, and harnessing Microsoft Azure services for
              seamless application deployment, scaling, and management. Equipped
              with a versatile skill set aimed at producing high-quality
              software solutions that align with functional and aesthetic
              requirements.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
