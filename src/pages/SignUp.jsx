import { useState } from "react";
import { VStack, HStack, Heading, Text, Input, Button } from "@chakra-ui/react";
import { axiosInstanceWithoutToken } from "../Axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      const res = await axiosInstanceWithoutToken.post("admin/signup", {
        email: email,
        password: password,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HStack h="100vh" w="100vw">
      <VStack h="full" w="50%" justifyContent={"center"} pos={"relative"}>
        <VStack
          _after={{
            content: '""',
            bg: "rgba(255, 22, 22, 0.5)",
            opacity: 0.5,
            pos: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          bgImage={"/images/logIn-banner.png"}
          w="full"
          h="full"
        ></VStack>
        <VStack position={"absolute"} alignItems={"start"}>
          <Heading
            fontFamily={"Inter"}
            fontWeight={"600"}
            fontSize={"48px"}
            color={"#FFF"}
          >
            Sign Up!
          </Heading>
          <Text fontFamily={"Inter"} fontWeight={"400"} color={"#FFF"}>
            Create a free account and get full access to all features!
          </Text>
        </VStack>
      </VStack>
      <VStack justifyContent={"center"} w="50%">
        <VStack alignItems={"start"} w="50%">
          <Heading fontFamily={"Inter"} fontWeight={"600"} fontSize={"32px"}>
            Sign Up!
          </Heading>
          <VStack mt={4} w="full">
            <Input
              borderRadius={"10px"}
              placeholder="Email ID"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              borderRadius={"10px"}
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              borderRadius={"10px"}
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </VStack>
          <Button
            borderRadius={"10px"}
            w="full"
            onClick={handleLogIn}
            color={"#FFF"}
            bg={"scarlet"}
            mt={2}
          >
            Sign Up
          </Button>
        </VStack>
        <HStack mt={4}>
          <Text>Already have an account?</Text>
          <Link to={"/login"}>
            <Text textDecor={"underline"} color={"dodgerBlue"}>
              Log In
            </Text>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default SignUp;
