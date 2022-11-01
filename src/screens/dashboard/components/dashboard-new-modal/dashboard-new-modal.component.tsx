import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import { TrackerProject } from "@ts/tracker";
import { renderCond } from "@utils/rendering";
import {
  Container,
  DetailSection,
  Content,
  modalStyles,
  Section,
  Action,
  CancelText,
  CreateText,
  ErrorText,
  Input,
  InputContainer,
} from "./dashboard-new-modal.styles";
import { DashboardNewModalProps } from "./dashboard-new-modal.types";

const eventThrottle = 16;

type NewTrackerInputs = {
  name: string;
  project: TrackerProject;
};

const newTrackerDefaultValues: NewTrackerInputs = {
  name: "",
  project: TrackerProject.UXReview,
};

export const DashboardNewModal = ({
  visible,
  toggleVisibility,
  onCreate,
}: DashboardNewModalProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset: resetForm,
  } = useForm<NewTrackerInputs>({
    defaultValues: newTrackerDefaultValues,
  });

  const handleOnCreate: SubmitHandler<NewTrackerInputs> = (data) => {
    if (data) {
      onCreate({
        name: data.name,
        project: data.project,
      });
      resetForm();
      toggleVisibility();
    }
  };

  const errorName = renderCond(errors.name, () => <ErrorText>Field is required</ErrorText>);

  // TODO: Add Input to separate component
  // TODO: Create dropdown with input to select a project

  return (
    <Modal isVisible={visible} propagateSwipe={true} style={modalStyles}>
      <Container>
        <ScrollView scrollEventThrottle={eventThrottle}>
          <Content>
            <Section>
              <InputContainer>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Enter a name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="name"
                />
                {errorName}
              </InputContainer>

              <InputContainer>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="Enter a project name"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="project"
                />
              </InputContainer>
            </Section>
            <DetailSection>
              <Action onPress={handleSubmit(handleOnCreate)}>
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
