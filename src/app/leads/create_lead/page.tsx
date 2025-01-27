"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  initialValues,
  stepOneValidationSchema,
  stepTwoValidationSchema,
} from "./validation/initial_values";
import PrimaryButton from "@/shared/components/primary_button";
import { create_lead_api } from "./data/data_access";
import MessageTooltip from "@/shared/components/message_tooltip";
import { useRouter } from "next/navigation";

const Page = () => {
  const [step, setStep] = useState(1);
  const [loader, set_loader] = React.useState<{
    loading: boolean;
    message: string;
  }>({ loading: false, message: "" });
  const router = useRouter();
  // Initial form values

  // Step transition animations
  const variants = {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -24 },
  };

  // Submit handler for the final step

  return (
    <div className="w-full h-full flex   justify-center items-center">
      <AnimatePresence>
        <div className="max-w-lg mx-auto mt-10 p-6 ">
          <Formik
            initialValues={initialValues}
            validateOnMount
            validationSchema={
              step === 1 ? stepOneValidationSchema : stepTwoValidationSchema
            }
            onSubmit={async (values, props) => {
              try {
                set_loader({ loading: true, message: "" });
                if (step === 1) {
                  setStep(2); // Move to the next step
                  props.setSubmitting(false);
                } else {
                // Final submission
                 const message= await create_lead_api(values);
                  setStep(1);
                  props.resetForm();
                  props.setSubmitting(false);
                  set_loader({loading:false,message:message.message})
                
                }
              } catch (error) {
                props.setSubmitting(false);
                set_loader((pre) => ({
                  loading: pre.loading,
                  message: `${error}`,
                }));

                
              } finally { 
                
                set_loader((pre) => ({ loading: false, message: pre.message }));
              }
            }}
          >
            {({ isSubmitting, isValid, submitForm, resetForm }) => {
              return (
                <Form>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key={step}
                        initial="hidden"
                        animate="visible"
                        className="bg-slate-600 rounded-md shadow-2xl p-6"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold mb-4">
                            Step 1: Basic Information
                          </h2>
                          <div>
                            <label className="block mb-1 font-medium">
                              First Name
                            </label>
                            <Field
                              type="text"
                              name="first_name"
                              className="w-full text-black border border-gray-300 p-2 rounded"
                            />
                            <ErrorMessage
                              name="first_name"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 font-medium">
                              Last Name
                            </label>
                            <Field
                              type="text"
                              name="last_name"
                              className="text-black w-full border border-gray-300 p-2 rounded"
                            />
                            <ErrorMessage
                              name="last_name"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 font-medium">
                              Email
                            </label>
                            <Field
                              type="email"
                              name="email"
                              className="w-full text-black border border-gray-300 p-2 rounded"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                          <div>
                            <label className="block mb-1 font-medium">
                              Phone
                            </label>
                            <Field
                              type="text"
                              name="phone"
                              className="w-full text-black border border-gray-300 p-2 rounded"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div
                        key={step}
                        initial="hidden"
                        className="bg-slate-600 rounded-md shadow-2xl p-6"
                        animate="visible"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="space-y-4">
                          <h2 className="text-xl font-semibold mb-4">
                            Step 2: Additional Details
                          </h2>
                          <div>
                            <label className="block mb-1 font-medium">
                              Notes
                            </label>
                            <Field
                              as="textarea"
                              name="notes"
                              className="text-black w-full border border-gray-300 p-2 rounded"
                            />
                            <ErrorMessage
                              name="notes"
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </div>
                        </div>

                        {/* Navigation Buttons */}
                      </motion.div>
                    )}

                    <motion.div
                      key={`${step} / ${step}`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={variants}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex justify-between mt-6">
                        <PrimaryButton
                          title={step === 1 ? "Back" : "Reset"}
                          onclick={() => {
                            if (step === 1) {
                              router.back();
                            } else {
                              setStep(1);
                              resetForm({ errors: {} });
                            }
                          }}
                        />

                        <PrimaryButton
                          color="indigo"
                          title={step === 2 ? "Submit" : "Next"}
                          disabled={isSubmitting || !isValid}
                          onclick={() => submitForm()}
                        />
                      </div>

                      {/* Navigation Buttons */}
                    </motion.div>
                  </AnimatePresence>
                </Form>
              );
            }}
          </Formik>
        </div>
      </AnimatePresence>
      <MessageTooltip
        message={loader.message}
        turn_off_handler={() => {
          set_loader({ loading: false, message: "" });
        }}
      />
    </div>
  );
};

export default Page;
// Validation schemas for each step
