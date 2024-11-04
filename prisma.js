const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // 新しいユーザーの作成
  const newUser = await prisma.user.create({
    data: {
      name: "Lilice",
      email: "lilice@example.com",
    },
  });
  console.log("Created user:", newUser);

  // ユーザーの取得
  const users = await prisma.user.findMany();
  console.log("All users:", users);

  // ユーザーの更新
  const updatedUser = await prisma.user.update({
    where: { id: newUser.id },
    data: { name: "Lilice Updated" },
  });
  console.log("Updated user:", updatedUser);

  // ユーザーの削除
  await prisma.user.delete({
    where: { id: newUser.id },
  });
  console.log("Deleted user with id:", newUser.id);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
