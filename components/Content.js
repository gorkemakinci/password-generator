import { motion } from 'framer-motion';
import { Markup } from 'interweave';

export default function Content({feature}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut" }}
        >
            <div className="my-1 text-gray-800 dark:text-gray-200 text-justify">
                <Markup content={feature.description}/>
            </div>
        </motion.div>
    );
  }