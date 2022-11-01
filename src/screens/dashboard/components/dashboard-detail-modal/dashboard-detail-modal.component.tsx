import React from "react";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import {
  Container,
  Text,
  DetailSection,
  Content,
  modalStyles,
  Section,
  Action,
  Bold,
  CancelText,
  RemoveText,
  Title,
} from "./dashboard-detail-modal.styles";
import { DashboardDetailModalProps } from "./dashboard-detail-modal.types";

const eventThrottle = 16;

export const DashboardDetailModal = ({
  visible,
  toggleVisibility,
  onRemove,
  tracker,
}: DashboardDetailModalProps) => {
  const handleOnRemove = () => {
    onRemove();
    toggleVisibility();
  };

  // TODO: Create a button component and replased Actions with this component

  return (
    <Modal isVisible={visible} propagateSwipe={true} style={modalStyles}>
      <Container>
        <ScrollView scrollEventThrottle={eventThrottle}>
          <Content>
            <Section>
              <Title>{tracker?.name}</Title>

              <DetailSection>
                <Text>
                  Start date at <Bold>{tracker?.startDate.toDateString()}</Bold>
                </Text>
                <Text>
                  Project <Bold>{tracker?.project}</Bold>
                </Text>
              </DetailSection>
            </Section>

            <DetailSection>
              <Action onPress={handleOnRemove}>
                <RemoveText>Remove Tracker</RemoveText>
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
