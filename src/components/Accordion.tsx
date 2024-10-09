import { Link } from "react-router-dom";
import AccordianCard from "./AccordianCard";

const Accordion = () => {
    return (
        <div className="text-[#E4E8F7] lg:mt-0 lg:px-0  md:mt-[80px] max-w-[1240px] mx-auto px-4 md:px-4">
            <div className="lg:w-1/2 mx-auto mb-[84px] text-center">
                <p className="uppercase lg:text-[56px] md:text-[56px] text-[30px] font-bold md:leading-[56px] tracking-[0.8px]">
                    Frequently Asked Questions (FAQ)
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h1 className="lg:text-[48px] md:text-[44px] text-[26px] font-bold leading-[30px] lg:leading-[48px]">
                        Have Questions?
                    </h1>
                    <p className="md:text-[20px] text-[16px] leading-[20px] md:leading-[25.6px] md:mt-5 mt-2 mb-10 md:mb-10 ">
                        Have more questions? Book a free strategy call .
                    </p>
                    <Link to={'https://calendly.com/imonofficial2/30min?month=2024-07'} target="_blank" className="bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] mt-4 lg:mt-[30px] md:text-[20px] text-[14px]">
                        Book a Call
                    </Link>
                </div>
                <div className="flex justify-center lg:items-center flex-col lg:-mt-8 mt-6 md:gap-0 lg:gap-4">
                    <AccordianCard
                        title="Q: Can you edit long videos into shorts or reels?"
                        description="A: Yes, I do! I'm an expert in all kinds of video editing services, including podcasts, talking heads, promos, cinematic videos, music videos, slideshows, and more."
                    />
                    <AccordianCard
                        title="Q: How can I send you my videos?"
                        description="A: If your video is under 500 MB, you can attach it directly to your Fiverr message. For larger files, please use Google Drive, Dropbox, or WeTransfer, and share the download link with me in the chat."
                    />
                    <AccordianCard
                        title="Q: Do you offer discounts for long-term collaborations or partnerships?"
                        description="A: Yes, I do! I am particularly interested in building long-term relationships with clients."
                    />
                    <AccordianCard
                        title="Q: Is client satisfaction guaranteed with your service?"
                        description="A: Absolutely! I guarantee satisfaction and ensure you’ll love the final result."
                    />
                    <AccordianCard
                        title="Q: Do you edit thumbnails for YouTube Shorts too?"
                        description="A: Yes, I do. This service is available for an additional $10."
                    />
                    <AccordianCard
                        title="Q: Are you available for long-term projects?"
                        description="A: Yes! As a professional editor, I am dedicated to delivering high-quality work and fostering long-lasting client relationships. I am flexible and ready to meet your specific needs and deadlines ."
                    />
                    <AccordianCard
                        title="Q: What will you do in my shorts?"
                        description="A: I'll add engaging captions, emojis, GIFs, dynamic transitions, sound effects, motion graphics, trending background music, precise cuts, and eye-catching overlays to keep your audience hooked!"
                    />
                    <AccordianCard
                        title="Q: Is price negotiable?"
                        description="A: Yes, it is! Just DM me to discuss."
                    />
                </div>
            </div>
        </div>
    );
};

export default Accordion;
