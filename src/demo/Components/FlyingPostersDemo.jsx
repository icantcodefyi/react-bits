import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";

import RefreshButton from "../../components/common/RefreshButton";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import { flyingPosters } from "../../constants/code/Components/flyingPostersCode";
import FlyingPosters from "../../content/Components/FlyingPosters/FlyingPosters";

const FlyingPostersDemo = () => {
  const [items] = useState([
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/400/400?grayscale",
  ]);
  const [planeWidth, setPlaneWidth] = useState(320);
  const [planeHeight, setPlaneHeight] = useState(320);
  const [distortion, setDistortion] = useState(3);
  const [scrollEase, setScrollEase] = useState(0.01);
  const [cameraFov, setCameraFov] = useState(45);
  const [cameraZ, setCameraZ] = useState(20);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "items",
      type: "string[]",
      default: "[]",
      description: "An array of image URLs to be displayed as flying posters.",
    },
    {
      name: "planeWidth",
      type: "number",
      default: "320",
      description: "The width of each poster plane in pixels.",
    },
    {
      name: "planeHeight",
      type: "number",
      default: "320",
      description: "The height of each poster plane in pixels.",
    },
    {
      name: "distortion",
      type: "number",
      default: "3",
      description: "The amount of distortion applied to the posters' movement.",
    },
    {
      name: "scrollEase",
      type: "number",
      default: "0.01",
      description: "The easing factor for smooth scrolling interactions.",
    },
    {
      name: "cameraFov",
      type: "number",
      default: "45",
      description: "The field of view for the camera in degrees.",
    },
    {
      name: "cameraZ",
      type: "number",
      default: "20",
      description: "The Z position of the camera, affecting zoom and perspective.",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={600} p={0} overflow="hidden">
          <RefreshButton onClick={forceRerender} />
          <FlyingPosters
            key={key}
            items={items}
            planeWidth={planeWidth}
            planeHeight={planeHeight}
            distortion={distortion}
            scrollEase={scrollEase}
            cameraFov={cameraFov}
            cameraZ={cameraZ}
          />
          <Text color="#a6a6a6" zIndex={0} fontSize="clamp(2rem, 6vw, 6rem)" fontWeight={900} position="absolute">
            Scroll.
          </Text>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Plane Width</Text>
            <Slider min={300} max={400} step={10} value={planeWidth} onChange={(val) => { setPlaneWidth(val); forceRerender(); }} width="200px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{planeWidth}px</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Plane Height</Text>
            <Slider min={200} max={350} step={10} value={planeHeight} onChange={(val) => { setPlaneHeight(val); forceRerender(); }} width="200px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{planeHeight}px</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Distortion</Text>
            <Slider min={0} max={10} step={0.1} value={distortion} onChange={(val) => { setDistortion(val); forceRerender(); }} width="200px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{distortion.toFixed(1)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Scroll Ease</Text>
            <Slider min={0.001} max={0.05} step={0.001} value={scrollEase} onChange={(val) => { setScrollEase(val); forceRerender(); }} width="200px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{scrollEase.toFixed(3)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Camera FOV</Text>
            <Slider min={20} max={90} step={1} value={cameraFov} onChange={(val) => { setCameraFov(val); forceRerender(); }} width="200px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{cameraFov}°</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Camera Z</Text>
            <Slider min={5} max={50} step={1} value={cameraZ} onChange={(val) => { setCameraZ(val); forceRerender(); }} width="200px">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{cameraZ}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={["ogl"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={flyingPosters} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...flyingPosters} />
      </CliTab>
    </TabbedLayout>
  );
};

export default FlyingPostersDemo;
