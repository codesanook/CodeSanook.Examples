﻿using System;

namespace Codesanook.Examples.CSharp.Models
{
    [Serializable]
    public class Order
    {
        private User user;

        public int Id { get; set; }
        public string Name { get; set; }

        public User User
        {
            get => user;
            set => user = value;
        }
    }
}