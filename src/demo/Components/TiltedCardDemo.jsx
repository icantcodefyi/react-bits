import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Switch } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import TiltedCard from "../../content/Components/TiltedCard/TiltedCard";
import { tiltedCard } from "../../constants/code/Components/tiltedCardCode";

const TiltedCardDemo = () => {
  const [rotateAmplitude, setRotateAmplitude] = useState(12);
  const [scaleOnHover, setScaleOnHover] = useState(1.05);
  const [showTooltip, setShowTooltip] = useState(true);
  const [displayOverlayContent, setDisplayOverlayContent] = useState(true);

  const propData = [
    {
      name: "imageSrc",
      type: "string",
      default: "N/A",
      description: "The source URL of the image."
    },
    {
      name: "altText",
      type: "string",
      default: "Tilted card image",
      description: "Alternative text for the image."
    },
    {
      name: "captionText",
      type: "string",
      default: "",
      description: "Text for the tooltip caption."
    },
    {
      name: "containerHeight",
      type: "string",
      default: "600px",
      description: "Height of the overall card container."
    },
    {
      name: "containerWidth",
      type: "string",
      default: "100%",
      description: "Width of the overall card container."
    },
    {
      name: "imageHeight",
      type: "string",
      default: "300px",
      description: "Height of the inner image."
    },
    {
      name: "imageWidth",
      type: "string",
      default: "300px",
      description: "Width of the inner image."
    },
    {
      name: "scaleOnHover",
      type: "number",
      default: "1.1",
      description: "Scaling factor applied on hover."
    },
    {
      name: "rotateAmplitude",
      type: "number",
      default: "14",
      description: "Controls how much the card tilts with mouse movement."
    },
    {
      name: "showMobileWarning",
      type: "boolean",
      default: "true",
      description: "Whether to show a small alert about mobile usage."
    },
    {
      name: "showTooltip",
      type: "boolean",
      default: "true",
      description: "Toggles the visibility of the tooltip (figcaption)."
    },
    {
      name: "displayOverlayContent",
      type: "boolean",
      default: "false",
      description: "Whether to display any overlayContent on top of the image."
    },
    {
      name: "overlayContent",
      type: "ReactNode",
      default: "null",
      description: "A React node to display as an overlay on the card."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={500} overflow="hidden">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={rotateAmplitude}
            scaleOnHover={scaleOnHover}
            showMobileWarning={false}
            showTooltip={showTooltip}
            displayOverlayContent={displayOverlayContent}
            overlayContent={
              <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
              </p>
            }
          />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
          <Flex direction="column" gap={2} mt={4}>
            <Flex align="center" gap={2}>
              <Text>Rotate Amplitude</Text>
              <Slider
                min={0}
                max={30}
                step={1}
                value={rotateAmplitude}
                onChange={setRotateAmplitude}
                width="150px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{rotateAmplitude}</Text>
            </Flex>

            <Flex align="center" gap={2}>
              <Text>Scale on Hover</Text>
              <Slider
                min={1}
                max={1.5}
                step={0.05}
                value={scaleOnHover}
                onChange={setScaleOnHover}
                width="150px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{scaleOnHover.toFixed(2)}</Text>
            </Flex>

            <Flex align="center" gap={2}>
              <Text>Show Tooltip</Text>
              <Switch
                isChecked={showTooltip}
                onChange={(e) => setShowTooltip(e.target.checked)}
              />
            </Flex>

            <Flex align="center" gap={2}>
              <Text>Show Overlay Content</Text>
              <Switch
                isChecked={displayOverlayContent}
                onChange={(e) => setDisplayOverlayContent(e.target.checked)}
              />
            </Flex>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={["framer-motion"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={tiltedCard} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...tiltedCard} />
      </CliTab>
    </TabbedLayout>
  );
};

export default TiltedCardDemo;
