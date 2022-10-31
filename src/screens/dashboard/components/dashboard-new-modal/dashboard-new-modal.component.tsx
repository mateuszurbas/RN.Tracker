import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import { TrackerProject } from "@ts/tracker";
import {
  Container,
  DetailSection,
  Content,
  modalStyles,
  Section,
  Action,
  CancelText,
  CreateText,
} from "./dashboard-new-modal.styles";
import { DashboardNewModalProps } from "./dashboard-new-modal.types";

const eventThrottle = 16;

export const DashboardNewModal = ({
  visible,
  toggleVisibility,
  onCreate,
}: DashboardNewModalProps) => {
  const [name, setName] = useState("");
  const [selectedProject, setSelectedProject] = useState<TrackerProject>();

  useEffect(() => {
    setName("Test modal");
    setSelectedProject(TrackerProject.UXReview);
  }, []);

  const handleOnCreate = () => {
    if (name && selectedProject) {
      onCreate({ name, project: selectedProject });
      toggleVisibility();
    }
  };

  return (
    <Modal isVisible={visible} propagateSwipe={true} style={modalStyles}>
      <Container>
        <ScrollView scrollEventThrottle={eventThrottle}>
          <Content>
            <Section>
              <DetailSection></DetailSection>
            </Section>

            <DetailSection>
              <Action onPress={handleOnCreate}>
                <CreateText>Create Tracker</CreateText>
              </Action>
              <Action onPress={toggleVisibility}>
                <CancelText>Cancel</CancelText>
              </Action>
            </DetailSection>
          </Content>
        </ScrollView>
      </Container>
    </Modal>
  );
};
