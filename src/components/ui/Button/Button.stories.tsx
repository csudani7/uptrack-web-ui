// #Global Imports
import { storiesOf } from "@storybook/react";
// #end Global Imports

// #Local Imports
import Button from ".";
import { DownloadIcon, SecondaryPaypalIcon } from "../../../assests/icons";
// #Local Imports

//Simple Buttons
storiesOf("Components/Basic/Button", module).add("Default Buttons", () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Save
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Update
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Install
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Selected
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Connect Paypal
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Export CSV
        </Button>
      </div>
    </div>
  );
});

storiesOf("Components/Basic/Button", module).add("Color Buttons", () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Save
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Update
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Install
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-white-200"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-blue-100",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Selected
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-lightBlue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Connect Paypal
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Export CSV
        </Button>
      </div>
    </div>
  );
});

storiesOf("Components/Basic/Button", module).add("Sized Buttons", () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Save
        </Button>
      </div>
      <div className="w-[408px]">
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px] w-full"
        >
          Update
        </Button>
      </div>
      <div className="w-[276px]">
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px] w-full"
        >
          Install
        </Button>
      </div>
      <div className="w-[276px]">
        <Button
          bgColor="bg-white-200"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-blue-100",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px] w-full"
        >
          Selected
        </Button>
      </div>
      <div className="w-[250px]">
        <Button
          bgColor="bg-lightBlue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Connect Paypal
        </Button>
      </div>
      <div className="w-28">
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px] w-full"
        >
          Save
        </Button>
      </div>
      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-2 px-[18px]"
        >
          Export CSV
        </Button>
      </div>
    </div>
  );
});

storiesOf("Components/Basic/Button", module).add("Icon Buttons", () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="w-[250px]">
        <Button
          bgColor="bg-lightBlue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          rootClassName="py-[11px] px-12 w-full"
          preffixIcon={<SecondaryPaypalIcon />}
        >
          Connect Paypal
        </Button>
      </div>

      <div>
        <Button
          bgColor="bg-gradient-to-r from-smoky to bg-blue"
          fontStyle={{
            fontSize: "text-base",
            fontWeight: "font-medium",
            fontColor: "text-white",
          }}
          bordertyle={{
            borderColor: "border-blue-100 border-opacity-5",
            borderWidth: "border",
            borderRadius: "rounded",
          }}
          preffixIcon={<DownloadIcon />}
          rootClassName="py-2 px-4"
        >
          Export CSV
        </Button>
      </div>
    </div>
  );
});
