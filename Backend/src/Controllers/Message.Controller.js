import { ConversationofUser } from "../Models/Conversation.model.js";
import { Message } from "../Models/Message.model.js";
import { User } from "../Models/User.Model.js";
import { Apiresponse } from "../Utils/Apiresponse.js";
import { Getsocketid, io } from "../Socket/Socket.js";
import { fileUpload } from "../Utils/Fileupload.js";

export const MessageCOntroller = async (req, res, next) => {
  try {
    console.log("req.user", req.user);
    const { senderid, Reciverid, message } = req.body;
    console.log(req.body);
    // console.log("req.fil", req.file);
    // if (req.file) {
    //   console.log("IMAGESENT", imagesent);
    // }
    if (message && req.file) {
      const imagesent = await fileUpload(req?.file?.path);
      const Findsenderdata = await User.findById(senderid);
      console.log("Findsenderdata", Findsenderdata);
      const UserExist = await ConversationofUser.findOne({
        Users: { $all: [senderid, Reciverid] },
      });
      console.log("UserExist", UserExist);

      if (!UserExist) {
        await ConversationofUser.create({
          Users: [senderid, Reciverid],
        });
      }

      const createmessage = await Message.create({
        Loginuserid: senderid,
        LogedinuserImage: Findsenderdata.imageuser,
        message,
        images: imagesent?.url,
      });

      const UserExisted = await ConversationofUser.findOne({
        Users: { $all: [senderid, Reciverid] },
      });
      console.log("UserExisted", UserExisted);

      UserExisted.Messageid.push(createmessage._id);
      UserExisted.save();
      const Messages = await UserExisted.populate("Messageid");
      console.log("Messages", Messages);
      const socketid = Getsocketid(Reciverid);
      if (socketid) {
        io.to(socketid).emit("Message", createmessage);
      }
      return res
        .status(200)
        .json(new Apiresponse(200, Messages, "Message created"));
    }
    if (message) {
      const Findsenderdata = await User.findById(senderid);
      console.log("Findsenderdata", Findsenderdata);
      const UserExist = await ConversationofUser.find({
        Users: { $all: [senderid, Reciverid] },
      });
      console.log("UserExist", UserExist);

      if (!UserExist) {
        await ConversationofUser.create({
          Users: [senderid, Reciverid],
        });
      }

      const createmessage = await Message.create({
        Loginuserid: senderid,
        LogedinuserImage: Findsenderdata.imageuser,
        message,
      });

      const UserExisted = await ConversationofUser.findOne({
        Users: { $all: [senderid, Reciverid] },
      });
      console.log("UserExisted", UserExisted);

      UserExisted.Messageid.push(createmessage._id);
      UserExisted.save();
      const Messages = await UserExisted.populate("Messageid");
      console.log("Messages", Messages);
      const socketid = Getsocketid(Reciverid);
      if (socketid) {
        io.to(socketid).emit("Message", createmessage);
      }
      return res
        .status(200)
        .json(new Apiresponse(200, Messages, "Message created"));
    }
    if (req.file) {
      const imagesent = await fileUpload(req?.file?.path);
      const Findsenderdata = await User.findById(senderid);
      console.log("Findsenderdata", Findsenderdata);
      const UserExist = await ConversationofUser.findOne({
        Users: { $all: [senderid, Reciverid] },
      });
      console.log("UserExist", UserExist);

      if (!UserExist) {
        await ConversationofUser.create({
          Users: [senderid, Reciverid],
        });
      }

      const createmessage = await Message.create({
        Loginuserid: senderid,
        LogedinuserImage: Findsenderdata.imageuser,
        images: imagesent?.url,
      });

      const UserExisted = await ConversationofUser.findOne({
        Users: { $all: [senderid, Reciverid] },
      });
      console.log("UserExisted", UserExisted);

      UserExisted.Messageid.push(createmessage._id);
      UserExisted.save();
      const Messages = await UserExisted.populate("Messageid");
      console.log("Messages", Messages);
      const socketid = Getsocketid(Reciverid);
      if (socketid) {
        io.to(socketid).emit("Message", createmessage);
      }
      return res
        .status(200)
        .json(new Apiresponse(200, Messages, "Message created"));
    } else {
      const findAllmessages = await ConversationofUser.findOne({
        Users: { $all: [senderid, Reciverid] },
      }).populate("Messageid");
      return res
        .status(200)
        .json(new Apiresponse(200, findAllmessages, "All messages"));
    }
  } catch (error) {
    next(error);
  }
};
