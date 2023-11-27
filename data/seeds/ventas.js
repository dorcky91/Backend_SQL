/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ventas").truncate();
  await knex("ventas").insert([
    {
      producto_id: 1,
      cliente_id: 1,
      cantidad: 5,
    },
    {
      producto_id: 1,
      cliente_id: 5,
      cantidad: 5,
    },
    {
      producto_id: 2,
      cliente_id: 1,
      cantidad: 5,
    },
    {
      producto_id: 2,
      cliente_id: 5,
      cantidad: 5,
    },
    {
      producto_id: 2,
      cliente_id: 5,
      cantidad: 5,
    },
    {
      producto_id: 2,
      cliente_id: 2,
      cantidad: 6,
    },
    {
      producto_id: 3,
      cliente_id: 1,
      cantidad: 7,
    },
    {
      producto_id: 3,
      cliente_id: 54,
      cantidad: 7,
    },
    {
      producto_id: 3,
      cliente_id: 5,
      cantidad: 7,
    },
    {
      producto_id: 3,
      cliente_id: 3,
      cantidad: 7,
    },
    {
      producto_id: 4,
      cliente_id: 1,
      cantidad: 8,
    },
    {
      producto_id: 4,
      cliente_id: 5,
      cantidad: 8,
    },
    {
      producto_id: 4,
      cliente_id: 4,
      cantidad: 8,
    },
    {
      producto_id: 5,
      cliente_id: 1,
      cantidad: 9,
    },
    {
      producto_id: 5,
      cliente_id: 5,
      cantidad: 9,
    },
    {
      producto_id: 6,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 6,
      cliente_id: 56,
      cantidad: 10,
    },
    {
      producto_id: 6,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 6,
      cliente_id: 6,
      cantidad: 10,
    },

    {
      producto_id: 8,
      cliente_id: 1,
      cantidad: 12,
    },
    {
      producto_id: 8,
      cliente_id: 58,
      cantidad: 12,
    },
    {
      producto_id: 8,
      cliente_id: 5,
      cantidad: 12,
    },
    {
      producto_id: 8,
      cliente_id: 8,
      cantidad: 12,
    },
    {
      producto_id: 9,
      cliente_id: 1,
      cantidad: 13,
    },
    {
      producto_id: 9,
      cliente_id: 5,
      cantidad: 13,
    },
    {
      producto_id: 9,
      cliente_id: 9,
      cantidad: 13,
    },

    {
      producto_id: 11,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 11,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 11,
      cliente_id: 11,
      cantidad: 15,
    },

    {
      producto_id: 13,
      cliente_id: 1,
      cantidad: 12,
    },
    {
      producto_id: 13,
      cliente_id: 5,
      cantidad: 12,
    },
    {
      producto_id: 13,
      cliente_id: 13,
      cantidad: 12,
    },
    {
      producto_id: 14,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 14,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 14,
      cliente_id: 14,
      cantidad: 20,
    },
    {
      producto_id: 15,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 15,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 15,
      cliente_id: 15,
      cantidad: 15,
    },
    {
      producto_id: 16,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 16,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 16,
      cliente_id: 16,
      cantidad: 20,
    },
    {
      producto_id: 17,
      cliente_id: 1,
      cantidad: 25,
    },
    {
      producto_id: 17,
      cliente_id: 5,
      cantidad: 25,
    },
    {
      producto_id: 17,
      cliente_id: 17,
      cantidad: 25,
    },
    {
      producto_id: 18,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 18,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 18,
      cliente_id: 18,
      cantidad: 15,
    },

    {
      producto_id: 20,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 20,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 20,
      cliente_id: 20,
      cantidad: 10,
    },
    {
      producto_id: 21,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 21,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 21,
      cliente_id: 21,
      cantidad: 20,
    },
    {
      producto_id: 22,
      cliente_id: 1,
      cantidad: 8,
    },
    {
      producto_id: 22,
      cliente_id: 5,
      cantidad: 8,
    },
    {
      producto_id: 22,
      cliente_id: 22,
      cantidad: 8,
    },
    {
      producto_id: 23,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 23,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 23,
      cliente_id: 23,
      cantidad: 10,
    },
    {
      producto_id: 24,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 24,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 24,
      cliente_id: 24,
      cantidad: 15,
    },
    {
      producto_id: 25,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 25,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 25,
      cliente_id: 25,
      cantidad: 20,
    },
    {
      producto_id: 26,
      cliente_id: 1,
      cantidad: 50,
    },
    {
      producto_id: 26,
      cliente_id: 5,
      cantidad: 50,
    },
    {
      producto_id: 26,
      cliente_id: 26,
      cantidad: 50,
    },
    {
      producto_id: 27,
      cliente_id: 1,
      cantidad: 35,
    },
    {
      producto_id: 27,
      cliente_id: 5,
      cantidad: 35,
    },
    {
      producto_id: 27,
      cliente_id: 27,
      cantidad: 35,
    },
    {
      producto_id: 28,
      cliente_id: 1,
      cantidad: 5,
    },
    {
      producto_id: 28,
      cliente_id: 5,
      cantidad: 5,
    },
    {
      producto_id: 28,
      cliente_id: 28,
      cantidad: 5,
    },
    {
      producto_id: 29,
      cliente_id: 1,
      cantidad: 8,
    },
    {
      producto_id: 29,
      cliente_id: 5,
      cantidad: 8,
    },
    {
      producto_id: 29,
      cliente_id: 29,
      cantidad: 8,
    },
    {
      producto_id: 30,
      cliente_id: 1,
      cantidad: 5,
    },
    {
      producto_id: 30,
      cliente_id: 5,
      cantidad: 5,
    },
    {
      producto_id: 30,
      cliente_id: 30,
      cantidad: 5,
    },
    {
      producto_id: 31,
      cliente_id: 1,
      cantidad: 8,
    },
    {
      producto_id: 31,
      cliente_id: 5,
      cantidad: 8,
    },
    {
      producto_id: 31,
      cliente_id: 31,
      cantidad: 8,
    },
    {
      producto_id: 32,
      cliente_id: 1,
      cantidad: 7,
    },
    {
      producto_id: 32,
      cliente_id: 5,
      cantidad: 7,
    },
    {
      producto_id: 32,
      cliente_id: 32,
      cantidad: 7,
    },
    {
      producto_id: 33,
      cliente_id: 1,
      cantidad: 9,
    },
    {
      producto_id: 33,
      cliente_id: 5,
      cantidad: 9,
    },
    {
      producto_id: 33,
      cliente_id: 33,
      cantidad: 9,
    },

    {
      producto_id: 35,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 35,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 35,
      cliente_id: 35,
      cantidad: 10,
    },
    {
      producto_id: 36,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 36,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 36,
      cliente_id: 36,
      cantidad: 15,
    },
    {
      producto_id: 37,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 37,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 37,
      cliente_id: 37,
      cantidad: 20,
    },
    {
      producto_id: 38,
      cliente_id: 1,
      cantidad: 25,
    },
    {
      producto_id: 38,
      cliente_id: 5,
      cantidad: 25,
    },
    {
      producto_id: 38,
      cliente_id: 38,
      cantidad: 25,
    },
    {
      producto_id: 39,
      cliente_id: 1,
      cantidad: 8,
    },
    {
      producto_id: 39,
      cliente_id: 5,
      cantidad: 8,
    },
    {
      producto_id: 39,
      cliente_id: 39,
      cantidad: 8,
    },

    {
      producto_id: 40,
      cliente_id: 1,
      cantidad: 6,
    },
    {
      producto_id: 40,
      cliente_id: 5,
      cantidad: 6,
    },
    {
      producto_id: 40,
      cliente_id: 40,
      cantidad: 6,
    },
    {
      producto_id: 41,
      cliente_id: 1,
      cantidad: 7,
    },
    {
      producto_id: 41,
      cliente_id: 5,
      cantidad: 7,
    },
    {
      producto_id: 41,
      cliente_id: 41,
      cantidad: 7,
    },
    {
      producto_id: 42,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 42,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 42,
      cliente_id: 42,
      cantidad: 10,
    },

    {
      producto_id: 44,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 44,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 44,
      cliente_id: 44,
      cantidad: 20,
    },
    {
      producto_id: 45,
      cliente_id: 1,
      cantidad: 25,
    },
    {
      producto_id: 45,
      cliente_id: 5,
      cantidad: 25,
    },
    {
      producto_id: 45,
      cliente_id: 45,
      cantidad: 25,
    },
    {
      producto_id: 46,
      cliente_id: 1,
      cantidad: 12,
    },
    {
      producto_id: 46,
      cliente_id: 5,
      cantidad: 12,
    },
    {
      producto_id: 46,
      cliente_id: 46,
      cantidad: 12,
    },
    {
      producto_id: 47,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 47,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 47,
      cliente_id: 47,
      cantidad: 15,
    },
    {
      producto_id: 48,
      cliente_id: 1,
      cantidad: 8,
    },
    {
      producto_id: 48,
      cliente_id: 5,
      cantidad: 8,
    },
    {
      producto_id: 48,
      cliente_id: 48,
      cantidad: 8,
    },

    {
      producto_id: 51,
      cliente_id: 1,
      cantidad: 11,
    },
    {
      producto_id: 51,
      cliente_id: 5,
      cantidad: 11,
    },
    {
      producto_id: 51,
      cliente_id: 51,
      cantidad: 11,
    },
    {
      producto_id: 52,
      cliente_id: 1,
      cantidad: 12,
    },
    {
      producto_id: 52,
      cliente_id: 5,
      cantidad: 12,
    },
    {
      producto_id: 52,
      cliente_id: 52,
      cantidad: 12,
    },
    {
      producto_id: 53,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 53,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 53,
      cliente_id: 53,
      cantidad: 20,
    },
    {
      producto_id: 54,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 54,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 54,
      cliente_id: 54,
      cantidad: 15,
    },
    {
      producto_id: 55,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 55,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 55,
      cliente_id: 55,
      cantidad: 10,
    },
    {
      producto_id: 56,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 56,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 56,
      cliente_id: 56,
      cantidad: 15,
    },

    {
      producto_id: 58,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 58,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 58,
      cliente_id: 58,
      cantidad: 15,
    },
    {
      producto_id: 59,
      cliente_id: 1,
      cantidad: 12,
    },
    {
      producto_id: 59,
      cliente_id: 5,
      cantidad: 12,
    },
    {
      producto_id: 59,
      cliente_id: 59,
      cantidad: 12,
    },

    {
      producto_id: 61,
      cliente_id: 1,
      cantidad: 16,
    },
    {
      producto_id: 61,
      cliente_id: 5,
      cantidad: 16,
    },
    {
      producto_id: 61,
      cliente_id: 61,
      cantidad: 16,
    },
    {
      producto_id: 62,
      cliente_id: 1,
      cantidad: 11,
    },
    {
      producto_id: 62,
      cliente_id: 5,
      cantidad: 11,
    },
    {
      producto_id: 62,
      cliente_id: 62,
      cantidad: 11,
    },
    {
      producto_id: 63,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 63,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 63,
      cliente_id: 63,
      cantidad: 20,
    },
    {
      producto_id: 64,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 64,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 64,
      cliente_id: 64,
      cantidad: 15,
    },
    {
      producto_id: 65,
      cliente_id: 8,
      cantidad: 20,
    },
    {
      producto_id: 65,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 65,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 66,
      cliente_id: 10,
      cantidad: 12,
    },
    {
      producto_id: 66,
      cliente_id: 1,
      cantidad: 12,
    },
    {
      producto_id: 66,
      cliente_id: 5,
      cantidad: 12,
    },
    {
      producto_id: 67,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 67,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 68,
      cliente_id: 12,
      cantidad: 22,
    },
    {
      producto_id: 68,
      cliente_id: 1,
      cantidad: 22,
    },
    {
      producto_id: 68,
      cliente_id: 5,
      cantidad: 22,
    },
    {
      producto_id: 69,
      cliente_id: 18,
      cantidad: 8,
    },
    {
      producto_id: 69,
      cliente_id: 1,
      cantidad: 8,
    },
    {
      producto_id: 69,
      cliente_id: 5,
      cantidad: 8,
    },
    {
      producto_id: 70,
      cliente_id: 25,
      cantidad: 25,
    },
    {
      producto_id: 70,
      cliente_id: 1,
      cantidad: 25,
    },
    {
      producto_id: 70,
      cliente_id: 5,
      cantidad: 25,
    },
    {
      producto_id: 71,
      cliente_id: 19,
      cantidad: 20,
    },
    {
      producto_id: 71,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 71,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 72,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 72,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 73,
      cliente_id: 14,
      cantidad: 19,
    },
    {
      producto_id: 73,
      cliente_id: 1,
      cantidad: 19,
    },
    {
      producto_id: 73,
      cliente_id: 5,
      cantidad: 19,
    },
    {
      producto_id: 74,
      cliente_id: 64,
      cantidad: 15,
    },
    {
      producto_id: 74,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 74,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 75,
      cliente_id: 28,
      cantidad: 15,
    },
    {
      producto_id: 75,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 75,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 76,
      cliente_id: 1,
      cantidad: 30,
    },
    {
      producto_id: 76,
      cliente_id: 5,
      cantidad: 30,
    },
    {
      producto_id: 77,
      cliente_id: 60,
      cantidad: 25,
    },
    {
      producto_id: 77,
      cliente_id: 1,
      cantidad: 25,
    },
    {
      producto_id: 77,
      cliente_id: 5,
      cantidad: 25,
    },
    {
      producto_id: 78,
      cliente_id: 15,
      cantidad: 15,
    },
    {
      producto_id: 78,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 78,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 79,
      cliente_id: 20,
      cantidad: 20,
    },
    {
      producto_id: 79,
      cliente_id: 1,
      cantidad: 20,
    },
    {
      producto_id: 79,
      cliente_id: 5,
      cantidad: 20,
    },
    {
      producto_id: 80,
      cliente_id: 3,
      cantidad: 27,
    },
    {
      producto_id: 80,
      cliente_id: 1,
      cantidad: 27,
    },
    {
      producto_id: 80,
      cliente_id: 5,
      cantidad: 27,
    },
    {
      producto_id: 81,
      cliente_id: 7,
      cantidad: 15,
    },
    {
      producto_id: 81,
      cliente_id: 1,
      cantidad: 15,
    },
    {
      producto_id: 81,
      cliente_id: 5,
      cantidad: 15,
    },
    {
      producto_id: 82,
      cliente_id: 8,
      cantidad: 10,
    },
    {
      producto_id: 82,
      cliente_id: 1,
      cantidad: 10,
    },
    {
      producto_id: 82,
      cliente_id: 5,
      cantidad: 10,
    },
    {
      producto_id: 83,
      cliente_id: 21,
      cantidad: 14,
    },
    {
      producto_id: 83,
      cliente_id: 1,
      cantidad: 14,
    },
    {
      producto_id: 83,
      cliente_id: 5,
      cantidad: 14,
    },
    {
      producto_id: 84,
      cliente_id: 33,
      cantidad: 18,
    },
    {
      producto_id: 84,
      cliente_id: 1,
      cantidad: 18,
    },
    {
      producto_id: 84,
      cliente_id: 5,
      cantidad: 18,
    },
    {
      producto_id: 85,
      cliente_id: 37,
      cantidad: 30,
    },
    {
      producto_id: 85,
      cliente_id: 1,
      cantidad: 30,
    },
    {
      producto_id: 85,
      cliente_id: 5,
      cantidad: 30,
    },
    {
      producto_id: 86,
      cliente_id: 5,
      cantidad: 18,
    },
    {
      producto_id: 86,
      cliente_id: 1,
      cantidad: 18,
    },
    {
      producto_id: 87,
      cliente_id: 49,
      cantidad: 17,
    },
    {
      producto_id: 87,
      cliente_id: 1,
      cantidad: 17,
    },
    {
      producto_id: 87,
      cliente_id: 5,
      cantidad: 17,
    },
    {
      producto_id: 88,
      cliente_id: 58,
      cantidad: 23,
    },
    {
      producto_id: 88,
      cliente_id: 1,
      cantidad: 23,
    },
    {
      producto_id: 88,
      cliente_id: 5,
      cantidad: 23,
    },
    {
      producto_id: 89,
      cliente_id: 61,
      cantidad: 33,
    },
    {
      producto_id: 89,
      cliente_id: 1,
      cantidad: 33,
    },
    {
      producto_id: 89,
      cliente_id: 5,
      cantidad: 33,
    },
    {
      producto_id: 90,
      cliente_id: 63,
      cantidad: 40,
    },
    {
      producto_id: 90,
      cliente_id: 1,
      cantidad: 40,
    },
    {
      producto_id: 90,
      cliente_id: 5,
      cantidad: 40,
    },
  ]);
};
