import { useState } from "react";
import { VStack, HStack, Heading, Text, Input, Button } from "@chakra-ui/react";
import { axiosInstanceWithoutToken } from "../Axios";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const res = await axiosInstanceWithoutToken.post("admin/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("isAuthenticated", true);
      navigate("/");
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
            Welcome Back!
          </Heading>
          <Text fontFamily={"Inter"} fontWeight={"400"} color={"#FFF"}>
            Log in if you already have an account!
          </Text>
        </VStack>
      </VStack>
      <VStack justifyContent={"center"} w="50%">
        <VStack alignItems={"start"} w="50%">
          <Heading fontFamily={"Inter"} fontWeight={"600"} fontSize={"32px"}>
            Welcome Back!
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
          </VStack>
          <Button
            borderRadius={"10px"}
            w="full"
            onClick={handleLogIn}
            color={"#FFF"}
            bg={"scarlet"}
            mt={2}
          >
            Log In
          </Button>
        </VStack>
        <HStack mt={4}>
          <Text>Don't have an account?</Text>
          <Link to={"/signup"}>
            <Text textDecor={"underline"} color={'dodgerBlue'}>Sign Up</Text>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default LogIn;
