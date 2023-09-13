import { useEffect, useState } from "react";
import { getUserProfile, refreshToken } from "../service/auth_service";
import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useImage from "../../../hooks/useImage";
import Navbar from "../../Navbar/Navbar";

interface Image {
  image: string;
  alt_text: string;
}

interface User {
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  images: Image[];
}

function Profile() {
  const [user, setUser] = useState<User>();
  const [isAuth, setIsAuth] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const { image } = useImage(
    user?.images[0].image ? user?.images[0].image : ""
  );
  const navigate = useNavigate();
  useEffect(() => {
    const { res, cancel } = getUserProfile();
    res
      .then((data) => {
        setUser(data.data.profile);
        setIsAuth(true);
      })
      .catch((err) => {
        if (err.response.status === 401 && !repeat) {
          refreshToken();
          setRepeat(1);
        } else {
          setIsAuth(false);
        }
      });
    return () => cancel();
  }, [repeat]);
  const handleClick = () => {
    navigate("/users/login/", { replace: true });
  };
  return (
    <>
      <Navbar />
      <Box>
        {isAuth ? (
          <div>
            <HStack p={10}>
              <Avatar
                size="2xl"
                name={user?.first_name.concat(user?.last_name)}
                src={image ? image : ""}
              />
              <VStack>
                <Text
                  fontSize="6xl"
                  paddingLeft="7"
                  mb="-5"
                  as="b"
                  fontFamily="serif"
                >
                  {user?.username}
                </Text>
                <Text as={"span"}>role: {user?.role}</Text>
              </VStack>
            </HStack>
          </div>
        ) : (
          <div>
            <Text>your not authenticated!</Text>
            <Box padding="10px" display="flex" justifyContent="center">
              <Button onClick={handleClick} colorScheme="blue">
                Go To Login
              </Button>
            </Box>
          </div>
        )}
      </Box>
    </>
  );
}

export default Profile;
