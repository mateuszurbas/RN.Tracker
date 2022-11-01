import React from "react";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";
import { TextField } from "@components/text-field";
import { TrackerProject } from "@ts/tracker";
import {
  Container,
  DetailSection,
  Content,
  modalStyles,
  Action,
  CancelText,
  CreateText,
  TextFieldContainer,
} from "./dashboard-new-modal.styles";
import { DashboardNewModalProps } from "./dashboard-new-modal.types";

const eventThrottle = 16;

const formName = "addTracker";

const fieldNames = {
  name: "name",
  project: "project",
} as const;

type FormValues = {
  [fieldNames.name]: string;
  [fieldNames.project]: TrackerProject;
};

const defaultValues = {
  [fieldNames.name]: "",
  [fieldNames.project]: TrackerProject.Mango,
};

export const DashboardNewModal = ({
  visible,
  toggleVisibility,
  onCreate,
}: DashboardNewModalProps) => {
  const {
    handleSubmit,
    control,
    reset: resetForm,
  } = useForm<FormValues>({
    defaultValues,
  });

  const validationRules: RegisterOptions = {
    required: {
      value: true,
      message: "This field is required",
    },
  };

  const handleOnCancel = () => {
    resetForm();
    toggleVisibility();
  };

  const handleOnCreate: SubmitHandler<FormValues> = (data) => {
    if (data) {
      onCreate({
        name: data.name,
        project: data.project,
      });
      resetForm();
      toggleVisibility();
    }
  };

  // TODO: Create dropdown with input to select a project

  return (
    <Modal isVisible={visible} propagateSwipe={true} style={modalStyles}>
      <Container>
        <ScrollView scrollEventThrottle={eventThrottle}>
          <Content>
            <TextFieldContainer>
              <TextField
                label={"Tracker name"}
                placeholder={"Enter a tracker name"}
                formName={formName}
                control={control}
                name={fieldNames.name}
                rules={validationRules}
              />
            </TextFieldContainer>

            <TextFieldContainer>
              <TextField
                label={"Project"}
                placeholder={"Enter a project name"}
                formName={formName}
                control={control}
                name={fieldNames.project}
                rules={validationRules}
              />
            </TextFieldContainer>

            <DetailSection>
              <Action onPress={handleSubmit(handleOnCreate)}>
                <CreateText>Create Tracker</CreateText>
              </Action>
              <Action onPress={handleOnCancel}>
                <CancelText>Cancel</CancelText>
              </Action>
            </DetailSection>
          </Content>
        </ScrollView>
      </Container>
    </Modal>
  );
};
